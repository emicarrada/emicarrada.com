/**
 * API endpoint para enviar newsletters
 * POST /api/send-newsletter
 * 
 * Body:
 * {
 *   "articleId": "experiencia-hackathon-openai-kavak-2025",
 *   "customMessage": "Hola! Esta semana les traigo...",
 *   "previewText": "Un resumen del artículo",
 *   "testMode": false,
 *   "testEmail": "test@example.com"
 * }
 */

// Importar usando ESM
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

// --- Servicio de Blog ---
class BlogService {
  async getArticleById(id) {
    // Artículos hardcodeados del BlogService
    const articles = [
      {
        id: 'experiencia-hackathon-openai-kavak-2025',
        category: "Experiencia",
        title: "Mi experiencia en el Hackathon OpenAI x Kavak 2025: 13 horas de código intenso",
        src: "/blog/portadahack.jpeg",
        content: null,
        publishedAt: new Date('2024-10-26'),
        author: 'Cristopher Carrada',
        tags: ['Hackathon', 'OpenAI', 'Kavak', 'Experiencia', 'IA', 'Desarrollo'],
        readTime: '8 min'
      },
      {
        id: 'hackathon-OpenAI-2025',
        category: "Experiencia",
        title: "Como logré entrar al Hackathon Kavak x OpenAI México 2025",
        src: "/blog/portadahackathon.jpg",
        content: null,
        publishedAt: new Date('2024-10-05'),
        author: 'Cristopher Carrada',
        tags: ['Hackathon', 'OpenAI', 'IA', 'Kavak', 'Experiencia'],
        readTime: '5 min'
      },
      {
        id: 'ingreso-unam',
        category: "Anecdotarío",
        title: "¿Cómo entre a la mejor universidad de Latinoamérica estudiando con Youtube?",
        src: "/blog/unamportada.jpg",
        content: null,
        publishedAt: new Date('2024-10-01'),
        author: 'Cristopher Carrada',
        tags: ['UNAM', 'Computer Science', 'Lecciones'],
        readTime: '6 min'
      },
      {
        id: 'vida-diaria',
        category: "Vida diaria",
        title: "Mi rutina como estudiante de Computer Science en la UNAM",
        src: "/blog/LibroJulia.jpeg",
        content: null,
        publishedAt: new Date('2024-09-28'),
        author: 'Cristopher Carrada',
        tags: ['Universidad', 'UNAM', 'Carrera'],
        readTime: '4 min'
      },
      {
        id: 'eventos-tech',
        category: "Consejos y tips",
        title: "Como ser social en eventos tech siendo introvertido (o en cualquier situación)",
        src: "/blog/Googleentrada.jpeg",
        content: null,
        publishedAt: new Date('2024-09-25'),
        author: 'Cristopher Carrada',
        tags: ['Google', 'Tech', 'Industry Events'],
        readTime: '5 min'
      },
      {
        id: 'herramientas-productividad',
        category: "Productividad y tools",
        title: "Las apps y sistemas que realmente uso para estudiar en la UNAM",
        src: "/blog/mydesk.jpeg",
        content: null,
        publishedAt: new Date('2024-09-22'),
        author: 'Cristopher Carrada',
        tags: ['Productividad', 'Herramientas', 'Tech Stack'],
        readTime: '7 min'
      },
      {
        id: 'Bitacora-de-un-developer',
        category: "Desarrollando fciencias.app",
        title: "fciencias.app: cómo estoy desarrollando una red social",
        src: "/blog/portadaredsocial.jpeg",
        content: null,
        publishedAt: new Date('2024-09-19'),
        author: 'Cristopher Carrada',
        tags: ['Burnout', 'Bienestar', 'Tech Life'],
        readTime: '6 min'
      },
      {
        id: 'vida-freelancer',
        category: "Consejos y tips",
        title: "Como conseguir clientes como web developer freelance en CDMX",
        src: "/blog/portadapolanco.jpeg",
        content: null,
        publishedAt: new Date('2024-09-16'),
        author: 'Cristopher Carrada',
        tags: ['Aprendizaje', 'Comunidad', 'Desarrollo Personal'],
        readTime: '5 min'
      }
    ];

    return articles.find(article => article.id === id) || null;
  }
}

