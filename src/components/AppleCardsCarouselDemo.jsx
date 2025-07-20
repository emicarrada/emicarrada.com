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
        src="/blog/iarobot.jpg"
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
          Google une ChromeOS y Android: la mejor decisión que ha tomado este año.
        </span>{" "}
        Google confirmó oficialmente el inicio de la integración entre ChromeOS y Android, en un movimiento que busca crear un ecosistema 
        unificado entre dispositivos móviles y de escritorio. La noticia, aunque esperada, representa un giro estratégico que podría 
        cambiar por completo la percepción de sus sistemas operativos.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ChromeOS: un sistema que nunca despegó.
        </span>{" "}
        Hablemos con franqueza: ChromeOS nunca fue atractivo. Lo he visto en acción —varios compañeros en la universidad lo usaban— 
        y, sinceramente, era un sistema genérico, plano y sin personalidad.
      </p>
      
      {/* Imagen 1 */}
      <img
        src="/blog/android.jpg"
        alt="Google ChromeOS"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 2 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Una oportunidad para competir de verdad con Apple.
        </span>{" "}
        La integración con Android lo cambia todo. Google ahora tiene la oportunidad de crear un ecosistema sólido y atractivo, 
        algo que compita de verdad con el dúo iOS + macOS de Apple. Si logran hacerlo bien, no solo tendremos apps y datos 
        sincronizados nativamente entre móviles y computadoras.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Mejor rendimiento y optimización, aprovechando un núcleo común.
        </span>{" "}
        Sino también, por primera vez, un sistema operativo de Google que sea visualmente atractivo e intuitivo, 
        algo que invite a usarlo, no solo a tolerarlo.
      </p>
      
      {/* Imagen 2 */}
      <img
        src="/blog/googleapp.jpg"
        alt="Android Integration"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 3 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Por qué esta noticia me emociona.
        </span>{" "}
        Creo firmemente que la clave del éxito de un sistema operativo no es solo técnico, sino también emocional. 
        Un buen diseño y un buen marketing hacen que quieras usarlo, que te sientas cómodo y orgulloso de tenerlo.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          De hecho, esta es, para mí, la mejor decisión que Google ha tomado este año.
        </span>{" "}
        Tanto así, que prometo escribir un blog y grabar un video probando el nuevo sistema en cuanto se lance. 
        Y si me sorprende… hasta podría cambiarme de sistema operativo. El tiempo dirá si Google aprovecha esta oportunidad histórica.
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
          DAZN abre hub tecnológico en India: ¿innovación real o solo marketing?
        </span>{" "}
        DAZN, la plataforma global de streaming deportivo, anunció la apertura de su primer centro tecnológico en Hyderabad, India, 
        con planes de contratar a 3 000 profesionales para impulsar soluciones con IA y análisis avanzado de datos. 
        Sin duda, un movimiento ambicioso que llama la atención.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Pero, ¿realmente este hub marcará una diferencia para los fanáticos del deporte?
        </span>{" "}
        Sinceramente, no lo tengo tan claro. Muchos usuarios que disfrutan los deportes solo quieren una transmisión estable y de buena calidad.
      </p>
      
      {/* Imagen 1 */}
      <img
        src="/blog/boxeodazn.jpg"
        alt="DAZN Streaming Platform"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 2 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Tecnología avanzada o sobrecomplicación innecesaria?
        </span>{" "}
        No les interesa que un chatbot les sugiera estadísticas o recomendaciones basadas en IA. Quieren ver el partido sin interrupciones. 
        De hecho, recuerdo la pelea de Mike Tyson contra Jake Paul que vi por Netflix. Fue un desastre: latencia, caídas y mala experiencia.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Es la IA un valor real para el espectador promedio?
        </span>{" "}
        No me convence la idea de integrar IA para "mejorar la experiencia". En deportes, la esencia está en la acción en vivo, 
        la emoción, no en un asistente digital que te entregue estadísticas o consejos.
      </p>
      
      {/* Imagen 2 */}
      <img
        src="/blog/streaming.jpg"
        alt="Technology in Sports"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 3 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El detalle geográfico: ¿manos de obra barata?
        </span>{" "}
        La elección de India, y en particular Hyderabad, habla mucho de la estrategia de DAZN. Por un lado, Hyderabad es un polo tecnológico global 
        con talento reconocido. Por otro, es claro que la empresa quiere aprovechar una mano de obra especializada y económica.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Dónde está la verdadera oportunidad?
        </span>{" "}
        Si DAZN realmente quiere revolucionar el streaming deportivo, debería mirar hacia integrar funciones vinculadas con apuestas deportivas. 
        Ahí sí la IA puede aportar valor real. Pero por ahora, esta apuesta tecnológica me parece más un ejercicio de marketing que una mejora sustancial.
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
          Australia y la verificación de edad en internet: problemas de primer mundo, soluciones de primer mundo.
        </span>{" "}
        A partir de diciembre de 2025, Australia implementará un sistema obligatorio de verificación de edad para acceder a contenido en línea, 
        utilizando tecnologías como reconocimiento facial y verificación mediante tarjetas bancarias o documentos oficiales. 
        El objetivo es claro: proteger a los menores de edad del acceso a material inapropiado.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Para mí, este movimiento se resume en una frase: problemas de primer mundo, soluciones de primer mundo.
        </span>
      </p>
      
      {/* Imagen 1 */}
      <img
        src="/blog/niño.jpg"
        alt="Age Verification Technology"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 2 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Una decisión inteligente y necesaria.
        </span>{" "}
        Habiendo crecido rodeado de tecnología, sé perfectamente lo fácil que es que un menor de edad acceda a contenido explícito o perturbador. 
        Y aunque muchos prefieran ignorarlo, la web sigue siendo un espacio en gran parte sin regulación.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Por eso considero que lo que está haciendo Australia es no solo necesario, sino inteligente y responsable.
        </span>{" "}
        Pocos países se atreven a tomar decisiones de este tipo porque casi nadie se preocupa realmente por la salud mental 
        de los menores en el entorno digital. Mientras tanto, en países como México, el tema ni siquiera está en la agenda pública.
      </p>
      
      {/* Imagen 2 */}
      <img
        src="/blog/babyphone.jpg"
        alt="Digital Regulation"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 3 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Privacidad o seguridad infantil?
        </span>{" "}
        El debate más grande, por supuesto, es el de la privacidad. Verificación biométrica, almacenamiento de datos sensibles… 
        todo suena peligroso si se gestiona mal. Sin embargo, si un país tiene la capacidad de mantener altos estándares 
        de ciberseguridad —y Australia los tiene—, no veo problema en que estas medidas se implementen.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Este tipo de iniciativas demuestran la madurez para regular un entorno digital cada vez más caótico.
        </span>{" "}
        Por ahora, Australia ha dado un paso valiente. ¿Estamos listos para aceptar estas regulaciones 
        o seguimos viendo el internet como tierra de nadie?
      </p>
    </div>
  );
};

