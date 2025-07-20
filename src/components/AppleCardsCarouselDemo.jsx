"use client";

import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import TerminalSubscribeForm from "./TerminalSubscribeForm";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full min-h-screen flex flex-col py-8 pb-2 md:py-20 md:pb-8">
      <div className="max-w-7xl pl-4 mx-auto mb-6 md:mb-8 text-center">
        <h2 className="text-4xl md:text-7xl font-null mb-4" style={{ color: '#FF8200' }}>
          Mi Blog
        </h2>
        <p className="text-lg md:text-xl font-bevietnam text-white max-w-4xl mx-auto">
          Cada semana escribo sobre las 6 noticias mas importantes en el mundo tech, suscribete a mi blog para leer semanalmente sobre lo mas relevante en la industria!
        </p>
      </div>
      <div className="flex-1">
        <Carousel items={cards} />
      </div>
      
      {/* Sección de Suscripción */}
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <h3 className="text-4xl md:text-7xl font-null mb-6" style={{ color: '#FF8200' }}>
          Suscribete
        </h3>
        <p className="text-lg md:text-xl font-bevietnam text-white max-w-2xl mx-auto mb-4">
          Mi blog sobre tecnología, hábitos y crecimiento. Suscríbete y recibe cada nuevo post semanal.
        </p>
        {/* Formulario de Suscripción Terminal */}
        <TerminalSubscribeForm />
      </div>
    </div>
  );
}

const DummyContent = () => {
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

// ===== CONTENIDO ESPECÍFICO PARA CADA TARJETA DEL BLOG =====
// Puedes modificar el texto, imágenes y contenido de cada artículo aquí

// ARTÍCULO 1: Desarrollo Web - React
const ReactArticleContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
      {/* Texto 1 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Cuando vi el famoso video del CEO de Astronomer en un concierto de Coldplay, confieso que solté una carcajada.
        </span>{" "}
        Como espectador, fue un momento gracioso, típico video viral en el que alguien es "cachado" en una situación incómoda. 
        Pero, a diferencia de la mayoría, decidí ir más allá del chisme: investigué la empresa y me sorprendí.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Astronomer es una compañía B2B, técnica y discreta.
        </span>{" "}
        Desarrolla Astro, una plataforma de DataOps impulsada por Apache Airflow, y tiene clientes del calibre de Apple, Ford, Uber y Adobe. 
        No es una marca que invierta en marketing masivo porque no lo necesita; su negocio está en la infraestructura de datos para grandes corporaciones.
      </p>
      
      {/* Imagen 1 */}
      <img
        src="/blog/infielceo.png"
        alt="Astronomer Company"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 2 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El verdadero problema: la reputación y el efecto de las redes.
        </span>{" "}
        El video se volvió viral no por lo que pasó, sino por cómo reaccionaron los involucrados: al intentar esconderse, 
        hicieron evidente lo que todos sospechaban. Y así, de un momento anecdótico, pasamos a un circo mediático.
        <br /><br />
        Lo que más me hace ruido es la hipocresía colectiva. Existen CEOs acusados de corrupción, abuso sexual o violencia, 
        y no reciben ni una fracción de la atención que este hombre está recibiendo por una infidelidad. 
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          No justifico lo que hizo —ser infiel está mal—, pero ¿es realmente un motivo para arruinar su carrera?
        </span>
      </p>
      
      {/* Imagen 2 */}
      <img
        src="/blog/astronomerlogo.png"
        alt="Social Media Impact"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 3 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Por qué debería importarnos?
        </span>{" "}
        Este caso nos muestra un problema preocupante: estamos entrando en una era donde la vida personal define tu vida profesional. 
        Si eres CEO, o aspiras a serlo, ya no basta con ser técnicamente excelente; ahora también debes ser moralmente perfecto para los ojos del público.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Las redes sociales han convertido todo en un espectáculo.
        </span>{" "}
        Nos creemos jueces de la vida ajena, juzgamos sin mirar nuestras propias contradicciones y exigimos perfección de personas que ni conocemos. 
        Te invito a que te preguntes: ¿Estamos juzgando con coherencia o solo consumiendo el circo mediático?
      </p>
    </div>
  );
};