// --- Funciones de Email ---
function generateNewsletterHTML(article, customMessage, previewText) {
  const formattedDate = article.publishedAt 
    ? new Date(article.publishedAt).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Recientemente';

  const message = customMessage || `Hola! 👋\n\nEsta semana les traigo un nuevo artículo del blog: "${article.title}".`;
  const preview = previewText || article.description?.substring(0, 100) || 'Nuevo artículo disponible';

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>${article.title}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333333;
      background-color: #f4f4f4;
    }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center; }
    .header h1 { color: #ffffff; font-size: 28px; margin-bottom: 10px; }
    .content { padding: 40px 30px; }
    .article-image { width: 100%; height: auto; border-radius: 8px; margin: 20px 0; }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #ffffff !important;
      text-decoration: none;
      padding: 15px 30px;
      border-radius: 8px;
      font-weight: bold;
      margin: 20px 0;
    }
    .footer {
      background-color: #f8f8f8;
      padding: 30px;
      text-align: center;
      font-size: 14px;
      color: #666666;
    }
    @media (max-width: 600px) {
      .content, .header { padding: 20px 15px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📬 Newsletter - Emi Carrada</h1>
      <p style="color: #ffffff; opacity: 0.9;">Tu dosis semanal de contenido</p>
    </div>
    
    <div class="content">
      <p style="white-space: pre-line; margin-bottom: 20px;">${message}</p>
      
      <h2 style="color: #333; margin: 30px 0 15px;">${article.title}</h2>
      
      ${article.image ? `<img src="https://emicarrada.com${article.image}" alt="${article.title}" class="article-image" />` : ''}
      
      <p style="color: #666; margin: 20px 0;">${preview}</p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://emicarrada.com/blog/${article.id}" class="cta-button">
          📖 Leer Artículo Completo
        </a>
      </div>
      
      <div style="margin-top: 30px; padding-top: 30px; border-top: 1px solid #e0e0e0;">
        <p style="color: #666; font-size: 14px;">
          <strong>Publicado:</strong> ${formattedDate}<br>
          <strong>Tiempo de lectura:</strong> ${article.readTime || '5 min'}
        </p>
      </div>
    </div>
    
    <div class="footer">
      <p><strong>Emi Carrada</strong></p>
      <p style="margin: 10px 0;">Desarrollador Full Stack | Creador de contenido</p>
      
      <div style="margin: 20px 0;">
        <a href="https://github.com/emicarrada" style="margin: 0 10px; color: #667eea; text-decoration: none;">GitHub</a>
        <a href="https://linkedin.com/in/emicarrada" style="margin: 0 10px; color: #667eea; text-decoration: none;">LinkedIn</a>
        <a href="https://emicarrada.com" style="margin: 0 10px; color: #667eea; text-decoration: none;">Website</a>
      </div>
      
      <p style="font-size: 12px; color: #999; margin-top: 20px;">
        Recibes este correo porque te suscribiste al newsletter.<br>
        <a href="https://emicarrada.com/unsubscribe" style="color: #667eea; text-decoration: none;">Cancelar suscripción</a>
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

async function sendEmail(resend, to, subject, html) {
  try {
    const response = await resend.emails.send({
      from: process.env.NEWSLETTER_FROM_EMAIL || 'Emi Carrada <newsletter@emicarrada.com>',
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

async function sendNewsletterToSubscribers(resend, subscribers, article, customMessage, previewText) {
  const html = generateNewsletterHTML(article, customMessage, previewText);
  const subject = `📰 Nuevo artículo: ${article.title}`;
  
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
      articleId,
      customMessage,
      previewText,
      testMode = false,
      testEmail,
    } = req.body;

    // Validar parámetros
    if (!articleId) {
      return res.status(400).json({
        success: false,
        message: 'articleId es requerido',
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

    // Obtener artículo
    const blogService = new BlogService();
    const article = await blogService.getArticleById(articleId);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: `Artículo con id "${articleId}" no encontrado`,
      });
    }

    // Inicializar Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Modo prueba
    if (testMode) {
      const html = generateNewsletterHTML(article, customMessage, previewText);
      const result = await sendEmail(
        resend,
        testEmail,
        `📰 [TEST] Nuevo artículo: ${article.title}`,
        html
      );
      
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

    const result = await sendNewsletterToSubscribers(
      resend,
      subscribers,
      article,
      customMessage,
      previewText
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
    console.error('Error en /api/send-newsletter:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message,
    });
  }
}
