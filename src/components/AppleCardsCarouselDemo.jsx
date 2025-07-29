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
      <div className="max-w-7xl mx-auto px-4 py-6 pb-0 text-center">
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

// ARTÍCULO 1: IA y Entretenimiento - Mago de Oz
const ReactArticleContent = () => {
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
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Un futuro para el cine inmersivo?
        </span>{" "}
        Imagínense una película de Misión Imposible diseñada desde cero para una pantalla como la Sphere, con escenas que nos rodean y nos sumergen en la acción. 
        Estoy convencido de que no tardarán en surgir empresas especializadas en esto, y que las salas de cine tradicionales también tendrán que adaptarse a esta nueva forma de contar historias.
      </p>
      
      {/* Imagen 2 */}
      <img
        src="/blog/esferavegas.jpg"
        alt="Sphere Las Vegas - Cine inmersivo"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 3 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Una revolución o un lujo?
        </span>{" "}
        Sin embargo, queda la duda: ¿será esta una transformación que cambie la industria del cine para todos, o solo un lujo para algunos pocos con acceso a tecnología de punta? 
        Lo cierto es que este tipo de innovación promete mucho, pero todavía está por verse si será accesible y masiva.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Tú qué opinas?
        </span>{" "}
        ¿Crees que la IA generativa será el motor que lleve al cine a un nuevo nivel, o simplemente una novedad pasajera para el entretenimiento de nicho? 
        Esta convergencia entre inteligencia artificial y entretenimiento inmersivo definitivamente marca un antes y un después en cómo experimentamos las historias.
      </p>
    </div>
  );
};

// ARTÍCULO 2: Procesadores de Pago y Libertad Digital
const AITechArticleContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
      {/* Texto 1 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La noticia habla sobre la decisión de Itch.io de limitar los juegos con contenido sexualmente explícito, pero sinceramente, ese no es el enfoque que me interesa abordar.
        </span>{" "}
        No porque no sea importante, sino porque creo que hay una pregunta más grande de fondo: ¿por qué los procesadores de pago tienen tanto poder sobre lo que ocurre en una plataforma?
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Esto no fue una decisión ética o curatorial. Fue una imposición.
        </span>{" "}
        Una presión inmediata por parte de entidades como Mastercard, que obligaron a Itch.io a actuar rápido. Y como alguien que está construyendo dos startups digitales —Zoi Marketing y Club Plus— sé perfectamente lo que significa depender de esos intermediarios financieros.
      </p>
      
      {/* Imagen 1 */}
      <img
        src="/blog/gamervisa.jpg"
        alt="Itch.io y procesadores de pago"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 2 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          En el momento en que te bloquean o retiran el servicio, tu negocio deja de existir. Así de simple. Así de brutal.
        </span>{" "}
        El problema no es solo la censura de cierto tipo de contenido. El problema es que estamos frente a un monopolio disfrazado de "estándar". 
        A diferencia de los sistemas operativos donde al menos existe Linux como alternativa open source, en el mundo de los pagos online no hay una vía libre y abierta.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Y eso es algo que la comunidad de software libre debería cuestionar.
        </span>{" "}
        Porque ahí hay una oportunidad real: crear un procesador de pagos open source, transparente, libre de presiones corporativas y políticas. 
        Claro, ya existen las criptomonedas, pero todos sabemos que su adopción masiva aún no es realista, especialmente para el usuario promedio.
      </p>
      
      {/* Imagen 2 */}
      <img
        src="/blog/pagovisa.jpg"
        alt="Monopolio de procesadores de pago"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 3 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El fondo del asunto es claro: hoy en día, cualquiera que quiera crear una plataforma con pagos en línea está atado de manos.
        </span>{" "}
        Y eso no encaja con los principios originales del internet: libertad, descentralización y código abierto. 
        También sabemos que si alguien crea esa alternativa abierta, no será bien recibida por gigantes como Mastercard o Visa, que tienen el control de las rutas por donde pasa el dinero digital.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Tú qué piensas?
        </span>{" "}
        ¿Crees que algún día veremos una alternativa libre y confiable a estos gigantes financieros? ¿O vamos a seguir aceptando que un puñado de corporaciones dicte las reglas de todo el ecosistema digital? 
        La respuesta a esta pregunta definirá el futuro de la libertad en internet.
      </p>
    </div>
  );
};