// ARTÍCULO 2: IA & Tecnología
const AITechArticleContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
      {/* Texto 1 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Queremos que la IA actúe por nosotros o solo nos ayude a pensar mejor?
        </span>{" "}
        En los últimos días, dos anuncios marcaron un antes y un después en la computación personal: OpenAI presentó el modo "Agent" de ChatGPT, 
        que permite a la IA ejecutar acciones de manera autónoma, y Microsoft lanzó Copilot Vision, una herramienta multimodal integrada en Windows 11.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Ambos movimientos plantean la misma pregunta:
        </span>{" "}
        ¿queremos que la IA actúe por nosotros o que simplemente nos ayude a procesar mejor la información? Personalmente, creo que nunca 
        llegaremos a un punto en el que la IA actúe completamente por nosotros.
      </p>
      
      {/* Imagen 1 */}
      <img
        src="/blog/openai.jpg"
        alt="OpenAI Technology"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 2 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La metáfora del coche: tú sigues siendo el conductor.
        </span>{" "}
        Por más avanzada que sea, cada acción humana está cargada de creencias, valores y, en muchos casos, principios personales o religiosos. 
        La IA puede aprender patrones de comportamiento, pero no puede reemplazar nuestra capacidad de tomar decisiones basadas en lo que somos como individuos.
        <br /><br />
        Me gusta verlo como un coche: <span className="font-bold text-neutral-700 dark:text-neutral-200">Tú eres el conductor. La IA es el copiloto.</span> 
        Puede sugerirte rutas, advertirte de un atasco o recomendarte la mejor salida, pero la decisión final siempre debe ser tuya. 
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Convertirla en un "conductor automático" es peligroso
        </span>, y no lo digo solo en sentido figurado.
      </p>
      
      {/* Imagen 2 */}
      <img
        src="/blog/chatgpt.jpg"
        alt="ChatGPT and AI"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 3 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La IA, por ahora, es una herramienta para lo rutinario.
        </span>{" "}
        Hoy en día, usar un LLM o una LIA para escribir un ensayo, generar ideas de contenido o hacer un Excel es lógico. 
        Son tareas repetitivas que no requieren gran carga intelectual y donde la IA realmente potencia nuestra productividad.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Revolución real o marketing apresurado?
        </span>{" "}
        Mucho de lo que vemos hoy en la industria tecnológica es, en parte, moda y marketing. OpenAI abrió la puerta a una carrera acelerada 
        entre Big Tech, pero siento que esta revolución está siendo apresurada. 
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          O regulamos ahora con seriedad, o esta revolución se nos saldrá de las manos.
        </span>
      </p>
    </div>
  );
};

// ARTÍCULO 3: Emprendimiento
const EntrepreneurshipArticleContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
      {/* Texto 1 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Convertir una idea en un negocio escalable requiere estrategia.
        </span>{" "}
        Exploramos metodologías lean startup, validación de producto, captación de inversión, 
        y cómo construir equipos de alto rendimiento.
      </p>
      
      {/* Imagen 1 */}
      <img
        src="/blog/infielceo.png"
        alt="Startup Growth"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 2 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Aprende de casos reales de startups que han logrado escalar exitosamente en el mercado tecnológico, 
        desde la fase de ideación hasta la captación de serie A y más allá.
      </p>
      
      {/* Imagen 2 */}
      <img
        src="/logoclub.png"
        alt="Business Scaling"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 3 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Descubre las métricas clave que debes monitorear, cómo construir un MVP efectivo, 
        y estrategias probadas para conseguir product-market fit en tiempo récord.
      </p>
    </div>
  );
};

