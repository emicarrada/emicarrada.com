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
        id: 'primer-startup-fracaso',
        category: "Emprendimiento personal",
        title: "Mi primer startup: cómo convertí un fracaso en la mejor lección de mi vida",
        src: "/QuienSoy.jpg", // Placeholder temporal - cambiar por portada real
        content: null, // Will be set by the component
        publishedAt: new Date('2024-10-01'),
        author: 'Cristopher Carrada',
        tags: ['Emprendimiento', 'Startups', 'Lecciones']
      },
      {
        id: 'codigo-vs-negocio',
        category: "Desarrollo profesional",
        title: "¿Programador o empresario? Por qué aprendí que el código solo es el 20% del éxito",
        src: "/QuienSoy.jpg", // Placeholder temporal - cambiar por portada real
        content: null,
        publishedAt: new Date('2024-09-28'),
        author: 'Cristopher Carrada',
        tags: ['Desarrollo', 'Negocios', 'Carrera']
      },
      {
        id: 'remote-work-realidad',
        category: "Trabajo remoto",
        title: "3 años de trabajo remoto: la verdad que nadie te cuenta sobre la vida digital",
        src: "/QuienSoy.jpg", // Placeholder temporal - cambiar por portada real
        content: null,
        publishedAt: new Date('2024-09-25'),
        author: 'Cristopher Carrada',
        tags: ['Remote Work', 'Productividad', 'Vida Digital']
      },
      {
        id: 'herramientas-productividad',
        category: "Productividad y tools",
        title: "Mi stack de herramientas 2024: las apps y sistemas que realmente uso cada día",
        src: "/QuienSoy.jpg", // Placeholder temporal - cambiar por portada real
        content: null,
        publishedAt: new Date('2024-09-22'),
        author: 'Cristopher Carrada',
        tags: ['Productividad', 'Herramientas', 'Tech Stack']
      },
      {
        id: 'equilibrio-vida-tech',
        category: "Reflexiones personales",
        title: "Burnout en tech: cómo reconocí las señales y qué hice para recuperar el equilibrio",
        src: "/QuienSoy.jpg", // Placeholder temporal - cambiar por portada real
        content: null,
        publishedAt: new Date('2024-09-19'),
        author: 'Cristopher Carrada',
        tags: ['Burnout', 'Bienestar', 'Tech Life']
      },
      {
        id: 'aprender-publico',
        category: "Learning in public",
        title: "Por qué decidí documentar todo mi proceso de aprendizaje (y tú también deberías)",
        src: "/QuienSoy.jpg", // Placeholder temporal - cambiar por portada real
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