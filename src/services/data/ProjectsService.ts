import { IProjectsService, Project } from '../../types/projects';

export class ProjectsService implements IProjectsService {
  private projects: Project[] = [
    {
      id: 'chiiko',
      name: 'Chiikö',
      logo: '/chiikologo.png',
      paragraphs: [
        'Estudio creativo digital que diseña y desarrolla sitios web a medida.',
        'Combina estrategia, diseño y código para crear identidades sólidas.',
        'Cada proyecto busca comunicar valor, generar confianza y convertir visitas en resultados reales.',
      ],
      github: 'https://github.com/emicarrada/chiiko-website',
      live: 'https://www.chiiko.design',
      technologies: ['React', 'TailwindCSS', 'TypeScript', 'Web Design', 'Branding'],
      category: 'startup'
    },
    {
      id: 'veraz',
      name: 'Veraz',
      logo: '/verazlogo.png',
      paragraphs: [
        'Plataforma de noticias descentralizada con información verificada e imparcial.',
        'Usa inteligencia artificial para combatir la desinformación.',
        'Ofrece una experiencia personalizada sin depender de grandes medios.',
      ],
      github: 'https://github.com/emicarrada/Veraz',
      live: 'https://veraz.app',
      technologies: ['Python', 'NumPy', 'React', 'Three.js', 'Ciencia de Datos'],
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