import { lazy, Suspense } from 'react';

// Lazy load del BlogSection para code splitting
const BlogSection = lazy(() => import('./features/blog/BlogSection.tsx').then(module => ({
  default: module.BlogSection
})));

const BlogLoadingFallback = () => (
  <div className="w-full min-h-screen flex flex-col py-8 pb-2 md:py-20 md:pb-8">
    <div className="flex justify-center items-center h-64">
      <div className="text-white text-xl">Cargando Blog...</div>
    </div>
  </div>
);

/**
 * Componente optimizado del carrusel de blog con lazy loading
 * Reduce el bundle inicial y mejora el rendimiento
 */
export function AppleCardsCarouselDemo() {
  return (
    <Suspense fallback={<BlogLoadingFallback />}>
      <BlogSection />
    </Suspense>
  );
}