// ARTÍCULO 6: Microsoft
const StartupsArticleContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
      {/* Texto 1 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          EE. UU., Microsoft y los ingenieros chinos: ¿seguridad nacional o simple hipocresía?
        </span>{" "}
        Microsoft anunció que dejará de utilizar ingenieros con base en China para brindar soporte técnico a los sistemas en la nube 
        del Departamento de Defensa de EE. UU. y otros clientes gubernamentales. La decisión llega tras una investigación que, 
        aunque no encontró evidencia de filtraciones, generó fuertes críticas en Washington.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Pero, sinceramente, esta noticia me provocó algo que no esperaba: risa.
        </span>{" "}
        No una carcajada, sino esa sonrisa irónica con la que miras una incongruencia.
      </p>
      
      {/* Imagen 1 */}
      <img
        src="/blog/chinatech.jpg"
        alt="Microsoft Technology"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 2 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La ironía de todo el asunto.
        </span>{" "}
        Es curioso, casi cómico, que Estados Unidos critique públicamente a China mientras emplea ingenieros chinos en su sistema de defensa. 
        No estamos hablando de una vulnerabilidad real —los sistemas de defensa de EE. UU. están entre los más robustos del mundo—, 
        sino de una reacción casi visceral ante el hecho de que "extranjeros" participen en procesos críticos.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La verdad es que esto huele más a prejuicio político que a una preocupación genuina por la seguridad.
        </span>{" "}
        Y aquí hay que decirlo sin rodeos: Estados Unidos sigue teniendo un sentimiento peyorativo hacia otras nacionalidades, 
        sea por parte del gobierno o de su población.
      </p>
      
      {/* Imagen 2 */}
      <img
        src="/blog/militar.jpg"
        alt="Cybersecurity"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 3 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Microsoft no es inocente, pero tampoco culpable.
        </span>{" "}
        Si el riesgo era tan grande, ¿por qué contratarlos desde un inicio? Microsoft sabía perfectamente de dónde provenían sus ingenieros, 
        firmó contratos y los integró en procesos críticos. Ahora, después del escándalo mediático, deciden "corregir" 
        como si no hubieran sido cómplices desde el principio. 
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Esto no es seguridad nacional, es hipocresía.
        </span>
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          En la industria tecnológica el talento no tiene nacionalidad.
        </span>{" "}
        El hecho de que ingenieros chinos trabajaran en el sistema de defensa de EE. UU. solo demuestra que la tecnología es global, 
        aunque la política siga siendo provinciana. ¿Es realmente un problema de seguridad o solo un gesto político 
        para alimentar el discurso nacionalista?
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
    category: "Google une ChromeOS y Android en un ecosistema unificado",
    title: "Google une ChromeOS y Android: la mejor decisión que ha tomado este año",
    src: "/blog/googleoffice.jpg",
    content: <EntrepreneurshipArticleContent />, // Contenido específico para Google ChromeOS + Android
  },
  {
    category: "DAZN abre hub tecnológico en India con 3,000 profesionales",
    title: "DAZN abre hub tecnológico en India: ¿innovación real o solo marketing?",
    src: "/blog/dazn.jpg",
    content: <TutorialArticleContent />, // Contenido específico para DAZN India
  },
  {
    category: "Australia implementa verificación de edad obligatoria en internet",
    title: "Australia y la verificación de edad en internet: ¿problemas de primer mundo?",
    src: "/blog/faceage.jpg",
    content: <ArchitectureArticleContent />, // Contenido específico para Australia verificación edad
  },
  {
    category: "Microsoft deja de usar ingenieros chinos en sistemas de defensa de EE.UU.",
    title: "EE. UU., Microsoft y los ingenieros chinos: ¿seguridad nacional o hipocresía?",
    src: "/blog/microsoft.jpg",
    content: <StartupsArticleContent />, // Contenido específico para Microsoft y seguridad nacional
  },
];
