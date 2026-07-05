import { IProjectsService, Project } from '../../types/projects';

export class ProjectsService implements IProjectsService {
  private projects: Project[] = [
    {
      id: 'chiiko',
      name: 'Chiiko',
      logo: '/chiikologo.png',
      description: 'Chiiko es un estudio creativo digital que diseña y desarrolla sitios web estratégicos, funcionales y visualmente únicos, enfocados en convertir visitas en resultados reales. Nos especializamos en crear identidades digitales sólidas para marcas y proyectos que quieren diferenciarse, combinando diseño a medida, desarrollo web profesional y una visión clara de negocio. En Chiiko no hacemos webs genéricas que parecen hechas con IA: cada proyecto es pensado, diseñado y construido desde cero para comunicar valor, generar confianza y crecer.',
      github: 'https://github.com/emicarrada/chiiko-website',
      live: 'https://www.chiiko.design',
      technologies: ['React', 'TailwindCSS', 'TypeScript', 'Web Design', 'Branding'],
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