// ARTÍCULO 3: IA en Gobierno y Burocracia
const EntrepreneurshipArticleContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
      {/* Texto 1 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Este es un avance que personalmente he deseado ver en México desde hace tiempo.
        </span>{" "}
        Me ha tocado vivir, como a muchos, la pesadilla de los trámites burocráticos: registrarse en el SAT, sacar un seguro, hacer cualquier gestión oficial. 
        Son procesos lentos, repetitivos y absurdamente presenciales.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Tengo 18 años, y recientemente tuve que tramitar mi cartilla militar.
        </span>{" "}
        Afortunadamente no tuve que hacer el servicio, pero sí tuve que pasar por un sorteo presencial. Me formé, entregué papeles, esperé. 
        Todo eso, cuando perfectamente se podría hacer desde un sitio web.
      </p>
      
      {/* Imagen 1 */}
      <img
        src="/blog/aieu.jpg"
        alt="Digitalización gubernamental"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 2 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Con los conocimientos básicos de programación que tengo como estudiante de primer año, puedo imaginar un sistema que automatice este tipo de procesos:
        </span>{" "}
        registro en línea, sorteo aleatorio, notificación por correo… sin filas, sin papel. Por eso me emociona —pero también me hace pensar— que EE. UU. haya lanzado una IA específicamente para reducir la burocracia.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Y aquí es donde me entra la duda: ¿con qué nivel de supervisión?
        </span>{" "}
        Si esta IA solo potencia tareas repetitivas, que requieren poca carga intelectual y están bien supervisadas, me parece un avance perfecto. 
        Pero si la IA empieza a tomar decisiones sin una base clara o con sesgos que no podemos detectar fácilmente, ahí entramos a un terreno delicado.
      </p>
      
      {/* Imagen 2 */}
      <img
        src="/blog/capitolioeu.jpg"
        alt="IA en el gobierno"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 3 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Hoy vivimos en una "IA-manía". Todo parece llevar IA: startups, marketing, productividad, incluso este blog que estás leyendo.
        </span>{" "}
        Pero la verdadera pregunta es si estas implementaciones están realmente mejorando las cosas o solo se están usando para presumir modernidad. 
        EE. UU. es un país que históricamente ha liderado en innovación tecnológica.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Yo, desde México, espero que estas ideas funcionen y algún día se implementen aquí. No necesitamos más filas. Necesitamos más código.
        </span>{" "}
        ¿Tú qué opinas? ¿La IA debería asumir tareas gubernamentales desde ya o es demasiado pronto para dejarla jugar en la cancha del estado? 
        La respuesta definirá cómo evolucionará la relación entre ciudadanos y gobierno en la era digital.
      </p>
    </div>
  );
};

// ARTÍCULO 4: Reino Unido y Verificación de Edad Digital
const TutorialArticleContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
      {/* Texto 1 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La semana pasada ya habíamos hablado de que Australia estaba implementando regulaciones similares. Hoy es Reino Unido el que avanza con esta medida, y sinceramente, creo que esto apenas comienza.
        </span>{" "}
        Tal vez no lo hemos notado aún, pero los países podrían empezar a competir por quién tiene la mejor regulación en cuanto a protección infantil digital. 
        ¿Por qué? Porque más regulación y más tecnología dan la impresión de más avance.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Y en el mundo geopolítico, eso importa.
        </span>{" "}
        Reino Unido, al igual que Australia, está enviando un mensaje claro: están comprometidos con la seguridad infantil online, 
        y lo están haciendo con medidas concretas, no solo promesas.
      </p>
      
      {/* Imagen 1 */}
      <img
        src="/blog/img1niño.jpg"
        alt="Regulación digital Reino Unido"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 2 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Y seamos realistas. Ser menor de edad significa que todavía estás formando tu carácter, tus valores, tu educación.
        </span>{" "}
        En esta era, el internet tiene un peso descomunal en eso. ¿Qué niño no tiene acceso a un teléfono o una tablet? 
        La exposición es constante. Entonces, este tipo de medidas son más que necesarias, son urgentes.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Mi predicción: no va a pasar mucho tiempo antes de que veamos a Estados Unidos dar el siguiente paso en este terreno.
        </span>{" "}
        La pregunta que queda es: ¿cuándo lo hará México? Porque aquí no solo enfrentamos el problema técnico. En México todavía batallamos con cosas más básicas, 
        como la ética interpersonal o el respeto en espacios públicos.
      </p>
      
      {/* Imagen 2 */}
      <img
        src="/blog/Img2niño.jpg"
        alt="Protección infantil digital"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 3 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Si ni eso está claro en lo presencial, ¿qué nos hace pensar que en lo digital será diferente?
        </span>{" "}
        Pero en vez de resignarnos, podríamos usar esto como una llamada de atención. Si el mundo está avanzando, nosotros también deberíamos. 
        Deberíamos empezar a construir desde ahora un enfoque mexicano sobre cómo proteger a los menores en línea.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Tú qué opinas?
        </span>{" "}
        ¿Crees que estas medidas deberían implementarse en México? ¿O piensas que el acceso libre a internet debe seguir siendo una prioridad para todos, sin importar la edad? 
        Esta decisión podría definir cómo crecerán las próximas generaciones en un mundo cada vez más digital.
      </p>
    </div>
  );
};

