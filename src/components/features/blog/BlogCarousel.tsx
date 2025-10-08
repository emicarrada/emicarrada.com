import React, { useState, useRef, useEffect } from 'react';
import { BlogCarouselProps } from '../../../types/blog';
// @ts-ignore
import { Carousel, Card } from '../../ui/apple-cards-carousel';

// Componente optimizado de imagen con lazy loading
const LazyImage: React.FC<{ src: string; alt: string; className?: string }> = ({ 
  src, 
  alt, 
  className = '' 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`${className} relative overflow-hidden bg-gray-100`}>
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-xs text-gray-400">Cargando...</div>
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
};

export const BlogCarousel: React.FC<BlogCarouselProps> = ({ articles, className = '' }) => {
  // Convert articles to the format expected by the existing Carousel component
  const cards = articles.map((article, index) => {
    const cardData = {
      category: article.category,
      title: article.title,
      src: article.src,
      content: article.content || <div>Contenido no disponible</div>,
      // Pasamos el componente LazyImage optimizado
      LazyImage: LazyImage
    };
    
    return <Card key={article.id} card={cardData} index={index} />;
  });

  return (
    <div className={`flex-1 ${className}`}>
      <Carousel items={cards} />
    </div>
  );
};