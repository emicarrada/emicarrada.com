import { ProjectCaseStudy } from '@/types/caseStudy';

export const chiikoCaseStudy: ProjectCaseStudy = {
  projectId: 'chiiko',
  slug: 'como-se-hizo',
  displayName: 'Chiikö',
  title: 'Detrás del código: Chiikö',
  subtitle: 'Descripción técnica del estudio, el sitio corporativo y la idea de Artesanías Digitales.',
  summaryLine:
    'SPA React tipada, multilingüe y SEO-first en Vercel: hreflang + schema, casos que demuestran oficio real, y Chiikö (ö) en la voz humana frente a Chiiko (o) en la capa machine-readable.',
  sections: [
    {
      id: 'two-layers',
      icon: 'layers',
      title: 'Qué es este proyecto (dos capas)',
      paragraphs: [
        'Chiikö es, a la vez, un estudio de diseño web y desarrollo con sede en Ciudad de México (CDMX), orientado a producto digital, UX/UI y casos de alto criterio (Veraz, EAMX, Compufest, etc.), y el sitio corporativo que lo representa.',
        'El sitio es una SPA moderna desplegada en Vercel (chiiko.vercel.app / www.chiiko.design), construida para demostrar en código y en experiencia lo que el estudio promete en copy.',
        'No es CMS ni WordPress: es React 19 + TypeScript + Vite, con contenido multilingüe embebido en bundles y metadatos SEO calculados en runtime.',
      ],
    },
    {
      id: 'stack',
      icon: 'stack',
      title: 'Stack y arquitectura técnica',
      intro: 'Cada capa cumple una función concreta en producción:',
      stackRows: [
        { layer: 'Runtime UI', tech: 'React 19, React Router 7', role: 'Componentes, rutas, navegación cliente' },
        { layer: 'Build', tech: 'Vite (rolldown-vite 7.x), tsc -b', role: 'Dev rápido, bundle tipado' },
        { layer: 'Estilos', tech: 'Tailwind CSS 4, DaisyUI, CVA', role: 'Utilidades, variantes, consistencia visual' },
        { layer: 'Motion', tech: 'Framer Motion / motion, GSAP', role: 'Hero scroll, transiciones, microinteracciones' },
        { layer: 'i18n', tech: 'i18next + react-i18next', role: '10 idiomas (es, en, fr, de, pt, it, ja, ko, nl, zh)' },
        { layer: 'SEO head', tech: 'react-helmet-async + SEO.tsx', role: 'Canonical, hreflang, OG/Twitter, JSON-LD' },
        { layer: 'Formularios', tech: 'Formspree', role: 'Contacto sin backend propio' },
        { layer: 'Calidad', tech: 'Jest, Testing Library, ESLint 9', role: 'Tests en builders SEO, lint local' },
        { layer: 'Deploy', tech: 'Vercel CLI / GitHub → Vercel', role: 'Build npm run build, estáticos + SPA' },
        { layer: 'Descubrimiento', tech: 'generate-sitemap.mjs', role: 'sitemap.xml con blog, proyectos, 10 hreflang por URL' },
      ],
    },
    {
      id: 'app-flow',
      icon: 'flow',
      title: 'Flujo de la aplicación',
      flow: `main.tsx → App.tsx
  → useAppLoading (precarga / splash)
  → AppProviders (Helmet, i18n, router context)
  → AppRouter
      → HomePage + rutas ES (/nosotros, /proyectos, …)
      → rutas EN (/about, /projects, …)
      → blog, detalle proyecto, legales, planes, FAQ…`,
      paragraphs: [
        'Las rutas viven en routes.config.tsx: mismos componentes para ES/EN; el idioma lo resuelven i18n y helpers (usesSpanishRoutes, getCanonicalPath, buildHreflangs).',
        'Alias de imports: @/* → src/* para páginas, hooks y lib SEO.',
      ],
    },
    {
      id: 'i18n',
      icon: 'globe',
      title: 'Una base de código, muchos mercados',
      bullets: [
        'UI común + bundles por idioma (es.json, content.es.ts para blog/proyectos/planes).',
        'Rutas localizadas donde importa SEO/UX (/proyectos vs /projects); blog y FAQ comparten path con copy traducido.',
        'Hooks (useAppLanguage, useProjectTranslations, useBlogTranslations) unen datos estáticos (slugs, imágenes, fechas) con textos i18n.',
        'Reduce duplicación y evita “10 sitios pegados con cinta”.',
      ],
    },
    {
      id: 'seo',
      icon: 'seo',
      title: 'SEO y GEO como sistema',
      bullets: [
        'SEO.tsx: canonical, 10 og:locale:alternate, meta artículo en blog, content-language, geo CDMX en coordenadas.',
        'seo.ts + seo-builders.ts: Organization, LocalBusiness, WebSite, ProfessionalService, BlogPosting, CreativeWork, breadcrumbs (JSON-LD).',
        'seo-studio.ts: copy y knowsAbout por idioma (diseño web CDMX, UX, Next.js) alineado con búsqueda e IAs que leen schema.',
        'seo-meta.ts: títulos/descripciones por página e idioma; sitemap generado con casos Veraz/EAMX y pares ES/EN.',
      ],
      note:
        'Al ser SPA, el HTML inicial de index.html es genérico; Google renderiza JS. Se mitiga con metadatos estáticos en index.html y schemas tras hidratación.',
    },
    {
      id: 'no-cms',
      icon: 'content',
      title: 'Contenido rico sin CMS',
      bullets: [
        'Blog: slugs en blog.ts, galerías Masonry desde public/blog/<carpeta>/, fechas en fecha.txt, i18n con generate-blog-i18n.mjs.',
        'Proyectos: meta en projects.ts, galerías en projectGallery.ts, casos largos en bundles projects/content.*.ts.',
        'Planes, FAQ, legal: mismos patrones de bundles por idioma.',
        'Ventaja: versionado en Git, revisión en PR, cero superficie de ataque de CMS. Coste: cada entrada nueva toca datos + i18n.',
      ],
    },
    {
      id: 'demo',
      icon: 'experience',
      title: 'Experiencia demostrable',
      bullets: [
        'Hero (HeroScrollDemo + ContainerScroll): “Convertimos sitios web en Artesanías Digitales” + imagen Huichol — señal visual mexicana explícita.',
        'Secciones método, proyectos (Comet cards), servicios, CTA — motion con motion/react.',
        'Casos con Direction Aware Hover; detalle con ProjectCaseStudy + Masonry (GSAP/layout propio).',
        'El sitio es portfolio ejecutable: lo que vendes se ve al navegar.',
      ],
    },
    {
      id: 'ops',
      icon: 'deploy',
      title: 'Operación',
      bullets: [
        'Build TypeScript estricto antes de Vite.',
        'Deploy reproducible; script sitemap en npm (npm run sitemap).',
        'GTM en index.html para medición sin bloquear la arquitectura React.',
      ],
    },
    {
      id: 'naming',
      icon: 'brand',
      title: 'Chiikö vs Chiiko (marca en código)',
      intro: 'Dos grafías intencionadas — no es inconsistencia accidental:',
      brandRows: [
        {
          use: 'Marca emocional / identidad mexicana',
          form: 'Chiikö (ö)',
          where: 'Hero, blog SEO, valores, timeline, títulos OG, planes “Artesanía Digital”',
        },
        {
          use: 'Marca técnica / schema / inglés SEO',
          form: 'Chiiko (o)',
          where: 'SITE_NAME en seo.ts, JSON-LD, dominio chiiko.design',
        },
      ],
      paragraphs: [
        'buildPageTitle() evita duplicar sufijos y reconoce ambas grafías. Chiikö = voz de estudio; Chiiko = entidad estable para APIs, schema.org y URLs sin caracteres especiales.',
      ],
    },
    {
      id: 'craft',
      icon: 'craft',
      title: 'Por qué «Artesanías Digitales»',
      paragraphs: [
        'En el hero: intro “Convertimos sitios web en”, titular “Artesanías Digitales”, propuestas de intención, identidad, vender y durar. En Nosotros → Valores: no plantillas, no masa; cada sitio a medida; analogía artesanal = intención en cada decisión de diseño y desarrollo; origen mexicano y objetos que perduran traducidos a digital.',
      ],
      bullets: [
        'Componentes a medida: scroll del hero, Masonry, hover direccional, parallax About — no un theme comprado.',
        'Motion con propósito: GSAP/motion donde refuerza narrativa.',
        'Casos de estudio profundos (Veraz, EAMX, emicarrada WebGL) como prueba de oficio.',
        'i18n completo en UI y SEO; SEO/GEO artesanal con builders testeados; imagen Huichol como ancla cultural.',
        'Diferenciación en CDMX: artesanía + digital + origen mexicano coherente en hero, valores, planes y schema knowsAbout.',
      ],
    },
    {
      id: 'modules',
      icon: 'map',
      title: 'Mapa de módulos',
      codeTree: `src/
├── pages/           Home, Blog, BlogPost, Projects, ProjectDetail
├── components/      SEO, Footer, Hero, About, Contact, UI (Masonry, scroll…)
├── data/            blog.ts, projects.ts, galerías
├── i18n/            resources.ts + locales/*.json + content.*.ts
├── lib/             seo.ts, seo-studio.ts, seo-meta.ts, i18n.ts
├── hooks/           useAppLanguage, usePageSeo, useBlogTranslations…
├── routing/         AppRouter, routes.config (ES/EN)
scripts/             generate-sitemap.mjs, generate-blog-i18n.mjs
public/              assets, blog, VerazMedia, sitemap.xml`,
      paragraphs: [
        'Principio de dependencia: páginas componen; reglas SEO y rutas en lib/; contenido largo en i18n/locales/; assets en public/.',
      ],
    },
    {
      id: 'summary',
      icon: 'summary',
      title: 'Resumen técnico',
      paragraphs: [
        'Chiikö se hizo como una SPA React tipada, multilingüe y SEO-first, desplegada estáticamente en Vercel, donde cada ruta indexable lleva hreflang + schema, cada caso demuestra oficio real en frontend/motion/producto, y “Artesanías Digitales” une el hero, la imagen Huichol, los valores mexicanos y la arquitectura sin plantillas.',
      ],
    },
  ],
};
