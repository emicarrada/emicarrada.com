import { IProjectsService, Project } from '../../types/projects';

export class ProjectsService implements IProjectsService {
  private projects: Project[] = [
    {
      id: 'zoi-marketing',
      name: 'Zoi Marketing',
      logo: '/logozoi.png',
      description: 'Zoi Marketing es una plataforma inteligente que guía a marcas personales, negocios locales y emprendedores digitales a optimizar su estrategia de marketing mediante inteligencia artificial',
      github: 'https://github.com/emicarrada/Zoi-Marketing',
      live: 'https://www.zoi.marketing',
      technologies: ['Firebase', 'Node.js', 'Express.js', 'React', 'TailwindCSS', 'Prisma', 'TypeScript'],
      category: 'startup'
    },
    {
      id: 'club-plus',
      name: 'Club+',
      logo: '/logoclub.png',
      description: 'Club+ es una plataforma digital que permite a los usuarios acceder legal, segura y cómodamente a múltiples servicios de entretenimiento y productividad en línea a través de combos compartidos.',
      github: 'https://github.com/emicarrada/ClubPlus',
      live: 'https://www.getclubplus.com',
      technologies: ['Node.js', 'Express.js', 'React', 'TailwindCSS', 'Prisma', 'TypeScript'],
      category: 'startup'
    },
    {
      id: 'veraz',
      name: 'Veraz',
      logo: '/verazlogo.png',
      description: 'Veraz es una plataforma descentralizada de noticias creada para empoderar a las personas con información verificada, imparcial y generada por inteligencia artificial. Su propósito es combatir la desinformación, facilitar el acceso a noticias relevantes y ofrecer una experiencia personalizada sin depender de grandes corporaciones mediáticas.',
      github: 'https://github.com/emicarrada/Veraz',
      live: 'https://veraz.app',
      technologies: ['Python', 'NumPy', 'React', 'Three.js', 'Ciencia de Datos'],
      category: 'scientific'
    },
    {
      id: 'fciencias',
      name: 'fciencias',
      logo: '/logofciencias.png',
      description: 'fciencias.app es una red social académica y colaborativa creada por y para estudiantes de la Facultad de Ciencias de la UNAM. Es una plataforma que organiza la vida universitaria en un solo lugar: apuntes, comunicación entre compañeros, reseñas de profesores, eventos estudiantiles, foros por materia y más.',
      github: 'https://github.com/emicarrada/fciencias.app',
      live: 'https://fciencias.app',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Academia'],
      category: 'scientific'
    },
    {
    id: 'flux',
    name: 'Flux',
    logo: '/fluxlogo.png',
    description: 'Proyecto desarrollado para el Hackathon OpenAI x Kavak 2025. Flux es un sistema de IA auto-optimizable que reduce hasta en un 80% el uso de tokens mediante análisis inteligente de prompts y respuestas. Utilizando LangGraph y técnicas avanzadas de Machine Learning, optimiza dinámicamente las llamadas a la API de OpenAI, manteniendo la calidad de las respuestas mientras reduce significativamente los costos operacionales.',
    github: 'https://github.com/emicarrada/hackathon-openai',
    live: 'https://github.com/emicarrada/hackathon-openai',
    technologies: ['Python', 'LangGraph', 'Git', 'Matplotlib', 'ChatGPT'],
    category: 'scientific'
  }
  ];

  async getAllProjects(): Promise<Project[]> {
    // Simular delay de API
    return new Promise((resolve) => {
      setTimeout(() => resolve([...this.projects]), 100);
    });
  }

  async getProjectById(id: string): Promise<Project | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const project = this.projects.find(p => p.id === id);
        resolve(project || null);
      }, 100);
    });
  }

  async getProjectsByCategory(category: 'startup' | 'scientific'): Promise<Project[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const projectsByCategory = this.projects.filter(p => p.category === category);
        resolve([...projectsByCategory]);
      }, 100);
    });
  }
}