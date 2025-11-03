Tipo
Nombre
Clase
TTL
Valor
MX
send.emicarrada.com.
IN
60
Prioridad: 10
Destino: feedback-smtp.us-east-1.amazonses.com
TXT
resend._domainkey.emicarrada.com.
IN
60
"p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC/Jm9g3rnTxWAw+NWx9P9nbqMaOlU2ET39n/fK1HnzluojNwY+xRdnx+qFXH3+wJVjqF0f1MVI6o0QW8AKXZGHV/gI1Yq/tE3MUUa7Bfs6WtyjuYQ7R/PJ4hNDvYFQ0YIiV78skDkbA92FNAHV8SotkikB8RhJwrQv8AepFgKQbwIDAQAB"
TXT
send.emicarrada.com.
IN
60
"v=spf1 include:amazonses.com ~all"
TXT
resend._domainkey.emicarrada.com.
IN
60
"p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC/Jm9g3rnTxWAw+NWx9P9nbqMaOlU2ET39n/fK1HnzluojNwY+xRdnx+qFXH3+wJVjqF0f1MVI6o0QW8AKXZGHV/gI1Yq/tE3MUUa7Bfs6WtyjuYQ7R/PJ4hNDvYFQ0YIiV78skDkbA92FNAHV8SotkikB8RhJwrQv8AepFgKQbwIDAQAB"
MX
send.emicarrada.com.
IN
3600
Prioridad: 10
Destino: vspf1includeamazonses.comall
MX
send.emicarrada.com.
IN
60
Prioridad: 10
Destino: feedback-smtp.us-east-1.amazon# Sistema de Newsletters Automatizado

## ✅ SISTEMA COMPLETADO Y FUNCIONANDO

**Estado:** ✅ Probado y funcionando correctamente
**Email de prueba:** ✅ Enviado exitosamente a cristopher@emicarrada.com

## 🚀 Próximos Pasos para Producción

### 1. Configurar Vercel (Dashboard)

Ve a [vercel.com](https://vercel.com) → Tu proyecto → Settings → Environment Variables:

```
RESEND_API_KEY=re_N62KB8ni_EHTXtyiMAjkA2DLxMhTFqcGn
NEWSLETTER_FROM_EMAIL=Emi Carrada <newsletter@send.emicarrada.com>
NEWSLETTER_FROM_NAME=Emi Carrada
NEWSLETTER_REPLY_TO=cristopher@emicarrada.com
```

### 2. Probar en Producción

Después del deployment automático:

```bash
# Probar con email de prueba
curl -X POST https://emicarrada.com/api/send-newsletter \
  -H "Content-Type: application/json" \
  -d '{
    "articleId": "experiencia-hackathon-openai-kavak-2025",
    "testMode": true,
    "testEmail": "cristopher@emicarrada.com"
  }'
```

### 3. Usar el Script de Envío Fácil

```bash
# Hacer una prueba
./send-newsletter.sh experiencia-hackathon-openai-kavak-2025 --test

# Enviar a todos los suscriptores
./send-newsletter.sh experiencia-hackathon-openai-kavak-2025 --message "¡Nuevo artículo disponible!"
```

## � Características del Sistema

- ✅ **Envío inteligente:** Lotes de 10 emails con delay de 1 segundo
- ✅ **Templates profesionales:** HTML responsive con diseño moderno
- ✅ **Modo seguro:** Pruebas antes de envío masivo
- ✅ **Gestión de suscriptores:** Archivo DataBaseSuscribers.txt
- ✅ **Estadísticas:** Reporte de envíos exitosos/fallidos
- ✅ **Unsubscribe ready:** Enlace preparado (endpoint pendiente)

## 📚 Artículos Disponibles

- `experiencia-hackathon-openai-kavak-2025` - Hackathon OpenAI x Kavak 2025
- `hackathon-OpenAI-2025` - Cómo entrar al Hackathon
- `ingreso-unam` - Ingreso a la UNAM
- `vida-diaria` - Rutina como estudiante
- `eventos-tech` - Ser social en eventos tech
- `herramientas-productividad` - Apps para estudiar
- `Bitacora-de-un-developer` - Desarrollo de fciencias.app
- `vida-freelancer` - Conseguir clientes freelance

## 🔧 Configuración Técnica

### Variables de Entorno
```bash
RESEND_API_KEY=tu_api_key_de_resend
NEWSLETTER_FROM_EMAIL=Emi Carrada <newsletter@send.emicarrada.com>
NEWSLETTER_FROM_NAME=Emi Carrada
NEWSLETTER_REPLY_TO=cristopher@emicarrada.com
```

### DNS Records Verificados ✅
- MX send.emicarrada.com → feedback-smtp.us-east-1.amazonses.com
- TXT send.emicarrada.com → "v=spf1 include:amazonses.com ~all"
- TXT resend._domainkey.emicarrada.com → [clave DKIM]
- TXT _dmarc.emicarrada.com → "v=DMARC1; p=none;"

## 🎯 Uso Diario

### Envío Semanal de Newsletters

1. **Domingos:** Elegir artículo de la semana
2. **Probar:** `./send-newsletter.sh <article-id> --test`
3. **Verificar:** Email llega correctamente
4. **Enviar:** `./send-newsletter.sh <article-id> --message "Mensaje personalizado"`

### Monitoreo

- Revisa estadísticas en la respuesta del API
- Los emails fallidos se reportan automáticamente
- Rate limiting: 10 emails por segundo máximo
