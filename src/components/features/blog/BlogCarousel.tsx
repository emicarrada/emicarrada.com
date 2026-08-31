import React from 'react';
import { BlogCarouselProps } from '../../../types/blog';
import { formatDate } from '../../../utils';
// @ts-ignore
import { Carousel, Card } from '../../ui/apple-cards-carousel';

export const BlogCarousel: React.FC<BlogCarouselProps> = ({ articles, className = '' }) => {
  // Convert articles to the format expected by the existing Carousel component
  const cards = articles.map((article, index) => {
    const cardData = {
      category: article.category,
      title: article.title,
      src: article.src,
      content: article.content || <div>Contenido no disponible</div>,
      publishedAt: article.publishedAt ? formatDate(article.publishedAt) : undefined,
    };
    
    return <Card key={article.id} card={cardData} index={index} />;
  });

  return (
    <div className={`flex-1 ${className}`}>
      <Carousel items={cards} />
    </div>
  );
};