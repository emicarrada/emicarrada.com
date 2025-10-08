import React from 'react';
import { BlogSectionProps } from '../../../types/blog';
import { BlogHeader } from './BlogHeader';
import { BlogCarousel } from './BlogCarousel';
import { BlogSubscription } from './BlogSubscription';
import { useBlog } from '../../../hooks/useBlog';

// Import content components for now - in a full refactor these would be in separate files
import { 
  ReactArticleContent,
  AITechArticleContent,
  EntrepreneurshipArticleContent,
  TutorialArticleContent,
  ArchitectureArticleContent,
  StartupsArticleContent
} from '../../../services/content/BlogContentComponents';

export const BlogSection: React.FC<BlogSectionProps> = ({ className = '' }) => {
  const { articles: baseArticles, loading, error } = useBlog();

  // Map content components to articles
  const contentMap = {
    'ai-mago-oz': <ReactArticleContent />,
    'procesadores-pago': <AITechArticleContent />,
    'gobierno-ia-burocracia': <EntrepreneurshipArticleContent />,
    'verificacion-edad-uk': <TutorialArticleContent />,
    'astronomer-gwyneth': <ArchitectureArticleContent />,
    'tea-app-filtracion': <StartupsArticleContent />
  };

  // Add content to articles
  const articles = baseArticles.map(article => ({
    ...article,
    content: contentMap[article.id as keyof typeof contentMap] || <div>Contenido no disponible</div>
  }));

  if (loading) {
    return (
      <div className={`w-full min-h-screen flex flex-col py-8 pb-2 md:py-20 md:pb-8 ${className}`}>
        <div className="flex justify-center items-center h-64">
          <div className="text-white text-xl">Cargando artículos...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`w-full min-h-screen flex flex-col py-8 pb-2 md:py-20 md:pb-8 ${className}`}>
        <div className="flex justify-center items-center h-64">
          <div className="text-red-400 text-xl">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full min-h-screen flex flex-col py-8 pb-2 md:py-20 md:pb-8 ${className}`}>
      <BlogHeader 
        title="Mi Blog"
        subtitle="Cada semana escribo sobre las 6 noticias mas importantes en el mundo tech, suscribete a mi blog para leer semanalmente sobre lo mas relevante en la industria!"
      />
      
      <BlogCarousel articles={articles} />
      
      <BlogSubscription 
        title="Suscribete"
        subtitle="Mi blog sobre tecnología, hábitos y crecimiento. Suscríbete y recibe cada nuevo post semanal."
      />
    </div>
  );
};