// ARTÍCULO 5: Marketing Viral y Estrategia Mediática
const ArchitectureArticleContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
      {/* Texto 1 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          "Astronomer" es una empresa B2B. No necesita ni busca un público masivo para sobrevivir, su modelo no depende de eso.
        </span>{" "}
        Pero en medio de una reciente controversia —al parecer por temas personales de su CEO—, deciden subirse al tren mediático y contratar a Gwyneth Paltrow como vocera temporal, 
        una movida que, más allá de ingeniosa, tiene un fondo irónico: aprovechar el ruido para capitalizarlo.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Y aquí aplica esa vieja frase: "no existe la mala publicidad". ¿O sí?
        </span>
      </p>
      
      {/* Imagen 1 */}
      <img
        src="/blog/img1viral.jpg"
        alt="Astronomer y marketing viral"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 2 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Lo interesante es cómo cambian las reglas del juego cuando una empresa, que debería estar en "modo contención", lanza una campaña como esta.
        </span>{" "}
        En lugar de ocultarse, se expone más. En lugar de disculparse, ironiza. En lugar de arreglar su reputación, capitaliza el caos.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Desde mi perspectiva, la estrategia puede ser efectiva a corto plazo, pero cuestionable éticamente.
        </span>{" "}
        ¿Realmente vale todo por visibilidad? Porque el resultado más probable es que dentro de un mes, nadie recuerde ni el escándalo ni a Astronomer. 
        Y el impacto a largo plazo de esa fugaz viralidad es dudoso.
      </p>
      
      {/* Imagen 2 */}
      <img
        src="/blog/img2viral.jpg"
        alt="Gwyneth Paltrow como vocera"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 3 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Lo que sí es claro es que en la era post-IA y del marketing viral, muchas startups están experimentando con cómo presentarse ante el mundo…
        </span>{" "}
        aunque eso signifique cruzar la línea entre lo estratégico y lo oportunista. Este caso nos muestra cómo las crisis pueden convertirse en oportunidades, 
        pero también plantea preguntas importantes sobre los límites éticos del marketing moderno.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Tú qué opinas?
        </span>{" "}
        ¿Crees que este tipo de movimientos pueden dejar huella real en la marca o simplemente son llamaradas de petate? 
        La respuesta podría definir el futuro de cómo las empresas manejan sus crisis en la era digital.
      </p>
    </div>
  );
};

