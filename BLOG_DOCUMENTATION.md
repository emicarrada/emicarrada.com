# 📝 Documentación del Blog Personal - Emicarrada

## 🏗️ Estructura del Blog

### 📂 Archivos principales:
- **BlogService.ts**: Contiene los datos de los artículos del blog (`src/services/data/BlogService.ts`)
- **BlogContentComponents.tsx**: Contiene el contenido completo de cada artículo (`src/services/content/BlogContentComponents.tsx`)
- **Blog.jsx**: Página principal del blog (`src/components/Blog.jsx`)

## 📝 Cómo agregar un nuevo artículo:

### 1. **Agregar datos básicos** (en `BlogService.ts`):
```typescript
{
  id: 'mi-nuevo-articulo',
  category: "Categoría breve que aparece arriba del título",
  title: "Título principal que aparece en la tarjeta",
  src: "/blog/portada-mi-articulo.jpg", // Imagen de portada
  content: null, // Se mapea automáticamente
  publishedAt: new Date('2024-10-XX'),
  author: 'Cristopher Carrada',
  tags: ['Tag1', 'Tag2', 'Tag3']
}
```

### 2. **Crear contenido** (en `BlogContentComponents.tsx`):
```tsx
export const MiNuevoArticuloContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Frase destacada en negrita.
        </span>{" "}
        Resto del párrafo con el contenido principal.
      </p>
      
      {/* Imagen dentro del contenido */}
      <img
        src="/blog/imagen-contenido.jpg"
        alt="Descripción de la imagen"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Más contenido del artículo...
      </p>
    </PersonalBlogTemplate>
  );
};
```

### 3. **Mapear el contenido** (en `BlogSection.tsx`):
```typescript
const contentMap = {
  'mi-nuevo-articulo': <MiNuevoArticuloContent />,
  // otros artículos...
};
```

## 🖼️ Sistema de imágenes:

### **Imagen de portada** (`src` en BlogService):
- **Ubicación**: `/public/blog/portada-[nombre].jpg`
- **Aparece en**: Fondo de la tarjeta del carrusel
- **Tamaño recomendado**: 400x600px (ratio 2:3)
- **Actualmente usando**: `/QuienSoy.jpg` como placeholder

### **Imágenes del contenido**:
- **Ubicación**: `/public/blog/[nombre-descriptivo].jpg`
- **Aparece en**: Dentro del artículo completo
- **Tamaño**: Ancho completo, altura variable
- **Clase CSS**: `w-full h-64 object-cover rounded-lg mb-8 mx-auto`

## 📋 Artículos actuales configurados:

1. **primer-startup-fracaso**: "Mi primer startup: cómo convertí un fracaso en la mejor lección de mi vida"
2. **codigo-vs-negocio**: "¿Programador o empresario? Por qué aprendí que el código solo es el 20% del éxito"
3. **remote-work-realidad**: "3 años de trabajo remoto: la verdad que nadie te cuenta sobre la vida digital"
4. **herramientas-productividad**: "Mi stack de herramientas 2024: las apps y sistemas que realmente uso cada día"
5. **equilibrio-vida-tech**: "Burnout en tech: cómo reconocí las señales y qué hice para recuperar el equilibrio"
6. **aprender-publico**: "Por qué decidí documentar todo mi proceso de aprendizaje (y tú también deberías)"

## 📁 Estructura de archivos recomendada:

```
/public/blog/
├── portada-primer-startup.jpg      # Portada artículo 1
├── portada-codigo-negocio.jpg      # Portada artículo 2
├── portada-remote-work.jpg         # Portada artículo 3
├── portada-herramientas.jpg        # Portada artículo 4
├── portada-equilibrio.jpg          # Portada artículo 5
├── portada-learning-public.jpg     # Portada artículo 6
├── startup-oficina.jpg             # Imagen contenido
├── codigo-pantalla.jpg             # Imagen contenido
└── remote-workspace.jpg           # Imagen contenido
```

## 🎨 Placeholders para imágenes:

Cuando subas las imágenes reales, simplemente:
1. Coloca las imágenes en `/public/blog/`
2. Actualiza las rutas en `BlogService.ts`
3. Asegúrate de que los nombres coincidan exactamente

## ✅ Estado actual:
- ✅ Blog convertido a personal
- ✅ 6 artículos configurados con placeholders
- ✅ Espaciado del footer corregido
- ✅ Títulos y subtítulos actualizados
- 📝 Pendiente: Imágenes reales y contenido completo