/**
 * API endpoint para enviar newsletters personalizados
 * POST /api/send-custom-newsletter
 * 
 * Body:
 * {
 *   "subject": "No hay Blog esta semana",
 *   "message": "Contenido del mensaje...",
 *   "imageUrl": "https://emicarrada.com/gatitotriste.png",
 *   "testMode": true,
 *   "testEmail": "test@example.com"
 * }
 */

import { Resend } from 'resend';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// --- Servicio de Suscriptores ---
class SubscribersService {
  constructor() {
    this.filePath = path.join(__dirname, '..', 'DataBaseSuscribers.txt');
  }

  async getAll() {
    try {
      const content = await fs.readFile(this.filePath, 'utf-8');
      const emails = content
        .split('\n')
        .map(e => e.trim())
        .filter(e => e && this.isValidEmail(e))
        .map(e => e.toLowerCase());
      return [...new Set(emails)];
    } catch (error) {
      return [];
    }
  }

  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

// --- Función para generar HTML del newsletter personalizado ---
function generateCustomNewsletterHTML(subject, message, imageUrl) {
  // Dividir el mensaje en partes para insertar la imagen después de "lo sé, lo sé"
  const messageParts = message.split('lo sé, lo sé.');
  
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <style>
    body { 
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.6;
      color: #333333;
      background: #ffffff;
      margin: 0;
      padding: 20px;
    }
    .container { 
      max-width: 600px; 
      margin: 0 auto; 
      background: #ffffff;
    }
    .logo-container {
      text-align: center;
      margin-bottom: 30px;
    }
    .logo {
      width: 100px;
      height: auto;
    }
    .message {
      color: #333333;
      line-height: 1.8;
      font-size: 15px;
    }
    .message p {
      margin-bottom: 16px;
    }
    .image-container {
      text-align: center;
      margin: 20px 0;
    }
    .sad-cat {
      max-width: 300px;
      width: 100%;
      height: auto;
    }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #dddddd;
      font-size: 12px;
      color: #666666;
    }
    .footer a {
      color: #0066cc;
      text-decoration: none;
    }
    @media (max-width: 600px) {
      body { padding: 10px; }
      .logo { width: 80px; }
      .message { font-size: 14px; }
      .sad-cat { max-width: 100%; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo-container">
      <img src="https://emicarrada.com/logoemicarrada.png" alt="emicarrada" class="logo" />
    </div>
    
    <div class="message">
      ${messageParts[0] ? messageParts[0].split('\n').map(line => line.trim() ? `<p>${line}</p>` : '<br>').join('') : ''}
      ${messageParts.length > 1 ? '<p>lo sé, lo sé.</p>' : ''}
      
      ${imageUrl && messageParts.length > 1 ? `
      <div class="image-container">
        <img src="${imageUrl}" alt="Gatito triste" class="sad-cat" />
      </div>
      ` : ''}
      
      ${messageParts[1] ? messageParts[1].split('\n').map(line => line.trim() ? `<p>${line}</p>` : '<br>').join('') : ''}
    </div>
    
    <div class="footer">
      <p>Recibes este correo porque te suscribiste al newsletter de emicarrada.</p>
      <p><a href="https://emicarrada.com/unsubscribe">Cancelar suscripción</a></p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

async function sendEmail(resend, to, subject, html) {
  try {
    const response = await resend.emails.send({
      from: process.env.NEWSLETTER_FROM_EMAIL || 'emicarrada <newsletter@emicarrada.com>',
      to: [to],
      subject,
      html,
      replyTo: process.env.NEWSLETTER_REPLY_TO || 'cristopher@emicarrada.com',
    });

    return { success: true, id: response.data?.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function sendCustomNewsletterToSubscribers(resend, subscribers, subject, message, imageUrl) {
  const html = generateCustomNewsletterHTML(subject, message, imageUrl);
  
  const results = [];
  let successful = 0;
  let failed = 0;

  // Enviar en lotes de 10 con delay de 1 segundo
  for (let i = 0; i < subscribers.length; i += 10) {
    const batch = subscribers.slice(i, i + 10);
    
    const batchResults = await Promise.all(
      batch.map(email => sendEmail(resend, email, subject, html))
    );

    batchResults.forEach((result, index) => {
      if (result.success) {
        successful++;
      } else {
        failed++;
      }
      results.push({
        email: batch[index],
        ...result,
      });
    });

    // Delay entre lotes
    if (i + 10 < subscribers.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  return {
    total: subscribers.length,
    successful,
    failed,
    results,
  };
}

// --- Handler Principal ---
export default async function handler(req, res) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Método no permitido. Usa POST.',
    });
  }

  try {
    const {
      subject,
      message,
      imageUrl,
      testMode = false,
      testEmail,
    } = req.body;

    // Validar parámetros
    if (!subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'subject y message son requeridos',
      });
    }

    if (testMode && !testEmail) {
      return res.status(400).json({
        success: false,
        message: 'testEmail es requerido cuando testMode=true',
      });
    }

    // Verificar API key
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({
        success: false,
        message: 'RESEND_API_KEY no configurado',
      });
    }

    // Inicializar Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Modo prueba
    if (testMode) {
      const html = generateCustomNewsletterHTML(subject, message, imageUrl);
      const result = await sendEmail(resend, testEmail, subject, html);
      
      return res.status(result.success ? 200 : 500).json({
        success: result.success,
        message: result.success
          ? `Correo de prueba enviado a ${testEmail}`
          : `Error: ${result.error}`,
      });
    }

    // Modo producción
    const subscribersService = new SubscribersService();
    const subscribers = await subscribersService.getAll();

    if (subscribers.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No hay suscriptores en la base de datos',
      });
    }

    const result = await sendCustomNewsletterToSubscribers(
      resend,
      subscribers,
      subject,
      message,
      imageUrl
    );

    return res.status(200).json({
      success: true,
      message: `Newsletter enviado a ${result.successful} de ${result.total} suscriptores`,
      stats: {
        total: result.total,
        successful: result.successful,
        failed: result.failed,
      },
    });
  } catch (error) {
    console.error('Error en /api/send-custom-newsletter:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message,
    });
  }
}
