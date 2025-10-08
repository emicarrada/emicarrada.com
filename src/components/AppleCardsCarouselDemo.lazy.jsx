import { lazy, Suspense } from 'react';

// Lazy load del BlogSection para code splitting
const BlogSection = lazy(() => import('./features/blog/BlogSection').then(module => ({
  default: module.BlogSection
})));

const BlogLoadingFallback = () => (
  <div className="w-full min-h-screen flex flex-col py-8 pb-2 md:py-20 md:pb-8">
    <div className="flex justify-center items-center h-64">
      <div className="animate-pulse">
        <div className="text-4xl md:text-7xl font-null mb-4 text-[#FF8200]">
          Cargando Blog...
        </div>
        <div className="w-16 h-1 bg-[#FF8200] mx-auto rounded animate-pulse"></div>
      </div>
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