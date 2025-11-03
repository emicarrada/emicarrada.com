#!/bin/bash

# Script para enviar newsletters fácilmente
# Uso: ./send-newsletter.sh <article-id> [--test] [--message "Mensaje personalizado"]

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para mostrar ayuda
show_help() {
    echo -e "${BLUE}Uso: $0 <article-id> [opciones]${NC}"
    echo ""
    echo "Opciones:"
    echo "  --test                 Modo prueba (envía solo a tu email)"
    echo "  --message \"mensaje\"    Mensaje personalizado al inicio"
    echo "  --preview \"texto\"      Texto de preview del email"
    echo "  --help                 Mostrar esta ayuda"
    echo ""
    echo "Ejemplos:"
    echo "  $0 experiencia-hackathon-openai-kavak-2025 --test"
    echo "  $0 hackathon-OpenAI-2025 --message \"¡Nuevo artículo!\""
    echo ""
    echo "Artículos disponibles:"
    echo "  - experiencia-hackathon-openai-kavak-2025"
    echo "  - hackathon-OpenAI-2025"
    echo "  - ingreso-unam"
    echo "  - vida-diaria"
    echo "  - eventos-tech"
    echo "  - herramientas-productividad"
    echo "  - Bitacora-de-un-developer"
    echo "  - vida-freelancer"
}

# Verificar argumentos
if [ $# -eq 0 ] || [ "$1" = "--help" ]; then
    show_help
    exit 0
fi

ARTICLE_ID="$1"
shift

# Parsear opciones
TEST_MODE=false
CUSTOM_MESSAGE=""
PREVIEW_TEXT=""

while [[ $# -gt 0 ]]; do
    case $1 in
        --test)
            TEST_MODE=true
            shift
            ;;
        --message)
            CUSTOM_MESSAGE="$2"
            shift 2
            ;;
        --preview)
            PREVIEW_TEXT="$2"
            shift 2
            ;;
        *)
            echo -e "${RED}Opción desconocida: $1${NC}"
            show_help
            exit 1
            ;;
    esac
done

# Construir JSON para la petición
JSON_DATA=$(cat <<EOF
{
  "articleId": "$ARTICLE_ID",
  "testMode": $TEST_MODE,
  "testEmail": "cristopher@emicarrada.com",
  "customMessage": "$CUSTOM_MESSAGE",
  "previewText": "$PREVIEW_TEXT"
}
EOF
)

# URL del endpoint (cambiar por tu dominio de Vercel)
URL="https://emicarrada.com/api/send-newsletter"

echo -e "${BLUE}🚀 Enviando newsletter...${NC}"
echo -e "${YELLOW}Artículo:${NC} $ARTICLE_ID"
echo -e "${YELLOW}Modo:${NC} $([ "$TEST_MODE" = true ] && echo "PRUEBA" || echo "PRODUCCIÓN")"
if [ -n "$CUSTOM_MESSAGE" ]; then
    echo -e "${YELLOW}Mensaje:${NC} $CUSTOM_MESSAGE"
fi
echo ""

# Hacer la petición
RESPONSE=$(curl -s -X POST "$URL" \
    -H "Content-Type: application/json" \
    -d "$JSON_DATA")

# Verificar si la petición fue exitosa
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error: No se pudo conectar al servidor${NC}"
    exit 1
fi

# Parsear respuesta
SUCCESS=$(echo "$RESPONSE" | grep -o '"success":true' | head -1)
MESSAGE=$(echo "$RESPONSE" | sed -n 's/.*"message":"\([^"]*\)".*/\1/p')

if [ -n "$SUCCESS" ]; then
    echo -e "${GREEN}✅ ¡Éxito!${NC}"
    echo -e "${GREEN}$MESSAGE${NC}"

    if [ "$TEST_MODE" = true ]; then
        echo -e "${BLUE}📧 Revisa tu email en cristopher@emicarrada.com${NC}"
    fi
else
    echo -e "${RED}❌ Error:${NC}"
    echo -e "${RED}$MESSAGE${NC}"
    echo ""
    echo -e "${YELLOW}Respuesta completa:${NC}"
    echo "$RESPONSE"
fi