import { IBlogService, BlogArticle } from '../../types/blog';

export class BlogService implements IBlogService {
  private imageCache = new Map<string, boolean>();

  // Método optimizado para precargar imágenes críticas
  private async preloadCriticalImages(articles: BlogArticle[]): Promise<void> {
    // Solo precargar la primera imagen (hero)
    const criticalArticles = articles.slice(0, 1);
    
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
        
        // Timeout rápido para evitar bloqueos
        setTimeout(() => resolve(), 800);
      });
    });

    // Reducir tiempo de espera
    await Promise.race([
      Promise.all(preloadPromises),
      new Promise(resolve => setTimeout(resolve, 800))
    ]);
  }

  async getAllArticles(): Promise<BlogArticle[]> {
    // Simular delay de red mínimo para evitar flicker
    await new Promise(resolve => setTimeout(resolve, 100));

    const articles: BlogArticle[] = [
      {
        id: 'la-ultima-entrada-del-blog',
        category: "Reflexión",
        title: "La última entrada del blog",
        src: "/blog/4ap.jpeg",
        content: null,
        publishedAt: new Date('2026-03-22'),
        author: 'Cristopher Carrada',
        tags: ['Reflexión', 'Comunidad', 'Blog', 'Gratitud']
      },
      {
        id: 'por-que-ya-no-segui-fciencias-app',
        category: "Reflexión",
        title: "¿Por qué ya no seguí con fciencias.app?",
        src: "/blog/mitercerPortada.jpeg",
        content: null,
        publishedAt: new Date('2026-03-22'),
        author: 'Cristopher Carrada',
        tags: ['fciencias.app', 'Reflexión', 'Facultad', 'Crecimiento Personal']
      },
      {
        id: 'y-si-no-quiero-ser-influencer',
        category: "Reflexión",
        title: "¿Y si no quiero ser influencer?",
        src: "/blog/conferenciaunam.jpg",
        content: null,
        publishedAt: new Date('2026-03-22'),
        author: 'Cristopher Carrada',
        tags: ['Reflexión', 'Marca Personal', 'Redes Sociales', 'Chiiko']
      },
      {
        id: 'nuevo-inicio-chiiko-design',
        category: "Emprendimiento",
        title: "El nuevo inicio de mi estudio creativo: chiikö design",
        src: "/blog/cena2026-1.jpg",
        content: null,
        publishedAt: new Date('2026-03-22'),
        author: 'Cristopher Carrada',
        tags: ['Chiiko', 'Diseño Web', 'Emprendimiento', 'Networking']
      },
      {
        id: 'inicio-2026',
        category: "Reflexión",
        title: "Inicio de 2026",
        src: "/blog/pinterestvisita.jpg",
        content: null,
        publishedAt: new Date('2026-03-22'),
        author: 'Cristopher Carrada',
        tags: ['2026', 'Reflexión', 'Emprendimiento', 'Crecimiento Personal']
      },
      {
        id: 'ia-nos-reemplazara',
        category: "Reflexión",
        title: "¿La IA nos reemplazará?",
        src: "/blog/LaAInosreem(1).jpeg",
        content: null,
        publishedAt: new Date('2025-12-22'),
        author: 'Cristopher Carrada',
        tags: ['IA', 'Inteligencia Artificial', 'Programación', 'Investigación']
      },
      {
        id: 'ventana-lado-personal',
        category: "Reflexión",
        title: "Una ventana a mi lado personal: mi última introspección del semestre",
        src: "/blog/portadaUnaVentana.jpeg",
        content: null,
        publishedAt: new Date('2025-12-22'),
        author: 'Cristopher Carrada',
        tags: ['Reflexión', 'Personal', 'Filosofía', 'Vida Universitaria']
      },
      {
        id: 'tercer-semestre-cierre',
        category: "Reflexión",
        title: "Mi tercer semestre: ¿cómo acabaron las cosas?",
        src: "/blog/mitercerPortada.jpeg",
        content: null,
        publishedAt: new Date('2025-12-22'),
        author: 'Cristopher Carrada',
        tags: ['Vida Universitaria', 'UNAM', 'Reflexión', 'Ciencias de la Computación']
      },
      {
        id: 'club-plus-ruido',
        category: "Emprendimiento",
        title: "Club+: un proyecto del cual no estoy tan orgulloso de haber hecho tanto ruido",
        src: "/blog/clubplusPortada.jpeg",
        content: null,
        publishedAt: new Date('2025-12-22'),
        author: 'Cristopher Carrada',
        tags: ['Emprendimiento', 'Club Plus', 'Ética', 'Aprendizaje']
      },
      {
        id: 'fin-de-semestre',
        category: "Reflexión",
        title: "Fin de semestre",
        src: "/blog/portadafindeSem.jpeg",
        content: null,
        publishedAt: new Date('2025-12-21'),
        author: 'Cristopher Carrada',
        tags: ['Reflexión', 'Vida Universitaria', 'Proyectos', 'UNAM']
      },
      {
        id: 'como-lidiar-con-el-fracaso',
        category: "Reflexión",
        title: "Cómo lidiar con el fracaso",
        src: "/blog/portadaFracasos.jpeg",
        content: null,
        publishedAt: new Date('2025-12-21'),
        author: 'Cristopher Carrada',
        tags: ['Reflexión', 'Fracaso', 'Aprendizaje', 'Vida Universitaria']
      },
      {
        id: 'de-zoi-a-chiiko',
        category: "Emprendimiento",
        title: "De Zoi a Chiikö",
        src: "/blog/portadaZoi.jpeg",
        content: null,
        publishedAt: new Date('2025-12-21'),
        author: 'Cristopher Carrada',
        tags: ['Emprendimiento', 'Diseño Web', 'Marca Personal', 'Proyectos']
      },
      {
        id: 'flux-presentimiento',
        category: "Proyectos",
        title: "Flux: qué es y por qué tengo un presentimiento raro",
        src: "/blog/portadaFlux.jpeg",
        content: null,
        publishedAt: new Date('2025-12-21'),
        author: 'Cristopher Carrada',
        tags: ['Proyectos', 'Flux', 'OpenAI', 'Hackathon', 'Emprendimiento']
      },
      {
        id: 'fciencias-app-recuento',
        category: "Proyectos",
        title: "fciencias.app: un recuento para reír o para llorar",
        src: "/blog/portadaFciencias.jpeg",
        content: null,
        publishedAt: new Date('2025-12-21'),
        author: 'Cristopher Carrada',
        tags: ['Proyectos', 'fciencias.app', 'Red Social', 'UNAM', 'Desarrollo']
      },
      {
        id: 'veraz-reunion-eu',
        category: "Proyectos",
        title: "Veraz: una reunión en EU que salió bastante mal, desinterés y procrastinación al máximo",
        src: "/blog/portadaveraz.jpeg",
        content: null,
        publishedAt: new Date('2025-12-22'),
        author: 'Cristopher Carrada',
        tags: ['Proyectos', 'Veraz', 'Emprendimiento', 'Fracaso']
      },
      {
        id: 'experiencia-hackathon-openai-kavak-2025',
        category: "Experiencia",
        title: "Mi experiencia en el Hackathon OpenAI x Kavak 2025: 13 horas de código intenso",
        src: "/blog/portadahack.jpeg",
        content: null,
        publishedAt: new Date('2024-10-26'),
        author: 'Cristopher Carrada',
        tags: ['Hackathon', 'OpenAI', 'Kavak', 'Experiencia', 'IA', 'Desarrollo']
      },
      {
        id: 'hackathon-OpenAI-2025',
        category: "Experiencia",
        title: "Como logré entrar al Hackathon Kavak x OpenAI México 2025",
        src: "/blog/portadahackathon.jpg",
        content: null,
        publishedAt: new Date('2024-10-05'),
        author: 'Cristopher Carrada',
        tags: ['Hackathon', 'OpenAI', 'IA', 'Kavak', 'Experiencia']
      },
      {
        id: 'ingreso-unam',
        category: "Anecdotarío",
        title: "¿Cómo entre a la mejor universidad de Latinoamérica estudiando con Youtube?",
        src: "/blog/unamportada.jpg",
        content: null, // Will be set by the component
        publishedAt: new Date('2024-10-01'),
        author: 'Cristopher Carrada',
        tags: ['UNAM', 'Computer Science', 'Lecciones']
      },
      {
        id: 'vida-diaria',
        category: "Vida diaria",
        title: "Mi rutina como estudiante de Computer Science en la UNAM",
        src: "/blog/LibroJulia.jpeg",
        content: null,
        publishedAt: new Date('2024-09-28'),
        author: 'Cristopher Carrada',
        tags: ['Universidad', 'UNAM', 'Carrera']
      },
      {
        id: 'eventos-tech',
        category: "Consejos y tips",
        title: "Como ser social en eventos tech siendo introvertido (o en cualquier situación)",
        src: "/blog/Googleentrada.jpeg",
        content: null,
        publishedAt: new Date('2024-09-25'),
        author: 'Cristopher Carrada',
        tags: ['Google', 'Tech', 'Industry Events']
      },
      {
        id: 'herramientas-productividad',
        category: "Productividad y tools",
        title: "Las apps y sistemas que realmente uso para estudiar en la UNAM",
        src: "/blog/mydesk.jpeg",
        content: null,
        publishedAt: new Date('2024-09-22'),
        author: 'Cristopher Carrada',
        tags: ['Productividad', 'Herramientas', 'Tech Stack']
      },
      {
        id: 'Bitacora-de-un-developer',
        category: "Desarrollando fciencias.app",
        title: "fciencias.app: cómo estoy desarrollando una red social",
        src: "/blog/portadaredsocial.jpeg",
        content: null,
        publishedAt: new Date('2024-09-19'),
        author: 'Cristopher Carrada',
        tags: ['Burnout', 'Bienestar', 'Tech Life']
      },
      {
        id: 'vida-freelancer',
        category: "Consejos y tips",
        title: "Como conseguir clientes como web developer freelance en CDMX",
        src: "/blog/portadapolanco.jpeg",
        content: null,
        publishedAt: new Date('2024-09-16'),
        author: 'Cristopher Carrada',
        tags: ['Aprendizaje', 'Comunidad', 'Desarrollo Personal']
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