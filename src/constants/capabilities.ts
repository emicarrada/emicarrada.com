export type CapabilityIconId =
  | 'fullstack'
  | 'web'
  | 'backend'
  | 'automation'
  | 'ai'
  | 'database';

export interface CapabilityItem {
  id: string;
  icon: CapabilityIconId;
  title: string;
  description: string;
  featured?: boolean;
  wide?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'fullstack',
    icon: 'fullstack',
    title: 'Desarrollo Full Stack',
    description:
      'Diseño y desarrollo aplicaciones web completas, integrando frontend moderno con backend sólido. React, Node.js o Laravel con PostgreSQL y despliegue en la nube.',
    featured: true,
  },
  {
    id: 'web',
    icon: 'web',
    title: 'Desarrollo Web',
    description:
      'Interfaces limpias y rápidas, con tipografía cuidada, animaciones suaves y diseño responsivo pensado para usabilidad y estética.',
  },
  {
    id: 'backend',
    icon: 'backend',
    title: 'Backend Robusto',
    description:
      'Sistemas eficientes y seguros con Node.js o Laravel. Arquitecturas limpias, control de acceso y rendimiento optimizado.',
  },
  {
    id: 'automation',
    icon: 'automation',
    title: 'Automatización',
    description:
      'Flujos repetitivos e integraciones entre plataformas con n8n. Desde contenido dinámico hasta notificaciones y manejo de datos.',
  },
  {
    id: 'ai',
    icon: 'ai',
    title: 'IA y Generación',
    description:
      'Modelos como Mistral 7B para asistentes virtuales, ideas personalizadas y herramientas generativas integradas al stack.',
  },
  {
    id: 'database',
    icon: 'database',
    title: 'Bases de Datos y Arquitectura Escalable',
    description:
      'PostgreSQL, Redis para caché y estructuras monorepo con buenas prácticas de desarrollo moderno y escalable.',
    wide: true,
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-dev',
    title: 'Desarrollo a la medida',
    description:
      'Construyo soluciones Full Stack adaptadas a tu proyecto, con diseño limpio, código eficiente y rendimiento asegurado.',
  },
  {
    id: 'ai-automation',
    title: 'Automatización inteligente con IA',
    description:
      'Integro procesos que ahorran tiempo y eliminan tareas repetitivas. Desde contenido dinámico hasta flujos entre apps, todo conectado.',
  },
  {
    id: 'audit',
    title: 'Auditoría técnica',
    description:
      'Encuentro cuellos de botella, errores ocultos y mejoras estructurales en tu arquitectura web. Ideal si ya tienes algo construido.',
  },
  {
    id: 'infrastructure',
    title: 'Infraestructura escalable',
    description:
      'PostgreSQL, Redis, despliegue en Vercel o Railway y estructuras monorepo para un desarrollo modular, limpio y profesional.',
  },
];

export const CALENDLY_URL = 'https://calendly.com/emicarrada/30min';
