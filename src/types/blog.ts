import React from 'react';

export interface BlogArticle {
  id: string;
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
  publishedAt?: Date;
  author?: string;
  tags?: string[];
}

export interface BlogHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export interface BlogCarouselProps {
  articles: BlogArticle[];
  className?: string;
}

export interface BlogSubscriptionProps {
  title: string;
  subtitle: string;
  className?: string;
}

export interface IBlogService {
  getAllArticles(): Promise<BlogArticle[]>;
  getArticleById(id: string): Promise<BlogArticle | null>;
  getFeaturedArticles(): Promise<BlogArticle[]>;
}

export interface BlogSectionProps {
  className?: string;
}