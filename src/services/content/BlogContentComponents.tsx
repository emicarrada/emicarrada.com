import React from 'react';

// Template para contenido de blog personal - Emicarrada
export const PersonalBlogTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
      {children}
    </div>
  );
};

// Dummy content component - fallback
export const DummyContent = () => {
  return (
    <PersonalBlogTemplate>
      <div className="text-center py-20">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            ¡Hola! 👋 Este artículo está en desarrollo.
          </span>{" "}
          Pronto aquí encontrarás contenido sobre desarrollo, emprendimiento y reflexiones personales. 
          Mantente al tanto de las actualizaciones.
        </p>
        <img
          src="/QuienSoy.jpg"
          alt="Cristopher Carrada"
          height="300"
          width="300"
          className="mx-auto mt-8 rounded-full object-cover h-48 w-48" 
        />
      </div>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO 1: Mi primer startup y el fracaso como aprendizaje
export const PrimerStartupContent = () => {
  return (
    <PersonalBlogTemplate>
      {/* Párrafo de introducción */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Mi primera startup fue un completo fracaso.
        </span>{" "}
        Y honestamente, fue la mejor lección que pude haber recibido. Era 2021, tenía una idea "revolucionaria" 
        para una app de [TEMA], había visto todos los videos de Y Combinator en YouTube y estaba seguro de que 
        sería el próximo unicornio. Spoiler alert: no lo fue.
      </p>
      
      {/* Espacio para imagen */}
      <div className="w-full h-64 bg-gray-200 rounded-lg mb-8 mx-auto flex items-center justify-center">
        <p className="text-gray-500">📸 Imagen: [Describe aquí qué imagen quieres - ej: foto tuya trabajando en la startup]</p>
      </div>
      
      {/* Segundo párrafo */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Los errores que cometí fueron clásicos:
        </span>{" "}
        Construí durante meses sin hablar con usuarios reales, me enamoré de la tecnología en lugar del problema, 
        y asumí que "si lo construyes, ellos vendrán". La realidad me golpeó cuando después de 6 meses de desarrollo, 
        nadie quería usar lo que había creado.
      </p>

      {/* Otro espacio para imagen */}
      <div className="w-full h-64 bg-gray-200 rounded-lg mb-8 mx-auto flex items-center justify-center">
        <p className="text-gray-500">📸 Imagen: [Screenshot de la app fallida o gráfico de las métricas]</p>
      </div>

      {/* Párrafo de cierre */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Pero aquí está la cosa:
        </span>{" "}
        Ese fracaso me enseñó más sobre producto, usuarios y negocios que cualquier curso o libro. 
        Hoy, cada proyecto que inicio lleva las lecciones de ese primer fracaso. Y estoy agradecido por ello.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO 2: Código vs Negocio 
export const CodigoNegocioContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          [CONTENIDO PENDIENTE]
        </span>{" "}
        Aquí irá el contenido sobre la diferencia entre ser programador y empresario.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO 3: Remote Work
export const RemoteWorkContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          [CONTENIDO PENDIENTE]
        </span>{" "}
        Aquí irá el contenido sobre 3 años de trabajo remoto.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO 4: Herramientas de productividad
export const HerramientasContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          [CONTENIDO PENDIENTE]
        </span>{" "}
        Aquí irá el contenido sobre mi stack de herramientas 2024.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO 5: Equilibrio y burnout
export const EquilibrioContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          [CONTENIDO PENDIENTE]
        </span>{" "}
        Aquí irá el contenido sobre burnout en tech y equilibrio.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO 6: Learning in public
export const LearningPublicContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          [CONTENIDO PENDIENTE]
        </span>{" "}
        Aquí irá el contenido sobre learning in public.
      </p>
    </PersonalBlogTemplate>
  );
};

// Mantener componentes legacy para compatibilidad
export const ReactArticleContent = () => <DummyContent />;
export const AITechArticleContent = () => <DummyContent />;
export const EntrepreneurshipArticleContent = () => <DummyContent />;
export const TutorialArticleContent = () => <DummyContent />;
export const ArchitectureArticleContent = () => <DummyContent />;
export const StartupsArticleContent = () => <DummyContent />;