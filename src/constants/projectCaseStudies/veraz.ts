import { ProjectCaseStudy } from '@/types/caseStudy';

export const verazCaseStudy: ProjectCaseStudy = {
  projectId: 'veraz',
  slug: 'como-se-hizo',
  displayName: 'Veraz',
  title: 'Detrás del código: Veraz',
  subtitle:
    'Plataforma de noticias con trazabilidad a la fuente, ingesta RSS desacoplada de la IA y publicación social en Vercel + worker AWS.',
  summaryLine:
    'Modular monolith en Next.js 15: ingesta y web en Vercel/Supabase; IA opcional con failOpen; social automation (X, IG, reels) en EC2 con Playwright, ffmpeg y Telegram.',
  sections: [
    {
      id: 'why',
      icon: 'layers',
      title: 'Por qué existe Veraz',
      paragraphs: [
        'Veraz nace del problema de consumir noticias sin perder trazabilidad al medio original y sin tratar texto generado por IA como si fuera el hecho.',
        'La propuesta es «informar sin influenciar»: titular, extracto y enlace a la fuente; no republicar el artículo entero. La IA, si se activa, solo enriquece; ingesta y publicación en web no dependen de modelos.',
      ],
    },
    {
      id: 'principles',
      icon: 'craft',
      title: 'Principios que condicionan el código',
      bullets: [
        'Núcleo = plataforma de noticias (feed, artículo, fuentes).',
        'Modular monolith en un repo Next.js, dominio puro en src/domain.',
        'Publicar nunca espera a la IA (failOpen en el AI Engine).',
      ],
    },
    {
      id: 'architecture',
      icon: 'stack',
      title: 'Arquitectura (cómo se hizo)',
      intro: 'Piezas principales y rol de cada una:',
      stackRows: [
        {
          layer: 'Next.js 15',
          tech: 'App Router, React, TS, Tailwind',
          role: 'Web pública, i18n es/en, landing con globo 3D, feed /noticias, artículos con JSON-LD',
        },
        {
          layer: 'Supabase',
          tech: 'PostgreSQL',
          role: 'Article, fuentes, tabla social_publications (idempotencia y estados)',
        },
        {
          layer: 'News Ingestion',
          tech: 'src/lib/news-ingestion',
          role: 'RSS → normalizar → dedupe → persistir; jobs vía GitHub Actions (cron Vercel opcional)',
        },
        {
          layer: 'AI Engine',
          tech: 'src/lib/ai-engine',
          role: 'Opcional, default disabled; única puerta para providers',
        },
        {
          layer: 'social-publishing',
          tech: 'Feature flag + lib',
          role: 'Selección por reach score, tarjetas PNG, reels 9:16, Playwright para X/IG',
        },
        {
          layer: 'Vercel',
          tech: 'Hosting veraz.app',
          role: 'SSR/ISR, API routes de ingesta',
        },
      ],
    },
    {
      id: 'structure',
      icon: 'map',
      title: 'Estructura del repositorio',
      codeTree: `src/app          → routing y handlers delgados
src/features/*   → casos de uso por feature
src/lib/*        → ingesta, AI engine, social, utilidades
src/domain/      → dominio puro (sin infra)
docs/            → architecture.md, ADRs, runbooks social/AWS`,
      paragraphs: [
        'Reglas documentadas en docs/architecture.md y ADRs. src/app no acumula lógica de negocio pesada.',
      ],
    },
    {
      id: 'ingestion',
      icon: 'flow',
      title: 'Pipeline de ingesta',
      flow: `discover → fetch → normalize → validate → dedupe → persist → publish`,
      paragraphs: [
        'Un fallo en un feed no tumba la web. La ingesta corre fuera del camino crítico de lectura pública.',
      ],
    },
    {
      id: 'social',
      icon: 'experience',
      title: 'Publicación social',
      bullets: [
        'X / Instagram feed: PNG 1080×1080, caption + enlace Veraz, cuotas diarias.',
        'TikTok / Reels: MP4 1080×1920 (Pexels portrait + overlay Veraz, ffmpeg cover-crop, ffprobe).',
        'Telegram entrega video + caption aparte para publicación manual en la app (evita la guerra con el audio automático de TikTok Studio).',
      ],
    },
    {
      id: 'reach',
      icon: 'seo',
      title: 'Selección de artículos para social',
      bullets: [
        'social-reach-score.ts: categoría, tier de fuente, hero, gancho en titular.',
        'Mínimo SOCIAL_MIN_REACH_SCORE=3.',
        'Orden por score, no FIFO — prioriza impacto, no cola ciega.',
      ],
    },
    {
      id: 'aws-role',
      icon: 'deploy',
      title: 'Cómo usa AWS (y qué no)',
      paragraphs: [
        'Veraz no es un producto «AWS-first»: la web vive en Vercel y los datos en Supabase. AWS EC2 es un worker 24/7 porque Vercel no sirve para cron cada 1–2 h de forma fiable (límites Hobby), Chrome + Playwright con perfiles persistentes (cookies X/IG), xvfb + modo headed para Instagram, ni ffmpeg, MP4 grandes y subida a Telegram.',
      ],
      bullets: [
        'AWS hoy no incluye ECS/Lambda para social, S3 como CDN de exports, RDS propio ni CloudFront del worker.',
        'Todo es una EC2 + scripts Node del mismo repo.',
        'Opcional en runbook: EventBridge start/stop de la instancia para ahorrar si alineas la ventana con los crons.',
      ],
    },
    {
      id: 'ec2',
      icon: 'content',
      title: 'Worker en la VM (EC2)',
      bullets: [
        'Ubuntu, repo en /home/veraz/Veraz, Node 22+, Chrome, ffmpeg, xvfb.',
        'Secretos .env.local y perfiles .social/x-profile, .social/instagram-profile sincronizados desde desarrollo (social:vps:sync-secrets).',
        'Crontab con rutas absolutas (fix: $VERAZ_DIR no expandía bien en cron).',
        'Logs: .social/publish.log, .social/deliver-video.log.',
        'Desde dev: social:vps:deploy (git reset, npm ci, Playwright), social:vps:install-cron.',
      ],
    },
    {
      id: 'cloud-flow',
      icon: 'flow',
      title: 'Flujo entre Vercel, Supabase y AWS',
      flow: `Vercel + GitHub          Supabase              AWS EC2 worker
─────────────────        ──────────            ────────────────
veraz.app (web)    ──►   PostgreSQL     ◄──     cron
Ingesta → DB       ──►   Article,         ◄──     Playwright (X/IG)
                         social_publications ◄──   ffmpeg + Telegram`,
    },
    {
      id: 'design',
      icon: 'brand',
      title: 'Diseño y referencias',
      paragraphs: [
        'Diseño web: Chiikö (crédito en footer del producto).',
        'Documentación interna de referencia: docs/social-aws-runbook.md, docs/social-publishing.md, docs/vision.md, docs/architecture.md.',
      ],
    },
    {
      id: 'summary',
      icon: 'summary',
      title: 'Resumen técnico',
      paragraphs: [
        'Veraz combina un modular monolith Next.js en Vercel con Postgres en Supabase, ingesta RSS desacoplada de modelos de IA, y un worker EC2 para automatización social que requiere browser real, video y cron fiable — manteniendo la promesa de informar con trazabilidad y sin depender de la IA para publicar.',
      ],
    },
  ],
};