// ARTÍCULO 6: Ciberseguridad en Startups y Protección de Datos
const StartupsArticleContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
      {/* Texto 1 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Hoy en día, las startups que operan con datos sensibles —especialmente en apps sociales como las de citas— necesitan una ciberseguridad de primer nivel.
        </span>{" "}
        Este caso de Tea, donde se filtraron 72,000 fotos privadas de usuarios, lo deja clarísimo: la privacidad no es un "plus", es una obligación crítica.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Y ojo: no hablamos solo de proteger la reputación, hablamos de responsabilidad real.
        </span>{" "}
        Google y Meta saben casi todo de nosotros, sí, pero al menos su enfoque está claro: publicidad. Pero cuando entregas tus datos a una app pequeña, 
        que no tiene controles ni inversión en ciberseguridad, los riesgos se multiplican.
      </p>
      
      {/* Imagen 1 */}
      <img
        src="/blog/img1cita.jpg"
        alt="App Tea filtración de datos"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 2 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Basta una brecha para que alguien con malas intenciones acceda a tus imágenes, tus hábitos y tu privacidad más vulnerable.
        </span>{" "}
        ¿Para qué? Nadie lo sabe, y ese es el verdadero problema. La falta de transparencia en el manejo de datos de startups pequeñas 
        puede convertirse en una pesadilla para los usuarios que confían en estos servicios.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La diferencia entre las Big Tech y las startups no es solo el tamaño, es la responsabilidad.
        </span>{" "}
        Las grandes empresas, aunque cuestionables en muchos aspectos, al menos tienen recursos y protocolos establecidos. 
        Las startups, en su prisa por crecer, a menudo pasan por alto la seguridad como una prioridad secundaria.
      </p>
      
      {/* Imagen 2 */}
      <img
        src="/blog/img2cita.jpg"
        alt="Ciberseguridad en apps de citas"
        className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
      />
      
      {/* Texto 3 */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La lección para las startups es clara: no puedes crecer sin proteger.
        </span>{" "}
        Si trabajas con usuarios, trabajas con confianza. Y esa confianza se pierde en segundos. Tea ya lo aprendió. 
        Esperemos que otras no tengan que hacerlo igual de tarde.
        <br /><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El futuro de las startups dependerá de entender que la ciberseguridad no es un gasto, es una inversión en supervivencia.
        </span>{" "}
        En un mundo donde los datos son el nuevo petróleo, protegerlos no es opcional. Es fundamental para el éxito a largo plazo 
        y la credibilidad de cualquier empresa que aspire a durar en el mercado.
      </p>
    </div>
  );
};

const data = [
  {
    category: "IA transforma “El Mago de Oz” para pantallas gigantes como la Sphere en Las Vegas",
    title: "Cómo la IA está reinventando el cine: del clásico Mago de Oz a experiencias inmersivas en pantalla gigante",
    src: "/blog/portadavegas.jpg",
    content: <ReactArticleContent />, // Contenido específico para el análisis de Astronomer
  },
  {
    category: "Itch.io restringe los juegos con contenido adulto, siguiendo pasos de Mastercard y Steam",
    title: "Procesadores de pago: ¿Vigilantes silenciosos o amenazas para la libertad digital?",
    src: "/blog/portadavisa.jpg",
    content: <AITechArticleContent />, // Contenido específico para IA
  },
  {
    category: "El gobierno de EE. UU. lanza una IA para reducir regulaciones burocráticas",
    title: "¿Fin de la burocracia o nuevo experimento con IA? El futuro de los trámites públicos",
    src: "/blog/portadaeu.jpg",
    content: <EntrepreneurshipArticleContent />, // Contenido específico para Google ChromeOS + Android
  },
  {
    category: "Reino Unido impone reglas para verificar edad en contenidos online sensibles",
    title: "¿Protección infantil o control digital? El dilema de verificar edades en internet",
    src: "/blog/portadauk.jpg",
    content: <TutorialArticleContent />, // Contenido específico para DAZN India
  },
  {
    category: "Startup Astronomer lanza campaña viral con Gwyneth Paltrow como vocera temporal",
    title: "¿Publicidad buena o solo polémica? El caso Astronomer y el show mediático como estrategia",
    src: "/blog/portadaviral.jpg",
    content: <ArchitectureArticleContent />, // Contenido específico para Australia verificación edad
  },
  {
    category: "Filtración de la app de citas “Tea” expone 72,000 fotos de usuarios",
    title: "¿Qué tan segura es tu app favorita? El caso de Tea y la urgencia de proteger los datos en startups",
    src: "/blog/portadacita.jpg",
    content: <StartupsArticleContent />, // Contenido específico para Microsoft y seguridad nacional
  },
];
