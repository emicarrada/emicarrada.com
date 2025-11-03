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
  <meta name="color-scheme" content="dark light">
  <meta name="supported-color-schemes" content="dark light">
  <title>${article.title}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@400;700&display=swap');
    
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: 'Be Vietnam', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #ffffff;
      background: linear-gradient(135deg, #041737 0%, #0a1929 100%);
      margin: 0;
      padding: 0;
      min-height: 100vh;
    }
    .container { 
      max-width: 600px; 
      margin: 0 auto; 
      background: linear-gradient(135deg, #041737 0%, #0a1929 100%);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }
    .header { 
      background: linear-gradient(135deg, #041737 0%, #0a1929 100%);
      padding: 40px 30px; 
      text-align: center; 
      border-bottom: 1px solid rgba(255,107,0,0.2);
      position: relative;
    }
    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at center, rgba(255,107,0,0.1) 0%, transparent 70%);
      pointer-events: none;
    }
    .logo {
      width: 80px;
      height: auto;
      margin-bottom: 20px;
      filter: drop-shadow(0 4px 8px rgba(255,107,0,0.3));
    }
    .header h1 { 
      color: #FF6B00; 
      font-size: 32px; 
      margin-bottom: 10px; 
      font-weight: 700;
      text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    }
    .header p {
      color: #ffffff;
      opacity: 0.9;
      font-size: 16px;
    }
    .content { 
      padding: 40px 30px; 
      background: linear-gradient(135deg, #041737 0%, #0a1929 100%);
    }
    .message {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,107,0,0.2);
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 30px;
      color: #ffffff;
      line-height: 1.7;
    }
    .article-card {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,107,0,0.3);
      border-radius: 16px;
      padding: 30px;
      margin: 30px 0;
      transition: all 0.3s ease;
    }
    .article-card:hover {
      border-color: #FF6B00;
      box-shadow: 0 8px 25px rgba(255,107,0,0.2);
    }
    .article-title {
      color: #FF6B00;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 15px;
      line-height: 1.3;
    }
    .article-image { 
      width: 100%; 
      height: auto; 
      border-radius: 12px; 
      margin: 20px 0;
      box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    }
    .article-preview {
      color: #cccccc;
      font-size: 16px;
      line-height: 1.6;
      margin: 20px 0;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #FF6B00 0%, #ff8533 100%);
      color: #ffffff !important;
      text-decoration: none;
      padding: 16px 32px;
      border-radius: 12px;
      font-weight: 700;
      font-size: 16px;
      margin: 25px 0;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(255,107,0,0.3);
      border: 2px solid rgba(255,107,0,0.5);
    }
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(255,107,0,0.4);
      background: linear-gradient(135deg, #ff8533 0%, #FF6B00 100%);
    }
    .article-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.1);
      font-size: 14px;
      color: #aaaaaa;
    }
    .footer {
      background: linear-gradient(135deg, #041737 0%, #0a1929 100%);
      padding: 30px;
      text-align: center;
      border-top: 1px solid rgba(255,107,0,0.2);
    }
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }
    .social-links {
      display: flex;
      gap: 15px;
    }
    .social-links a {
      color: #FF6B00;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
    }
    .social-links a:hover {
      color: #ff8533;
    }
    .footer-text {
      font-size: 12px;
      color: #888888;
      margin-top: 20px;
      line-height: 1.5;
    }
    .unsubscribe-link {
      color: #FF6B00;
      text-decoration: none;
      font-weight: 600;
    }
    .unsubscribe-link:hover {
      color: #ff8533;
    }
    @media (max-width: 600px) {
      .content, .header { padding: 20px 15px; }
      .header h1 { font-size: 28px; }
      .article-title { font-size: 20px; }
      .footer-content { flex-direction: column; text-align: center; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://emicarrada.com/logoemicarrada.png" alt="Emi Carrada Logo" class="logo" />
      <h1>📰 Newsletter</h1>
      <p>Tu dosis semanal de contenido</p>
    </div>
    
    <div class="content">
      <div class="message">
        ${message.replace(/\n/g, '<br>')}
      </div>
      
      <div class="article-card">
        <h2 class="article-title">${article.title}</h2>
        
        ${article.image ? `<img src="https://emicarrada.com${article.image}" alt="${article.title}" class="article-image" />` : ''}
        
        <p class="article-preview">${preview}</p>
        
        <div style="text-align: center;">
          <a href="https://emicarrada.com/blog/${article.id}" class="cta-button">
            📖 Leer Artículo Completo
          </a>
        </div>
        
        <div class="article-meta">
          <span>✍️ Emi Carrada</span>
          <span>📅 ${formattedDate}</span>
          <span>⏱️ ${article.readTime || '5 min'}</span>
        </div>
      </div>
    </div>
    
    <div class="footer">
      <div class="footer-content">
        <div>
          <strong style="color: #FF6B00;">Emi Carrada</strong><br>
          <span style="color: #cccccc; font-size: 14px;">Desarrollador Full Stack</span>
        </div>
        <div class="social-links">
          <a href="https://github.com/emicarrada">GitHub</a>
          <a href="https://linkedin.com/in/emicarrada">LinkedIn</a>
          <a href="https://emicarrada.com">Web</a>
        </div>
      </div>
      
      <p class="footer-text">
        Recibes este correo porque te suscribiste al newsletter.<br>
        <a href="https://emicarrada.com/unsubscribe" class="unsubscribe-link">Cancelar suscripción</a>
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
