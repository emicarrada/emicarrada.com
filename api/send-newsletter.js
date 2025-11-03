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
      width: 120px;
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
      gap: 20px;
      align-items: center;
    }
    .social-links a {
      display: inline-block;
      width: 32px;
      height: 32px;
      transition: all 0.3s ease;
      border-radius: 8px;
      padding: 6px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,107,0,0.2);
    }
    .social-links a:hover {
      background: rgba(255,107,0,0.1);
      border-color: #FF6B00;
      transform: translateY(-2px);
    }
    .social-links svg {
      width: 20px;
      height: 20px;
      fill: #FF6B00;
      transition: fill 0.3s ease;
    }
    .social-links a:hover svg {
      fill: #ff8533;
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
      <img src="https://emicarrada.com/logoemicarrada.png" alt="emicarrada Logo" class="logo" />
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
          <span>✍️ emicarrada</span>
          <span>📅 ${formattedDate}</span>
          <span>⏱️ ${article.readTime || '5 min'}</span>
        </div>
      </div>
    </div>
    
    <div class="footer">
      <div class="footer-content">
        <div>
          <strong style="color: #FF6B00;">emicarrada</strong><br>
          <span style="color: #cccccc; font-size: 14px;">Desarrollador Full Stack</span>
        </div>
        <div class="social-links">
          <a href="https://github.com/emicarrada" title="GitHub">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/emicarrada" title="LinkedIn">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://emicarrada.com" title="Sitio Web">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </a>
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
