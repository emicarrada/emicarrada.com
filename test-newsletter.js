#!/usr/bin/env node

/**
 * Script para probar la API de newsletters localmente
 * Ejecuta la función serverless directamente sin necesidad de servidor web
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Simular variables de entorno
process.env.RESEND_API_KEY = 're_N62KB8ni_EHTXtyiMAjkA2DLxMhTFqcGn';
process.env.NEWSLETTER_FROM_EMAIL = 'Emi Carrada <newsletter@send.emicarrada.com>';
process.env.NEWSLETTER_FROM_NAME = 'Emi Carrada';
process.env.NEWSLETTER_REPLY_TO = 'cristopher@emicarrada.com';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
    testEmail: 'cristopher@emicarrada.com',
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