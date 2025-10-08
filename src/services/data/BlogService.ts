import { IBlogService, BlogArticle } from '../../types/blog';

export class BlogService implements IBlogService {
  private imageCache = new Map<string, boolean>();

  // Método optimizado para precargar imágenes críticas
  private async preloadCriticalImages(articles: BlogArticle[]): Promise<void> {
    // Solo precargar las primeras 3 imágenes (las que están visible inicialmente)
    const criticalArticles = articles.slice(0, 3);
    
    const preloadPromises = criticalArticles.map(article => {
      if (this.imageCache.has(article.src)) {
        return Promise.resolve();
      }
      
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          this.imageCache.set(article.src, true);
          resolve();
        };
        img.onerror = () => {
          console.warn(`Failed to preload image: ${article.src}`);
          resolve(); // No bloquear por imágenes que fallan
        };
        img.src = article.src;
      });
    });

    // No esperar más de 2 segundos por las imágenes
    await Promise.race([
      Promise.all(preloadPromises),
      new Promise(resolve => setTimeout(resolve, 2000))
    ]);
  }

  async getAllArticles(): Promise<BlogArticle[]> {
    // Simular delay de red más realista
    await new Promise(resolve => setTimeout(resolve, 300));

    const articles: BlogArticle[] = [
      {
        id: 'ai-mago-oz',
        category: "IA transforma \"El Mago de Oz\" para pantallas gigantes como la Sphere en Las Vegas",
        title: "Cómo la IA está reinventando el cine: del clásico Mago de Oz a experiencias inmersivas en pantalla gigante",
        src: "/blog/portadavegas.jpg",
        content: null, // Will be set by the component
        publishedAt: new Date('2024-10-01'),
        author: 'Cristopher Carrada',
        tags: ['IA', 'Entretenimiento', 'Tecnología']
      },
      {
        id: 'procesadores-pago',
        category: "Itch.io restringe los juegos con contenido adulto, siguiendo pasos de Mastercard y Steam",
        title: "Procesadores de pago: ¿Vigilantes silenciosos o amenazas para la libertad digital?",
        src: "/blog/portadavisa.jpg",
        content: null,
        publishedAt: new Date('2024-09-28'),
        author: 'Cristopher Carrada',
        tags: ['Fintech', 'Regulación', 'Libertad Digital']
      },
      {
        id: 'gobierno-ia-burocracia',
        category: "El gobierno de EE. UU. lanza una IA para reducir regulaciones burocráticas",
        title: "¿Fin de la burocracia o nuevo experimento con IA? El futuro de los trámites públicos",
        src: "/blog/portadaeu.jpg",
        content: null,
        publishedAt: new Date('2024-09-25'),
        author: 'Cristopher Carrada',
        tags: ['IA', 'Gobierno', 'Burocracia']
      },
      {
        id: 'verificacion-edad-uk',
        category: "Reino Unido impone reglas para verificar edad en contenidos online sensibles",
        title: "¿Protección infantil o control digital? El dilema de verificar edades en internet",
        src: "/blog/portadauk.jpg",
        content: null,
        publishedAt: new Date('2024-09-22'),
        author: 'Cristopher Carrada',
        tags: ['Regulación', 'Privacidad', 'Reino Unido']
      },
      {
        id: 'astronomer-gwyneth',
        category: "Startup Astronomer lanza campaña viral con Gwyneth Paltrow como vocera temporal",
        title: "¿Publicidad buena o solo polémica? El caso Astronomer y el show mediático como estrategia",
        src: "/blog/portadaviral.jpg",
        content: null,
        publishedAt: new Date('2024-09-19'),
        author: 'Cristopher Carrada',
        tags: ['Marketing', 'Startups', 'Estrategia']
      },
      {
        id: 'tea-app-filtracion',
        category: "Filtración de la app de citas \"Tea\" expone 72,000 fotos de usuarios",
        title: "¿Qué tan segura es tu app favorita? El caso de Tea y la urgencia de proteger los datos en startups",
        src: "/blog/portadacita.jpg",
        content: null,
        publishedAt: new Date('2024-09-16'),
        author: 'Cristopher Carrada',
        tags: ['Seguridad', 'Apps', 'Privacidad']
      }
    ];

    // Precargar imágenes críticas en paralelo
    this.preloadCriticalImages(articles);

    return articles;
  }

  async getArticleById(id: string): Promise<BlogArticle | null> {
    const articles = await this.getAllArticles();
    return articles.find(article => article.id === id) || null;
  }

  async getFeaturedArticles(): Promise<BlogArticle[]> {
    const articles = await this.getAllArticles();
    // Retornar los primeros 3 artículos como destacados
    return articles.slice(0, 3);
  }
}