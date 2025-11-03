# Configuración de Newsletter

## Variables de Entorno Requeridas

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```bash
# Resend API Key (obtener de https://resend.com/api-keys)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx

# Configuración del remitente
NEWSLETTER_FROM_EMAIL=Emi Carrada <newsletter@send.emicarrada.com>
NEWSLETTER_FROM_NAME=Emi Carrada
NEWSLETTER_REPLY_TO=cristopher@emicarrada.com
```

## Uso del API

### 1. Modo Prueba (enviar a un solo email)

```bash
curl -X POST https://emicarrada.com/api/send-newsletter \
  -H "Content-Type: application/json" \
  -d '{
    "articleId": "experiencia-hackathon-openai-kavak-2025",
    "testMode": true,
    "testEmail": "tu@email.com",
    "customMessage": "Hola! Esta semana les traigo un artículo increíble...",
    "previewText": "Resumen corto para el preview"
  }'
```

### 2. Modo Producción (enviar a todos los suscriptores)

```bash
curl -X POST https://emicarrada.com/api/send-newsletter \
  -H "Content-Type: application/json" \
  -d '{
    "articleId": "experiencia-hackathon-openai-kavak-2025",
    "customMessage": "Hola! 👋\n\nEsta semana les traigo...",
    "previewText": "Un resumen del artículo"
  }'
```

## Parámetros

- `articleId` (requerido): ID del artículo del blog (nombre del archivo .json sin extensión)
- `customMessage` (opcional): Mensaje personalizado al inicio del email
- `previewText` (opcional): Texto de preview (se muestra en inbox antes de abrir)
- `testMode` (opcional): `true` para modo prueba
- `testEmail` (requerido si testMode=true): Email de destino para prueba

## Respuesta Exitosa

```json
{
  "success": true,
  "message": "Newsletter enviado a 150 de 152 suscriptores",
  "stats": {
    "total": 152,
    "successful": 150,
    "failed": 2
  }
}
```

## Deployment en Vercel

1. Agregar variables de entorno en Vercel Dashboard:
   - Settings → Environment Variables
   - Agregar `RESEND_API_KEY` y demás variables

2. Deploy:
```bash
git add .
git commit -m "Add newsletter API endpoint"
git push origin main
```

3. Vercel detectará automáticamente la función serverless en `/api/send-newsletter.js`

## Características

- ✅ Envío en lotes de 10 correos con delay de 1 segundo (respeta rate limits)
- ✅ Modo prueba antes de envío masivo
- ✅ Template HTML responsive con diseño profesional
- ✅ Soporte para imágenes del artículo
- ✅ Links a redes sociales
- ✅ Link de unsubscribe (endpoint pendiente)
- ✅ Manejo de errores robusto
- ✅ Estadísticas de envío (exitosos/fallidos)
