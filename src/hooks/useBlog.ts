import { useState, useEffect, useCallback, useMemo } from 'react';
import { BlogService } from '../services/data/BlogService';
import { BlogArticle } from '../types/blog';

interface UseBlogReturn {
  articles: BlogArticle[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

// Cache para evitar múltiples llamadas
let cachedArticles: BlogArticle[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

export const useBlog = (): UseBlogReturn => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Función memoizada para obtener artículos
  const fetchArticles = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Verificar cache
      const now = Date.now();
      if (cachedArticles && (now - cacheTimestamp) < CACHE_DURATION) {
        setArticles(cachedArticles);
        setLoading(false);
        return;
      }

      const blogService = new BlogService();
      const fetchedArticles = await blogService.getAllArticles();
      
      // Actualizar cache
      cachedArticles = fetchedArticles;
      cacheTimestamp = now;
      
      setArticles(fetchedArticles);
    } catch (err) {
      console.error('Error fetching blog articles:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  }, []);

  // Función para forzar refetch (invalidar cache)
  const refetch = useCallback(async () => {
    cachedArticles = null;
    cacheTimestamp = 0;
    await fetchArticles();
  }, [fetchArticles]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  // Memoizar el valor de retorno para evitar re-renders
  return useMemo(() => ({
    articles,
    loading,
    error,
    refetch
  }), [articles, loading, error, refetch]);
};