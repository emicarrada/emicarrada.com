import React from 'react';
import { BlogSectionProps } from '../../../types/blog';
import { BlogHeader } from './BlogHeader';
import { BlogCarousel } from './BlogCarousel';
import { BlogSubscription } from './BlogSubscription';
import { useBlog } from '../../../hooks/useBlog';

// Import content components for personal blog
import { 
  FinDeSemestreContent,
  ComoLidiarConElFracasoContent,
  DeZoiAChiikoContent,
  FluxPresentimientoContent,
  FcienciasAppRecuentoContent,
  VerazReunionEUContent,
  ClubPlusRuidoContent,
  IANosReemplazaraContent,
  VentanaLadoPersonalContent,
  TercerSemestreCierreContent,
  IngresoUnamContent,
  VidaDiariaContent,
  EventosTechContent,
  HerramientasProductividadContent,
  BitacoraDevContent,
  VidaFreelancerContent,
  AprendiendoTypeScriptContent,
  HackathonOpenAIContent,
  ExperienciaHackathonOpenAIKavak2025Content,
  InicioDe2026Content,
  NuevoInicioChiikoDesignContent,
  YSiNoQuieroSerInfluencerContent,
  PorQueYaNoSeguiFcienciasAppContent,
  LaUltimaEntradaDelBlogContent
} from '../../../services/content/BlogContentComponents';

export const BlogSection: React.FC<BlogSectionProps> = ({ className = '' }) => {
  const { articles: baseArticles, loading, error } = useBlog();

  // Map content components to articles
  const contentMap = {
    'ia-nos-reemplazara': <IANosReemplazaraContent />,
    'ventana-lado-personal': <VentanaLadoPersonalContent />,
    'tercer-semestre-cierre': <TercerSemestreCierreContent />,
    'club-plus-ruido': <ClubPlusRuidoContent />,
    'fin-de-semestre': <FinDeSemestreContent />,
    'como-lidiar-con-el-fracaso': <ComoLidiarConElFracasoContent />,
    'de-zoi-a-chiiko': <DeZoiAChiikoContent />,
    'flux-presentimiento': <FluxPresentimientoContent />,
    'fciencias-app-recuento': <FcienciasAppRecuentoContent />,
    'veraz-reunion-eu': <VerazReunionEUContent />,
    'inicio-2026': <InicioDe2026Content />,
    'nuevo-inicio-chiiko-design': <NuevoInicioChiikoDesignContent />,
    'y-si-no-quiero-ser-influencer': <YSiNoQuieroSerInfluencerContent />,
    'por-que-ya-no-segui-fciencias-app': <PorQueYaNoSeguiFcienciasAppContent />,
    'la-ultima-entrada-del-blog': <LaUltimaEntradaDelBlogContent />,
    'experiencia-hackathon-openai-kavak-2025': <ExperienciaHackathonOpenAIKavak2025Content />,
    'hackathon-OpenAI-2025': <HackathonOpenAIContent />,
    'ingreso-unam': <IngresoUnamContent />,
    'vida-diaria': <VidaDiariaContent />,
    'eventos-tech': <EventosTechContent />,
    'herramientas-productividad': <HerramientasProductividadContent />,
    'Bitacora-de-un-developer': <BitacoraDevContent />,
    'vida-freelancer': <VidaFreelancerContent />,
    'aprendiendo-typescript': <AprendiendoTypeScriptContent />
  };

  // Add content to articles
  const articles = baseArticles.map(article => ({
    ...article,
    content: contentMap[article.id as keyof typeof contentMap] || <div>Contenido no disponible</div>
  }));

  if (loading) {
    return (
      <div className={`w-full min-h-screen flex flex-col py-8 pb-4 md:py-20 md:pb-8 ${className}`}>
        <div className="flex justify-center items-center h-64">
          <div className="text-white text-xl">Cargando artículos...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`w-full min-h-screen flex flex-col py-8 pb-4 md:py-20 md:pb-8 ${className}`}>
        <div className="flex justify-center items-center h-64">
          <div className="text-red-400 text-xl">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full min-h-screen flex flex-col py-8 pb-4 md:py-20 md:pb-8 ${className}`}>
      <BlogHeader 
        title="Mi Blog"
        subtitle="Un espacio donde comparto cosas que me pasan, que pienso y anecdotas de mi vida, suscribete y recibe un nuevo blog cada domingo"
      />
      
      <BlogCarousel articles={articles} />
      
      <BlogSubscription 
        title="Suscríbete a mi blog"
        subtitle="Recibe mis reflexiones sobre desarrollo, emprendimiento y experiencias en tech. Sin spam, solo contenido real y personal."
      />
    </div>
  );
};