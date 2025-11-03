#!/usr/bin/env node

/**
 * Script para probar la API de newsletters localmente
 * Ejecuta la función serverless directamente sin necesidad de servidor web
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
  console.log('⚠️  No se encontró .env.local, usando valores por defecto para pruebas');
  process.env.RESEND_API_KEY = 'test_api_key_replace_with_real_one';
}

// Importar la función de API
const { default: handler } = await import('./api/send-newsletter.js');

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
async function testNewsletterAPI() {
  console.log('🧪 Probando API de Newsletters...\n');

  // Datos de prueba
  const testData = {
    articleId: 'experiencia-hackathon-openai-kavak-2025',
    testMode: true,
    testEmail: 'emicarrada.mx@gmail.com',
    customMessage: '¡Hola! Esta es una prueba del sistema de newsletters automatizado.',
    previewText: 'Prueba del sistema de envío automático'
  };

  console.log('📤 Enviando datos de prueba:');
  console.log(JSON.stringify(testData, null, 2));
  console.log('\n⏳ Procesando...\n');

  try {
    // Crear request/response mock
    const req = createMockRequest(testData);
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
      console.log('\n✅ ¡Prueba exitosa! Revisa tu email en cristopher@emicarrada.com');
    } else {
      console.log('\n❌ Error en la prueba');
    }

  } catch (error) {
    console.error('\n❌ Error ejecutando la prueba:', error.message);
    console.error(error.stack);
  }
}

// Ejecutar la prueba
testNewsletterAPI();