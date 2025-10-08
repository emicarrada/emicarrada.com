// Dummy content component - fallback
export const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Desarrollo web moderno con las mejores prácticas.
              </span>{" "}
              Comparto mi experiencia construyendo aplicaciones escalables y startups exitosas. 
              Desde código hasta estrategia de negocio, exploramos todos los aspectos del desarrollo tech moderno.
            </p>
            <img
              src="/QuienSoy.jpg"
              alt="Emicarrada"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-lg" />
          </div>
        );
      })}
    </>
  );
};

// ARTÍCULO 1: IA y Entretenimiento - Mago de Oz
export const ReactArticleContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
      {/* Texto 1 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La Inteligencia Artificial está revolucionando también el mundo del entretenimiento.
        </span>{" "}
        Recientemente, se usó IA para reimaginar El Mago de Oz —una película de 1939— y adaptarla al espectacular formato inmersivo 
        de la pantalla esférica Sphere en Las Vegas. No se trata simplemente de poner la película en una pantalla más grande, 
        sino de rehacer escenas, colores y movimientos para que el público experimente algo completamente nuevo.
      </p>
      
      {/* Imagen 1 */}
      <img
        src="/blog/magooz.jpg"
        alt="El Mago de Oz reimaginado con IA"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 2 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Un salto tecnológico y artístico.
        </span>{" "}
        Para lograr esto, los ingenieros tuvieron que trabajar con archivos, fotos y recursos originales de la época, 
        aplicando modelos generativos avanzados para transformar la narrativa visual. Es un avance que me emociona porque abre un mundo nuevo: 
        la IA no solo sirve para productividad o análisis, sino también para crear experiencias audiovisuales inmersivas que podrían cambiar cómo consumimos cine.
      </p>
    </div>
  );
};

// Placeholder components for other articles
export const AITechArticleContent = () => <DummyContent />;
export const EntrepreneurshipArticleContent = () => <DummyContent />;
export const TutorialArticleContent = () => <DummyContent />;
export const ArchitectureArticleContent = () => <DummyContent />;
export const StartupsArticleContent = () => <DummyContent />;