// ARTÍCULO 4: Tutorial
const TutorialArticleContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
      {/* Texto 1 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Un entorno de desarrollo optimizado aumenta tu productividad.
        </span>{" "}
        Te guío paso a paso para configurar VS Code, terminal, Git, Docker, 
        y las extensiones esenciales para el desarrollo moderno.
      </p>
      
      {/* Imagen 1 */}
      <img
        src="/blog/microsoft.jpg"
        alt="Development Environment"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 2 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Incluye configuraciones para diferentes lenguajes de programación y workflows 
        que utilizan los desarrolladores profesionales en grandes empresas tecnológicas.
      </p>
      
      {/* Imagen 2 */}
      <img
        src="/blog/googleoffice.jpg"
        alt="Coding Setup"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 3 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Automatiza tareas repetitivas, configura shortcuts efectivos, y crea un flujo de trabajo 
        que te permita enfocarte en lo que realmente importa: escribir código de calidad.
      </p>
    </div>
  );
};

// ARTÍCULO 5: Arquitectura
const ArchitectureArticleContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
      {/* Texto 1 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La elección entre microservicios y monolitos define tu arquitectura.
        </span>{" "}
        Analizamos las ventajas y desventajas de cada patrón, cuándo implementar cada uno, 
        costos de mantenimiento, escalabilidad, y factores técnicos que debes considerar.
      </p>
      
      {/* Imagen 1 */}
      <img
        src="/blog/Google.jpg"
        alt="Software Architecture"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 2 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Incluye ejemplos reales de migración desde monolitos hacia microservicios, 
        y casos donde mantener un monolito bien estructurado es la mejor opción.
      </p>
      
      {/* Imagen 2 */}
      <img
        src="/blog/dazn.jpg"
        alt="System Design"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 3 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Aprende a diseñar sistemas distribuidos resilientes, implementar patrones como Circuit Breaker, 
        y manejar la complejidad operacional que viene con arquitecturas modernas.
      </p>
    </div>
  );
};

// ARTÍCULO 6: Startups
const StartupsArticleContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
      {/* Texto 1 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Construir Club+ y Zoi me enseñó lecciones valiosas sobre startups.
        </span>{" "}
        Comparto errores cometidos, decisiones acertadas, gestión de equipos remotos, 
        product-market fit, y estrategias de crecimiento.
      </p>
      
      {/* Imagen 1 */}
      <img
        src="/logoclub.png"
        alt="Club+ Startup"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 2 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Experiencias reales de fundraising, pivoteo de producto, y construcción de cultura empresarial 
        en equipos distribuidos. Lecciones sobre timing de mercado y validación temprana.
      </p>
      
      {/* Imagen 2 */}
      <img
        src="/logozoi.png"
        alt="Zoi Startup"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 3 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Desde la concepción de la idea hasta la escala, te comparto los frameworks mentales 
        y herramientas prácticas que utilizamos para tomar decisiones críticas bajo incertidumbre.
      </p>
    </div>
  );
};

const data = [
  {
    category: "CEO de Astronomer renuncia tras beso viral en concierto de Coldplay",
    title: "El caso Astronomer: ¿Vida personal vs carrera profesional?",
    src: "/blog/coldplay.jpg",
    content: <ReactArticleContent />, // Contenido específico para el análisis de Astronomer
  },
  {
    category: "OpenAI presenta ChatGPT Agent; llega Copilot Vision a Windows",
    title: "¿Queremos que la IA actúe por nosotros o solo nos ayude a pensar mejor?",
    src: "/blog/chatgpt.jpg",
    content: <AITechArticleContent />, // Contenido específico para IA
  },
  {
    category: "Emprendimiento",
    title: "De la idea al negocio escalable",
    src: "/QuienSoy.jpg",
    content: <EntrepreneurshipArticleContent />, // Contenido específico para Emprendimiento
  },
  {
    category: "Tutorial",
    title: "Configurando tu entorno de desarrollo perfecto",
    src: "/QuienSoy.jpg",
    content: <TutorialArticleContent />, // Contenido específico para Tutorial
  },
  {
    category: "Arquitectura",
    title: "Microservicios vs Monolitos: ¿Cuándo usar cada uno?",
    src: "/QuienSoy.jpg",
    content: <ArchitectureArticleContent />, // Contenido específico para Arquitectura
  },
  {
    category: "Startups",
    title: "Lecciones aprendidas construyendo Club+ y Zoi",
    src: "/QuienSoy.jpg",
    content: <StartupsArticleContent />, // Contenido específico para Startups
  },
];
