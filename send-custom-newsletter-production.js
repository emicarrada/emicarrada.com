#!/usr/bin/env node

/**
 * Script para enviar newsletter personalizado a TODOS los suscriptores
 * MODO PRODUCCIÓN - Enviará a todos los emails en DataBaseSuscribers.txt
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Simular variables de entorno (carga desde .env.local si existe)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  const envPath = join(__dirname, '.env.local');
  const envContent = readFileSync(envPath, 'utf-8');
  const envLines = envContent.split('\n');
  
  envLines.forEach(line => {
    if (!line.trim() || line.trim().startsWith('#')) return;
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
      process.env[key.trim()] = valueParts.join('=').trim();
    }
  });
} catch (error) {
  console.log('⚠️  No se encontró .env.local');
  process.exit(1);
}

// Importar la función de API
const { default: handler } = await import('./api/send-custom-newsletter.js');

// Crear un mock de Vercel request/response
function createMockRequest(body) {
  return {
    method: 'POST',
    body: body,
    headers: {
      'content-type': 'application/json'
    }
  };
}

function createMockResponse() {
  const res = {
    statusCode: 200,
    headers: {},
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(data) {
      this.body = JSON.stringify(data, null, 2);
      return this;
    },
    setHeader(name, value) {
      this.headers[name] = value;
      return this;
    }
  };
  return res;
}

// Función principal
async function sendNewsletterProduction() {
  console.log('🚀 ENVIANDO NEWSLETTER A TODOS LOS SUSCRIPTORES...\n');

  const message = `Hola! 👋

Esta semana no pude subir blog nuevo... lo sé, lo sé.

Pero tengo una buena razón: estoy preparando algo IMPORTANTE sobre un tema que todos nos preguntamos...

🤖 ¿La IA nos va a reemplazar como programadores?

Es una pregunta que escucho TODO el tiempo, y quiero darte mi perspectiva real después de:
- Haber trabajado con IA en proyectos reales
- Competir en el Hackathon OpenAI x Kavak
- Ver cómo está cambiando la industria en México

Pero no va a ser solo mi opinión. Estoy yendo más allá:

✨ Recopilando testimonios reales
🎤 Entrevistando a personas del ámbito de IA en México
💡 Hablando con desarrolladores, empresas y expertos

No va a ser el típico artículo apocalíptico de "la IA nos va a quitar el trabajo" ni tampoco el optimista de "todo va a estar bien". Va a ser una investigación REAL de lo que está pasando en México y América Latina.

Estate atento la próxima semana 👀

Te va a gustar mucho, lo prometo.

Mientras tanto, ¿tú qué opinas? ¿Crees que la IA nos va a reemplazar? Responde este correo, me encantaría saber tu punto de vista (y tal vez incluir tu testimonio en el artículo 😉).

Un abrazo,
emicarrada`;

  // Datos para producción
  const productionData = {
    subject: '📰 No hay Blog esta semana (pero viene algo épico 🔥)',
    message: message,
    imageUrl: 'https://emicarrada.com/gatitotriste.png',
    testMode: false,  // MODO PRODUCCIÓN
  };

  console.log('📧 Asunto:', productionData.subject);
  console.log('🖼️  Imagen:', productionData.imageUrl);
  console.log('📬 Modo: PRODUCCIÓN (todos los suscriptores)');
  console.log('\n⏳ Procesando...\n');

  try {
    // Crear request/response mock
    const req = createMockRequest(productionData);
    const res = createMockResponse();

    // Ejecutar la función
    await handler(req, res);

    // Mostrar resultado
    console.log('📧 Respuesta del servidor:');
    console.log(`Status: ${res.statusCode}`);
    if (res.body) {
      const responseData = JSON.parse(res.body);
      console.log(JSON.stringify(responseData, null, 2));
    }

    if (res.statusCode === 200) {
      console.log('\n✅ ¡Newsletters enviados exitosamente!');
    } else {
      console.log('\n❌ Error en el envío');
    }

  } catch (error) {
    console.error('\n❌ Error ejecutando el envío:', error.message);
    console.error(error.stack);
  }
}

// Confirmar antes de enviar
console.log('\n⚠️  ¡ATENCIÓN! Estás a punto de enviar el newsletter a TODOS los suscriptores.');
console.log('Presiona Ctrl+C para cancelar, o espera 5 segundos para continuar...\n');

setTimeout(() => {
  sendNewsletterProduction();
}, 5000);
