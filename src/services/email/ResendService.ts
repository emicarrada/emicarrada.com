import { Resend } from 'resend';
import type { BlogArticle } from '../../types/blog';

export interface EmailConfig {
  apiKey: string;
  fromEmail: string;
  fromName: string;
  replyTo?: string;
}

export interface NewsletterData {
  article: BlogArticle;
  previewText?: string;
  customMessage?: string;
}

export class ResendService {
  private resend: Resend;
  private config: EmailConfig;

  constructor(config: EmailConfig) {
    this.config = config;
    this.resend = new Resend(config.apiKey);
  }

  /**
   * Envía un newsletter a un suscriptor individual
   */
  async sendNewsletterToSubscriber(
    email: string,
    data: NewsletterData
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    try {
      const htmlContent = this.generateNewsletterHTML(data);
      const textContent = this.generateNewsletterText(data);

      const response = await this.resend.emails.send({
        from: `${this.config.fromName} <${this.config.fromEmail}>`,
        to: email,
        replyTo: this.config.replyTo || this.config.fromEmail,
        subject: `Nuevo blog: ${data.article.title}`,
        html: htmlContent,
        text: textContent,
        tags: [
          { name: 'type', value: 'newsletter' },
          { name: 'article_id', value: data.article.id },
        ],
      });

      return {
        success: true,
        messageId: response.data?.id || 'unknown',
      };
    } catch (error) {
      console.error(`Error sending email to ${email}:`, error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Envía newsletter a múltiples suscriptores (con rate limiting)
   */
  async sendNewsletterToSubscribers(
    emails: string[],
    data: NewsletterData,
    options: { batchSize?: number; delayMs?: number } = {}
  ): Promise<{
    total: number;
    successful: number;
    failed: number;
    results: Array<{ email: string; success: boolean; error?: string }>;
  }> {
    const { batchSize = 10, delayMs = 1000 } = options;
    const results: Array<{ email: string; success: boolean; error?: string }> = [];
    let successful = 0;
    let failed = 0;

    // Procesar en lotes para evitar rate limits
    for (let i = 0; i < emails.length; i += batchSize) {
      const batch = emails.slice(i, i + batchSize);
      
      const batchPromises = batch.map(async (email) => {
        const result = await this.sendNewsletterToSubscriber(email, data);
        return {
          email,
          success: result.success,
          error: result.error,
        };
      });

      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults.map(r => ({
        email: r.email,
        success: r.success,
        ...(r.error && { error: r.error })
      })));

      // Contar éxitos y fallos
      batchResults.forEach((result) => {
        if (result.success) successful++;
        else failed++;
      });

      // Delay entre lotes
      if (i + batchSize < emails.length) {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }

    return {
      total: emails.length,
      successful,
      failed,
      results,
    };
  }

  /**
   * Genera el HTML del newsletter
   */
  private generateNewsletterHTML(data: NewsletterData): string {
    const { article, previewText, customMessage } = data;
    const unsubscribeUrl = `https://emicarrada.com/unsubscribe`; // TODO: Implementar endpoint

    return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${article.title}</title>
  <style>
    body {
      font-family: 'Be Vietnam', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f7;
    }
    .container {
      background-color: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #041737 0%, #092a5a 100%);
      padding: 40px 20px;
      text-align: center;
    }
    .header h1 {
      color: #FF8200;
      margin: 0;
      font-size: 28px;
      font-weight: bold;
    }
    .header p {
      color: #ffffff;
      margin: 10px 0 0 0;
      font-size: 14px;
    }
    .content {
      padding: 40px 30px;
    }
    .article-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    .article-category {
      display: inline-block;
      background-color: #FF8200;
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .article-title {
      font-size: 24px;
      font-weight: bold;
      color: #041737;
      margin: 10px 0;
      line-height: 1.3;
    }
    .article-meta {
      color: #666;
      font-size: 14px;
      margin-bottom: 20px;
    }
    .custom-message {
      background-color: #f8f9fa;
      padding: 20px;
      border-left: 4px solid #FF8200;
      margin: 20px 0;
      border-radius: 4px;
    }
    .cta-button {
      display: inline-block;
      background-color: #FF8200;
      color: white;
      text-decoration: none;
      padding: 14px 32px;
      border-radius: 8px;
      font-weight: bold;
      margin: 20px 0;
      transition: background-color 0.3s;
    }
    .cta-button:hover {
      background-color: #e6750e;
    }
    .footer {
      background-color: #f8f9fa;
      padding: 30px 20px;
      text-align: center;
      font-size: 12px;
      color: #666;
    }
    .footer a {
      color: #FF8200;
      text-decoration: none;
    }
    .social-links {
      margin: 20px 0;
    }
    .social-links a {
      display: inline-block;
      margin: 0 10px;
      color: #041737;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>Cristopher Carrada</h1>
      <p>Desarrollador | Emprendedor | Estudiante UNAM</p>
    </div>

    <!-- Content -->
    <div class="content">
      ${customMessage ? `<div class="custom-message">${customMessage}</div>` : ''}
      
      <img src="https://emicarrada.com${article.src}" alt="${article.title}" class="article-image" />
      
      <span class="article-category">${article.category}</span>
      <h2 class="article-title">${article.title}</h2>
      
      <div class="article-meta">
        Por ${article.author} • ${article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }) : 'Fecha no disponible'}
      </div>

      ${previewText ? `<p>${previewText}</p>` : ''}

      <a href="https://emicarrada.com/#blog" class="cta-button">
        Leer artículo completo →
      </a>

      <p style="margin-top: 30px; padding-top: 30px; border-top: 1px solid #eee; color: #666;">
        Este es un contenido exclusivo para suscriptores de mi blog. Cada domingo comparto experiencias sobre desarrollo, emprendimiento y mi vida en la UNAM.
      </p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div class="social-links">
        <a href="https://github.com/emicarrada">GitHub</a> •
        <a href="https://linkedin.com/in/emicarrada">LinkedIn</a> •
        <a href="https://youtube.com/@emicarrada">YouTube</a>
      </div>
      
      <p>
        © ${new Date().getFullYear()} Cristopher Carrada. Todos los derechos reservados.
      </p>
      
      <p style="margin-top: 20px;">
        <a href="${unsubscribeUrl}">Cancelar suscripción</a> •
        <a href="https://emicarrada.com">Visitar sitio web</a>
      </p>
      
      <p style="margin-top: 10px; color: #999;">
        Recibes este correo porque te suscribiste al blog de Cristopher Carrada.
      </p>
    </div>
  </div>
</body>
</html>
    `;
  }

  /**
   * Genera la versión texto plano del newsletter
   */
  private generateNewsletterText(data: NewsletterData): string {
    const { article, previewText, customMessage } = data;

    return `
${customMessage ? `${customMessage}\n\n` : ''}
NUEVO BLOG: ${article.title}

Categoría: ${article.category}
Por ${article.author}
Fecha: ${article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('es-ES') : 'Fecha no disponible'}

${previewText || ''}

Lee el artículo completo en:
https://emicarrada.com/#blog

---

© ${new Date().getFullYear()} Cristopher Carrada
emicarrada.com

Para cancelar tu suscripción: https://emicarrada.com/unsubscribe
    `.trim();
  }

  /**
   * Envía un correo de prueba
   */
  async sendTestEmail(
    toEmail: string,
    article: BlogArticle
  ): Promise<{ success: boolean; error?: string }> {
    return this.sendNewsletterToSubscriber(toEmail, {
      article,
      customMessage: '🧪 Este es un correo de prueba del sistema de newsletters.',
      previewText: 'Esta es una vista previa del nuevo artículo del blog.',
    });
  }
}

// Factory function para crear instancia con variables de entorno
export function createResendService(): ResendService | null {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.NEWSLETTER_FROM_EMAIL || 'cristopher@emicarrada.com';
  const fromName = process.env.NEWSLETTER_FROM_NAME || 'Cristopher Carrada';
  const replyTo = process.env.NEWSLETTER_REPLY_TO || fromEmail;

  if (!apiKey) {
    console.error('RESEND_API_KEY not found in environment variables');
    return null;
  }

  return new ResendService({
    apiKey,
    fromEmail,
    fromName,
    replyTo,
  });
}
