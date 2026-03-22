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

// ARTÍCULO: ¿La IA nos reemplazará?
export const IANosReemplazaraContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Una investigación que está a medias
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Hay algo que desde hace meses —tal vez más de un año— no me he podido sacar de la cabeza: la pregunta de si la inteligencia artificial va a reemplazar a los programadores o a los ingenieros de software.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Para muchas personas, la respuesta parece obvia. La IA ya escribe código, así que el razonamiento es inmediato: si escribe código, entonces va a reemplazar a quien lo escribe. El problema es que esa idea parte de un sesgo bastante común: no entender realmente qué hace un ingeniero de software ni qué implica construir buen software.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Es cierto que hoy la IA puede generar código. Pero generar código no es lo mismo que diseñar sistemas, entender un problema real, elegir patrones de diseño adecuados, considerar complejidad computacional, escalabilidad, mantenibilidad y contexto. Muchas veces, sin una buena guía humana, la IA simplemente ignora todo eso.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Ahí entra este término que se ha puesto de moda: vibe coding. Jugar con el código, hacerlo "funcionar", sin preocuparse demasiado por cómo ni por qué. Eso puede servir para prototipos o demos, pero no es lo que define una trayectoria profesional sólida en esta industria.
      </p>

      <img
        src="/blog/LaAInosreem(2).png"
        alt="Desarrollo de software e IA"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Para quienes apenas están empezando en programación o ingeniería de software, esta pregunta ya no es solo una duda: es miedo. Y lo entiendo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Por eso mi idea fue hacer una investigación, acompañada de contenido en video (YouTube y TikTok), que abordara este tema con seriedad. No desde la opinión de alguien que apenas va empezando, sino desde las voces de personas que ya están donde muchos aspiran llegar.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Aquí tengo una ventaja clara: estudio en una de las mejores universidades del país en ciencias de la computación. Eso me ha abierto puertas, me ha dado contactos y, sobre todo, me ha permitido entender mejor cómo funciona realmente esta industria. Pero sé que no todos tienen ese contexto ni ese acceso, y justo por eso quise construir algo útil para más gente.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La idea era recolectar distintas voces, distintos puntos de vista, y con eso ayudar a quitar el miedo, pero también a orientar mejor a quienes están decidiendo su camino profesional.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La realidad es que esta investigación está a medias.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Tengo la idea clara. Tengo el plan. Tengo varios testimonios escritos y logré algo que valoro mucho: una entrevista con un Google Developer Expert y conversaciones con personas que trabajan en Oracle. Esa entrevista, en particular, me dio una visión muy clara y muy aterrizada sobre el futuro del desarrollo de software, y definitivamente pienso compartirla.
      </p>

      <img
        src="/blog/LaAInosreem(3).jpg"
        alt="Investigación sobre IA y programación"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Mi intención era contactar a más personas de Big Tech, pero entre el semestre y el tiempo limitado, no ha sido sencillo. Mi único canal de contacto ha sido LinkedIn, y de unas diez personas a las que escribí, solo dos o tres respondieron.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Aun así, el proyecto no está muerto. Está pausado, pero no olvidado.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No quiero hacer una investigación basada en "Juanito que acaba de aprender a programar". Quiero construir conclusiones a partir de referentes reales, de personas que muchos estudiantes sueñan con llegar a ser algún día. A partir de ahí, sí, sacar una reflexión honesta y útil.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No sé exactamente cuándo lo terminaré. Tal vez antes de 2026, tal vez a inicios de ese año. Pero sí sé algo: cuando salga, será un buen recurso. Un buen video. Algo que valga la pena leer y ver.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        También me interesa que este proyecto tenga un enfoque un poco más institucional, incluso académico. Tal vez sea una puerta para explorar ese camino, que últimamente me llama más la atención.
      </p>

      <img
        src="/blog/LaAInosreem(4).jpg"
        alt="Futuro de la programación"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Por ahora, esto es solo una actualización honesta del estado de la investigación.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Gracias por leer.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO: Una ventana a mi lado personal: mi última introspección del semestre
export const VentanaLadoPersonalContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Esta entrada es distinta.
          <br />
          Más personal.
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        He hablado mucho del aspecto profesional y, sin querer, he dejado de lado esta parte. No porque no exista, sino porque mis motivos —o mi cabeza— decidieron ponerla en pausa. Hoy quiero usar este espacio para desahogar algunos pensamientos que he tenido últimamente.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Todo se ha sentido como un caos.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No sé si es porque intento abarcar demasiadas cosas o porque soy demasiado perfeccionista. Tal vez ambas. Pero, de alguna forma, este desorden me ha llevado a conocerme mejor. A preguntarme cosas incómodas pero necesarias: quién quiero ser, a dónde quiero ir y, sobre todo, por qué hago lo que hago.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Cuando persigues una carrera o un objetivo concreto, tarde o temprano aparece esa pregunta:
        <br />
        ¿por qué me esfuerzo tanto?,
        <br />
        ¿qué tanto vale este esfuerzo?,
        <br />
        ¿qué espero obtener a cambio?
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Hay personas que construyen su sentido de existencia alrededor de esas respuestas. A mí, a veces, no me quedan del todo claras. Estudio esta carrera, sí, pero también me pregunto:
        <br />
        ¿qué pensará la industria de mí?,
        <br />
        ¿cómo quiero vivir cuando termine?,
        <br />
        ¿realmente estoy aprovechando la carrera como debería?
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Son preguntas que, juntas, hacen dudar si todo vale la pena. Al final somos organismos diminutos en un universo enorme, y a veces esa idea pesa más de lo normal.
      </p>

      <img
        src="/blog/UnaVentana2.jpeg"
        alt="Introspección personal"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No sé si es cansancio emocional, saturación mental o simple introspección. Lo que sí sé es que últimamente la filosofía me ha llamado mucho la atención. Tal vez porque soy curioso por naturaleza. Me gusta preguntar, cuestionar, entender. Y cuando estudias ciencia, inevitablemente terminas tocando la filosofía, aunque no quieras.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Estos últimos días, con el semestre terminando, me he sentido raro. Durante semanas mi cortisol estuvo al tope: exámenes, entregas, evaluaciones. Ahora que todo se calmó, es como si algo faltara. Como si el cuerpo no supiera qué hacer sin estrés constante.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Este espacio es importante para mí justamente por eso. Aquí puedo hablar sin filtros. Sé que solo lo leerán quienes realmente tienen interés en mi contenido, y eso me da tranquilidad.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No he ido a varios eventos de tecnología últimamente. No sé bien por qué. Tal vez me aburrieron. Tal vez todos se parecen. Tal vez ya conocí a quienes quería conocer. O tal vez, simplemente, me volví más ermitaño. Antes disfrutaba mucho el networking; estos meses no lo he buscado de forma voluntaria. Y aunque siento que algo ahí está mal, también creo que a veces necesitamos descansar de verdad.
      </p>

      <img
        src="/blog/UnaVentana3.jpeg"
        alt="Reflexión sobre el semestre"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Este semestre me dejó agotado. Hubo noches sin dormir, noches donde ni siquiera me importaba dormir. Entrar a las siete de la mañana se volvió un infierno para mí. Soy una persona nocturna. Me encanta desvelarme escribiendo, programando, pensando, incluso viendo algo sin culpa. Levantarme a las 4:30 o 5:00 am para una clase donde la mitad del tiempo no estoy poniendo atención… sí, es una mierda. Pero es el sistema que hay.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Aun así, sigo siendo humano. Y quiero decirles que, vaya por donde vaya mi camino, todo apunta a un mismo objetivo: vivir de lo que hago. Pero para eso, también es necesario que conozcan esta parte personal. No quiero hacer un video de YouTube explicando esto. Aquí, en texto, me siento más libre.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Curiosamente, me dan ganas de hacer algo especial para Navidad o Año Nuevo. No soy un youtuber enorme, no soy Fernanfloo, pero me dan ganas de crear algo distinto. Navidad siempre ha sido una de mis épocas favoritas. Tal vez salga algo de ahí. No prometo nada, pero estén atentos.
      </p>

      <img
        src="/blog/UnaVentana4.jpeg"
        alt="Semestre y reflexiones"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Acabé el semestre de forma satisfactoria. Eso sí lo puedo decir. En estas vacaciones tengo varias cosas que quiero hacer, no porque alguien me lo exija, sino porque a veces yo mismo me presiono más de la cuenta.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        También se me ha metido en la cabeza esta sensación rara de sentirme "viejo". Ya casi voy a la mitad de la carrera. Aún recuerdo perfectamente quién era cuando entré a esta facultad. Eso me hace pensar en qué tipo de profesionista quiero ser, qué tipo de trabajo quiero hacer y cómo quiero hacerlo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Son preguntas que no he respondido del todo, pero no me pesan tanto. He sido el más joven en muchos espacios profesionales, y eso me dio algo de ego, pero también desventajas. Hoy esas "primeras veces" ya no se sienten igual. Ahora se siente más la responsabilidad sobre el futuro que estoy construyendo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y eso no va a cambiar.
      </p>

      <img
        src="/blog/UnaVentana5.jpeg"
        alt="Futuro y responsabilidad"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Para cerrar este chorote filosófico, solo quiero decir algo:
        <br />
        estas entradas son especiales para mí. Importantes.
        <br />
        Si las lees, gracias de verdad.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Nos seguimos leyendo.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO: Mi tercer semestre: ¿cómo acabaron las cosas?
export const TercerSemestreCierreContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Vienes de varias entradas donde he contado cómo fue mi semestre: cómo lo viví, por qué fue como fue y, sobre todo, cómo se siente exigirte todos los días.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Para empezar, inscribí cinco materias: Probabilidad, Modelado y Programación, Teoría de Gráficas, Matemáticas para las Ciencias Aplicadas y Álgebra Lineal. Desde el inicio me propuse algo claro: intentar alcanzar la máxima calificación posible en todas.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Hoy, al momento de escribir este blog, ya tengo una noción bastante clara de cómo cerré cada materia. Y aunque los números importan, con el tiempo he entendido que no siempre se trata de cuánto sacas, sino cuánto aprendes. En ese sentido, me siento satisfecho.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No pasé Probabilidad. Y, curiosamente, no me hace sentir tan mal como pensé. No porque no me importe, sino porque siento que ahí el aprendizaje vale más que un seis o un número "para pasar". Sé que debo aprender mucho más que eso, y lo tengo claro.
      </p>

      <img
        src="/blog/Mitercer1.jpeg"
        alt="Tercer semestre universitario"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En las demás materias cerré con nueve y diez. Recuperé mi promedio y lo dejé arriba de 9.10, alrededor de 9.25. Aun así, a veces me pregunto para qué sirve realmente el promedio hoy en día. Tengo uno bueno, sí, pero también he fantaseado con irme de movilidad estudiantil, y eso abre otro conjunto de dudas y escenarios.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No siempre siento que sea la mejor opción, pero cuando llegue la convocatoria quiero aplicar sin miedo. No quiero quedarme con la sensación de "no apliqué y nunca sabré qué habría pasado".
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En el aspecto profesional, este semestre también trajo cosas que no esperaba vivir tan pronto: el intento de internship en Amazon, la competencia de la ONI, y estar en las oficinas de Google. Son cosas que, honestamente, pensé que llegarían hasta después de terminar la carrera. Que hayan pasado ahora es algo muy gratificante, porque confirma que el esfuerzo no ha sido en vano.
      </p>

      <img
        src="/blog/Mitercer2.jpeg"
        alt="Experiencias profesionales"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Académicamente aprendí. Y también sobreviví.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Logré remontar una calificación complicada, pasé la mayoría de mis materias con muy buenos resultados y, en general, no me siento mal con el cierre del semestre. Pero sí: me dejó agotado. Sin energía. Sin palabras, a ratos.
      </p>

      <img
        src="/blog/Mitercer3.jpeg"
        alt="Reflexiones académicas"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        También me dejó con preguntas importantes:
        <br />
        ¿hacia dónde quiero redirigir mi vida profesional?,
        <br />
        ¿cómo quiero hacerlo?,
        <br />
        ¿por qué?,
        <br />
        ¿cuál es el motivo detrás de todo esto?
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Estoy invirtiendo todo mi esfuerzo en esta carrera, y una de las cosas que más necesito para sentirme en paz es tener un plan. Saber con qué visión quiero terminar. Creo que todos deberíamos hacernos estas preguntas. No solo porque son necesarias, sino porque sin ellas es fácil sentir que no eres nadie.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Ese miedo —el de "no ser nadie"— es algo que cargo desde hace tiempo. Sé que no es verdad, pero en momentos así te confunde.
      </p>

      <img
        src="/blog/Mitercer4.jpeg"
        alt="Crecimiento personal"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Al final, eso fue este semestre: sufrí, lloré, fracasé, remonté, recuperé. Me conocí mejor a mí mismo, entendí cómo reacciono bajo presión y, pese a todo, me siento satisfecho.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Salí de mi último examen del semestre contento, tranquilo. El hecho de no pasar una materia no eclipsa que en cuatro me fue muy bien y, más importante aún, aprendí bien.
      </p>

      <img
        src="/blog/Mitercer5.jpeg"
        alt="Cierre del semestre"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        A veces las decisiones difíciles requieren voluntad. Y muchas veces toca ser el director de orquesta de tu propia trayectoria profesional, sin importar lo que la sociedad o incluso tus círculos cercanos esperen de ti.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No sé cuántas entradas del blog van ya. Son la una de la madrugada y sigo escribiendo. Este espacio, aunque en teoría también sirve para "presumir", es sobre todo un lugar para desahogarme. Un rincón pequeño de la web donde puedo expresarme como quiero, cuando quiero, y con quien quiero: con ustedes.
      </p>

      <img
        src="/blog/Mitercer6.jpeg"
        alt="Agradecimiento final"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Gracias por leer estas entradas.
        <br />
        Si se me ocurre otro tema, lo escribiré.
        <br />
        Por ahora, esta es la última actualización de lo que ha pasado en mi vida y de cómo he manejado todo esto.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Estoy agotado en muchos sentidos, pero si llegaste hasta aquí, de verdad: gracias por tu tiempo.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO: Club+: un proyecto del cual no estoy tan orgulloso de haber hecho tanto ruido
export const ClubPlusRuidoContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Qué pasó con Club Plus?
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Quienes me conocen de cerca saben bien de qué iba este proyecto. Durante un tiempo creí profundamente en él. Pensé que tenía futuro. Pensé que podía funcionar. Pero no salió como esperaba, por muchas razones. Algunas fueron completamente mi responsabilidad. Otras las fui descubriendo conforme entendía mejor en qué me estaba metiendo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y aquí viene algo importante: dejé de sentir pasión por el proyecto.
        <br />
        Y cuando haces algo que no te gusta, lo haces mal.
        <br />
        Y cuando lo haces mal, fallas.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Es una regla simple que, viendo mis proyectos, se repite más de lo que me gustaría admitir.
      </p>

      <img
        src="/blog/clubplus1.jpeg"
        alt="Proyecto Club Plus"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Con Club Plus intenté traer gente, moverlo, empujarlo. Salió mal. Llegó un punto en el que simplemente dejé de tocar el proyecto y lo pausé sin más. No fue una decisión elegante ni planeada; fue cansancio acumulado y ruido interno.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Al profundizar más, me di cuenta de varias cosas que no me gustaron. Para empezar, la documentación técnica era mucho más compleja de lo que había anticipado, y durante un tiempo le resté importancia cuando en realidad sí la tenía.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Pero lo más pesado fue otra cosa: la línea ética.
      </p>

      <img
        src="/blog/clubplus2.jpeg"
        alt="Reflexiones sobre emprendimiento"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        El proyecto operaba en una zona gris. No completamente ilegal, pero tampoco completamente alineada con lo que yo considero correcto. Y me di cuenta de que lo que más me estaba motivando era la parte monetaria, no la funcional ni la creativa.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y eso no soy yo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si lo único que me interesara fuera el dinero, hoy mismo podría montar una agencia genérica, vender servicios baratos, agarrar diez clientes locales, lidiar con clientes tóxicos y aguantar. Pero entendí que eso no es todo. Porque tu trabajo también es tu reputación. Y tu reputación abre o cierra puertas.
      </p>

      <img
        src="/blog/clubplus3.jpeg"
        alt="Ética en emprendimiento"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Club Plus empezó a romper algo ahí.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Llegó un punto donde ya no me sentía bien haciéndolo. No me sentía correcto. No me sentía capaz de defenderlo con orgullo. Tal vez no quise ser ese tipo de emprendedor. Tal vez simplemente no era el momento. Pero seguir habría significado ignorar una incomodidad que no se iba.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si hubiera seguido, si hubiera empujado más y dejado de lado el semestre, probablemente hoy tendría una fecha de lanzamiento clara. Tal vez ya estaría funcionando. Pero ese "tal vez" no pesa más que la sensación de que no era lo correcto para mí.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Así que el proyecto terminó explotando solo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        El dominio ahí está, pero no lo voy a usar. Club Plus se queda como un proyecto cerrado. Y aunque es un fracaso, también es una lección. Aprendí qué tipo de cosas no quiero hacer y qué tipo de trayectoria sí quiero construir.
      </p>

      <img
        src="/blog/clubplus4.jpeg"
        alt="Aprendizajes del proyecto"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Hice bastante ruido en LinkedIn y en Instagram para, al final, tomar esta decisión. No me importa tanto, pero sí se siente raro. Como gritar que hay una fiesta en casa de Brad Pitt… y luego cancelarla.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Es incómodo.
        <br />
        Pero es honesto.
      </p>

      <img
        src="/blog/clubplus5.jpeg"
        alt="Ser honesto sobre los fracasos"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y prefiero eso a seguir algo en lo que ya no creo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Gracias por leer.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO: Veraz - una reunión en EU que salió bastante mal
export const VerazReunionEUContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Como ya he dicho antes, hablar de los fracasos también es parte de ser real. Y este proyecto es uno de ellos.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Veraz es una idea que pensé que tendría más impacto. Tal vez lo sigo creyendo. Tal vez fue un error mío al definir expectativas. No lo sé con certeza. Lo que sí sé es que hoy está en pausa, y que duele un poco admitirlo porque, en el fondo, es uno de esos proyectos con los que realmente me gustaría vivir —monetariamente hablando— en algún punto.
      </p>

      <img
        src="/blog/veraz1.png"
        alt="Proyecto Veraz"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Qué ha pasado con Veraz?
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si soy brutalmente honesto:
        <br />
        dos publicaciones en Instagram,
        <br />
        una cuenta de Instagram,
        <br />
        un dominio comprado,
        <br />
        y una landing page con un cronómetro que ya expiró…
        <br />
        y que no he tocado en más de dos meses.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Eso es todo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La idea, eso sí, está clara. No en documentación técnica formal, pero sí en mi cabeza. Tengo el boceto mental de lo que quiero que sea, de cómo funcione y de a quién va dirigido. Incluso hubo algo que me sorprendió bastante: alguien de Estados Unidos se interesó en el proyecto.
      </p>

      <img
        src="/blog/veraz2.jpeg"
        alt="Interés internacional en Veraz"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Hago casi todo mi contenido en español, pero aun así esta persona me contactó. Me dijo que le interesaba la idea y que quería unirse al proyecto de manera gratuita. Eso no me había pasado antes. Le expliqué la misión, el enfoque, y acordamos una reunión en línea.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Y salió… bastante mal.
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Para empezar, había una barrera fuerte con el idioma. No sé si fue mi falta de costumbre hablando inglés, su acento, o simplemente que no se comunicaba bien. Se notaba que no era nativo, y la conversación nunca fluyó. Pero más allá de eso, no sentí conexión. No sentí que realmente fuera a aportar valor ni que estuviéramos alineados.
      </p>

      <img
        src="/blog/veraz3.jpeg"
        alt="Desafíos de comunicación"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Después de eso, y con todo lo que se vino encima en el semestre, simplemente dejé el proyecto de lado. No fue una decisión consciente. Fue más bien agotamiento, desinterés momentáneo y procrastinación acumulada.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Aun así, quiero creer que esto puede volverse una ventaja.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Tengo la idea de convertir todo esto en contenido: un videoblog de un fin de semana construyendo la aplicación, o quizá una semana documentando todo el proceso desde cero. Mostrar qué funciona, qué no, cómo me siento, qué decisiones tomo. No vender humo, solo el proceso real.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En el camino he descubierto más herramientas de frontend y también dudas nuevas:
        <br />
        ¿necesita ser una app externa?
        <br />
        ¿esa necesidad realmente existe?
        <br />
        ¿o solo es algo que yo quiero resolver porque a mí me molesta?
      </p>

      <img
        src="/blog/veraz4.jpeg"
        alt="Reflexiones sobre el proyecto"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Porque sí, este proyecto nace de una incomodidad personal. De no querer anuncios. De querer evadirlos, o al menos reducirlos. Y sé que no soy el único con ese problema.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si una plataforma así se volviera viral, probablemente afectaría a otras empresas, incluso a medios de periodismo. Pero siendo sincero, eso me importa poco. Yo construyo mis proyectos pensando en mi público objetivo, no en las implicaciones para una "competencia" que, además, está a años luz de donde yo estoy.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Soy demasiado pequeño para que me tomen en serio como competencia. Y está bien.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Este ha sido un proceso al que me he ido adaptando. Tengo las ganas. Tengo la convicción. Y, sobre todo, tengo esa pregunta insistente en la cabeza:
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿por qué no hacerlo?
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Por ahora, Veraz sigue en pausa. Pero no muerto. Esperen contenido sobre esto. Los mantendré informados.
      </p>

      <img
        src="/blog/veraz5.jpeg"
        alt="Futuro de Veraz"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Gracias por leer.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO: fciencias.app - un recuento para reír o para llorar
export const FcienciasAppRecuentoContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Qué ha pasado con fciencias.app?
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si soy completamente honesto, hoy el proyecto se resume en esto: una landing page medio hecha con inteligencia artificial, un login y un sistema de registro que —eso sí— funciona bastante bien. Nada más. Y nada menos.
      </p>

      <img
        src="/blog/fciencias1.jpeg"
        alt="Estado actual de fciencias.app"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En estos últimos días he pensado mucho en este proyecto. No tanto en lo técnico, sino en todo lo que implica realmente construir una red social desde cero. Aunque la idea original ya la he contado, lo que más me ha dejado fciencias.app es algo distinto: me abrió los ojos sobre la experiencia de usuario y, sobre todo, sobre la psicología del usuario.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y ahí es donde todo se complica.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La conversación de la Facultad de Ciencias hoy está en Facebook. Ese es el punto de partida, nos guste o no. Mi idea no busca parecerse a Facebook, pero siendo realistas, sí es una especie de extensión: intentar resolver cosas que Facebook no resuelve bien dentro del contexto específico de la facultad.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        El problema es… Facebook.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Facebook es una app nativa. La gente ya tiene su perfil, sus amigos, sus grupos, una interfaz pulida, memes, contenido externo, años de costumbre. Funciona bien. Es cómoda.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        fciencias.app, en cambio, es una web app hecha por un estudiante con una laptop que a veces ya ni la batería le aguanta bien.
      </p>

      <img
        src="/blog/fciencias2.jpeg"
        alt="Desafíos del desarrollo"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Competir contra eso no solo es difícil: es agotador. A veces me hace sentir incapaz, como si el proyecto fuera demasiado grande para mí. Hay días en los que ese sentimiento pesa, y otros en los que simplemente lo ignoro, me siento a pensar mejor las ideas… y algo empieza a encajar.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Lo que he entendido es que construir una red social es mucho más un problema de psicología que de funcionalidades. Puedes hacer un producto técnicamente decente en una semana usando IA. Pero lograr que la gente lo use, que vuelva, que confíe, que lo sienta suyo… eso es otro nivel de complejidad.
      </p>

      <img
        src="/blog/fciencias3.jpeg"
        alt="Psicología del usuario"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La pregunta no es solo:
        <br />
        ¿qué tan bonita es?
        <br />
        ¿qué tan bien funciona?
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Sino:
        <br />
        ¿qué tan útil es para la gente?
        <br />
        ¿qué tanto valor real aporta?
        <br />
        ¿por qué alguien dejaría lo que ya usa?
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Esa es la parte verdaderamente difícil.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Mi idea, siendo optimista, es que en estas vacaciones pueda terminar al menos un MVP. No prometo nada. Me fascina el proyecto, pero sé que si quiero hacer algo bien, tengo que enfocarme al máximo. Y algo sí tengo claro: será open. No quiero anuncios, no quiero monetización rara. Solo quiero que funcione. Y sí, de paso, que sume a mi currículum.
      </p>

      <img
        src="/blog/fciencias4.jpeg"
        alt="Planes para el MVP"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Pero hay otro tema que no puedo ignorar: la responsabilidad.
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Al final del día, esta sería una red social hecha por una sola persona. Sin equipo. Eso te vuelve más vulnerable a errores, señalamientos, acusaciones. Y conociéndome, no sé qué tan bien podría manejar ciertas situaciones si se salen de control.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Además, está el factor institucional. Sé que la dirección de la facultad —e incluso rectoría— está presente en los grupos de Facebook. Observan, leen, analizan lo que dicen los estudiantes. Crear una plataforma alternativa puede volverse algo… delicado. Caótico. Incluso peligroso, entre comillas.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Tal vez es solo paranoia mía. Tal vez no. Pero pensar en las implicaciones externas también es parte del proceso.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Este proyecto puede ayudar a mi reputación como estudiante… o afectarla. Y eso pesa, porque mi vida diaria ocurre ahí: estudio ahí, convivo ahí, tengo mis relaciones sociales ahí.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Por ahora, esto es solo una actualización. Un recuento honesto de dónde está fciencias.app, qué cosas estoy considerando y por qué no es tan simple como "hacer otra app".
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si todo sale bien, me gustaría lanzarla antes de 2026. Si voy a hacer esto, quiero hacerlo en serio.
      </p>

      <img
        src="/blog/fciencias5.jpeg"
        alt="Futuro de fciencias.app"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Gracias por leer.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO: Flux - qué es y por qué tengo un presentimiento raro
export const FluxPresentimientoContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si viste mi video de YouTube, ya sabes que Flux es el proyecto que desarrollé para la competencia de OpenAI. Esta entrada es para responder dos preguntas simples, pero incómodas: qué pasó con ese proyecto y por qué tengo una sensación extraña cada vez que pienso en su futuro.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Cuando la idea de Flux se planteó dentro del equipo, la reacción fue inmediata: les fascinó. No solo porque resolvía un problema real, sino porque era una solución disruptiva. No era un refrito ni una idea genérica. De hecho, hubo otras ideas que exploré antes, pero me parecieron demasiado comunes y ni siquiera las propuse.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Irónicamente, una de esas ideas "genéricas" terminó ganando la competencia.
      </p>

      <img
        src="/blog/Flux2.jpeg"
        alt="Competencia OpenAI"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No voy a decir que me robaron nada, pero sí me sentí… injusto conmigo mismo. Sentí que mi proyecto fue minimizado, cuando en realidad sí valía más. Y no lo digo desde el ego: tengo la maqueta completa, una demo funcional y un boceto bastante claro de lo que Flux puede llegar a ser.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Flux no es perfecto, pero es útil. Muy útil. Especialmente para su público objetivo. Hoy no hay una alternativa clara que haga exactamente lo mismo. Hay algo parecido —ni siquiera recuerdo bien el nombre—, pero sé que Flux puede ir más lejos.
      </p>

      <img
        src="/blog/Flux3.jpeg"
        alt="Utilidad de Flux"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El problema empieza cuando uno cae en el juego de las comparaciones.
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si te pones a consumir contenido de computación en Twitter o Instagram, ves gente construyendo proyectos increíbles todo el tiempo. Y sin darte cuenta entras en el ciclo de: yo hice esto, él hizo aquello, yo soy más, yo soy menos.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Eso no te motiva. Te quema. Terminas con un burnout silencioso y una pregunta incómoda: ¿para qué estoy haciendo todo esto?
      </p>

      <img
        src="/blog/Flux4.jpeg"
        alt="Reflexión sobre el proyecto"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Con Flux tengo claro algo: no quiero forzarlo ahora. No quiero convertirlo en algo que todavía no entiendo al 100%.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Mi idea es que para 2026 explore este proyecto con más calma y más criterio. Que evolucione hacia una herramienta B2B, algo que pueda venderse, implementarse de forma relativamente autónoma y que, como mínimo, sume de forma real a mi currículum.
      </p>

      <img
        src="/blog/Flux5.jpeg"
        alt="Planes futuros para Flux"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si no, siempre existe otra opción: hacerlo open source y cerrar el ciclo ahí.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        El nombre, lo admito, es genérico. Tal vez cambie. Tal vez termine siendo algo más mexicano, más mío.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Esta entrada es corta porque todavía no he explorado del todo el mercado ni el verdadero alcance de Flux. Pero lo haré. Y cuando tenga más claridad, lo contaré aquí.
      </p>

      <img
        src="/blog/Flux6.jpeg"
        alt="Futuro de Flux"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Por ahora, solo necesitaba escribirlo. Desahogarme un poco y dejar constancia de lo que siento con este proyecto.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO: De Zoi a Chiikö
export const DeZoiAChiikoContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
      Fuck… la verdad es que este ha sido un proceso largo. Uno de esos que piensas demasiado, postergas, dudas, pero que al final sabes que es lo correcto.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Después de darle muchas vueltas, llegué a la conclusión de que quiero seguir esta línea: diseño web, pero bien hecho. Y no solo porque "funcione", sino porque me llene a mí.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Para entender por qué nace chiikö, primero tengo que contar un poco la historia de Zoi Marketing.
      </p>

      <img
        src="/blog/Zoi1.jpeg"
        alt="Historia de Zoi Marketing"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Antes de Zoi, yo tenía una marca que se llamaba Creativa Carrada. Ahí hacía sitios web como podía. Usaba Canva, no sabía qué era frontend, JavaScript ni nada por el estilo, pero lo intentaba. Tenía iniciativa, ganas y curiosidad, aunque técnicamente estaba muy verde.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Cuando me asocié con Diego, todo empezó a tomar más forma. Con Zoi llegaron mis primeros clientes reales, mis primeros portafolios y, sobre todo, mis primeras lecciones duras sobre cómo funcionan las relaciones laborales entre un cliente y un prestador de servicios.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Aprendí muchas cosas… casi todas a la mala. Pero no me arrepiento. Todo eso hoy me sirve.
      </p>

      <img
        src="/blog/Zoi2.jpeg"
        alt="Lecciones aprendidas"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        El problema con Zoi Marketing es que abarcábamos demasiado. Hacíamos de todo: redes, diseño, páginas, lo que cayera. Básicamente era buscar chamba por donde fuera y cobrar barato.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿El resultado?
        </span>
        <br />
        Clientes tóxicos.
        <br />
        Clientes sin disposición.
        <br />
        Malentendidos.
        <br />
        Peleas.
        <br />
        Despidos.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No era grato ni para mí ni para la marca. Llegó un punto donde ya ni siquiera valía la pena pelear ciertas cosas. Y ahí fue cuando me pregunté seriamente:
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        ¿Qué quiero hacer con todo lo que aprendí?
        <br />
        ¿Vale la pena pausar esto sin más?
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La respuesta fue no.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No quiero que toda esa experiencia se quede ahí. Quiero que valga la pena también a futuro. Así que decidí transformar la marca.
      </p>

      <img
        src="/blog/Zoi3.jpeg"
        alt="Transformación de la marca"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Ya no voy a ofrecer un sinfín de servicios. Me voy a enfocar en diseño web premium, profesional, que venda y que se sienta bien hecho.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Así nace chiikö.
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        El nombre no tiene un significado literal. Es una palabra inventada. Pero me gusta cómo suena, cómo se ve y, sobre todo, se siente original. Hoy en día todo está en inglés, todo suena igual, todo parece copiado. Yo quiero ir un poco en contra de eso.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Mi idea con chiikö no es solo hacer sitios web. Quiero hacer artesanías digitales. Productos que se sientan hechos a mano, no generados en masa. Sitios con intención, con criterio, con diseño real.
      </p>

      <img
        src="/blog/Zoi4.jpeg"
        alt="Artesanías digitales chiikö"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Hoy cualquier plataforma con inteligencia artificial te arma un sitio en minutos, pero todos se ven iguales. Genéricos. Sin alma. Ahí es donde quiero diferenciarme.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        (Nota mental: el logo de chiikö se ve tan bien que algún día me voy a hacer una playera con él. Cuando pase, se las enseñaré).
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Algo curioso es que con el tiempo sentía menos ganas de tener una agencia. Pensé que ya no me gustaba… hasta que entendí que el problema no era la agencia, sino querer abarcar todo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Cuando me enfoco solo en diseño web —algo que llevo haciendo desde hace años y que de verdad me apasiona— todo vuelve a tener sentido.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Mi idea es que para 2026 chiikö esté funcionando formalmente. Haré publicidad, probaré cosas, veré si llegan muchos clientes o pocos, y documentaré lo que pase. También quiero llevarla a un enfoque más internacional.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Esto es simplemente una nueva faceta de uno de mis proyectos profesionales. No es un reinicio vacío, es una evolución con cicatrices incluidas.
      </p>

      <img
        src="/blog/Zoi5.jpeg"
        alt="Evolución de chiikö"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Gracias por leer.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO: Cómo lidiar con el fracaso
export const ComoLidiarConElFracasoContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Escrito por un estudiante que aún no aprende a vivir al 100% con él
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si estás leyendo esto, ojalá te encuentres en una situación similar a la mía, o al menos cercana. Últimamente no me he sentido desanimado, pero sí raro. Extraño.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En redes sociales suelo contar cuando logro algo: un proyecto, un proceso, un avance. Pero casi nunca hablo de mis fracasos ni de lo que he aprendido de ellos. Y creo que eso es un error. No solo para crecer, sino para ser real.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No intento construir redes sociales perfectas. No soy perfecto. No soy alguien artificial. Así que en esta entrada quiero hablar de dos fracasos recientes: cómo perdí una materia y cómo perdí la oportunidad de un internship en Amazon.
      </p>

      <img
        src="/blog/fracasos1.jpeg"
        alt="Reflexión sobre el fracaso"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Fracaso 1: Probabilidad
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Probabilidad es, honestamente, una materia complicada. Confusa. Y me dejó un mal sabor de boca.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Para dar un poco de contexto: cuando me inscribí a una competencia de programación de OpenAI, coincidió exactamente con un examen importante de probabilidad. En ese momento tuve que decidir: estudiar para la materia o prepararme para el hackatón.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Elegí el hackatón. Me llenaba más, le veía más beneficio a corto plazo y me motivaba de verdad.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        El resultado: no pasé a la final del hackatón como yo esperaba… y también terminé perdiendo la materia. Perdí ambas cosas.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Aun así, no fue tiempo completamente perdido. Aprendí bastante: cómo organizarme con otras personas, cómo asumir un rol más de liderazgo, y cómo lidiar con presión constante cuando nada parece salir a tu favor.
      </p>

      <img
        src="/blog/fracasos2.jpeg"
        alt="Aprendizajes del fracaso"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Con la materia, decidí pasarla al siguiente semestre. Me compré un libro de probabilidad con ejercicios y planeo estudiarlo durante vacaciones para llegar con bases más sólidas. No prometo nada, pero quiero intentarlo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        De este fracaso aprendí algo importante: más que culparme, entendí que nadie va a venir a rescatarme. Nadie va a preocuparse por mi carrera más que yo mismo. Si quiero tener buenas bases y eventualmente hacer una tesis relacionada con inteligencia artificial, tengo que enfrentar esto.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La buena noticia es que mi carrera me apasiona. Así que, aunque sea un reto, tal vez pueda disfrutar el proceso.
      </p>

      <img
        src="/blog/fracasos3.jpeg"
        alt="Pasión por la carrera"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Fracaso 2: El internship de Amazon
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Este fue un fallo épico, pero interesante.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Apliqué porque me llegó una invitación por LinkedIn. Lo hice más por curiosidad que con esperanza real. Pensé: capaz ni me aceptan. Para mi sorpresa, me invitaron al Online Assessment.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Era una prueba de programación más una evaluación "psicológica" sobre cómo reaccionas ante distintas situaciones laborales. Esa misma semana intenté estudiar LeetCode y algoritmos. Aprendí a estructurar mejor soluciones, a pensar en patrones y a crear una especie de "caja de herramientas" mental.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        El problema fue que esa semana también tenía otros exámenes: álgebra lineal y matemáticas aplicadas. Combinar todo fue brutal. Me terminé quemando.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Sobreviví, sí. Pero descuidé bastante la parte de Amazon.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Algo curioso es que en ese tipo de assessments nadie te vigila. No es en vivo. Todo parece automatizado. Por un momento pensé en hacer trampa: copiar una solución, pasar el filtro y ya. Pero decidí no hacerlo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Quise hacerlo por mi cuenta, aunque eso significara fallar. Resolví medianamente bien solo uno de los dos problemas en una hora.
      </p>

      <img
        src="/blog/fracasos4.jpeg"
        alt="Experiencia con Amazon"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No me arrepiento.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Tal vez simplemente no era el momento para un internship. Después de eso seguí sobreviviendo el semestre y me di cuenta de varias carencias reales: deuda técnica, falta de práctica en ciertos lenguajes, dificultad para estructurar bien algunas respuestas.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Eso también es información valiosa.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Reflexión final
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Parte de escribir esto es reconocer que también fracaso. Y no creo que mucha gente lea esta entrada, pero si tú estás pasando por algo parecido, quiero decirte esto:
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No creo que el fracaso sea casual. Creo que la vida te pone ahí para obligarte a mejorar. No tengo todas las soluciones claras ni las he ejecutado todavía, pero no me siento mal conmigo mismo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En el assessment de Amazon no respondió una inteligencia artificial: respondí yo. Y esa materia no la reprobó "alguien más": la reprobé yo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Eso duele, pero también genera algo raro: responsabilidad… y pertenencia. La sensación de que tengo que hacerlo por mí, no por validación externa.
      </p>

      <img
        src="/blog/fracasos5.jpeg"
        alt="Reflexión final sobre el fracaso"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        No sé explicarlo mejor, pero espero que se entienda. Gracias por leer.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO: Fin de semestre
export const FinDeSemestreContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Hola, queridos suscriptores. Sé que me ausenté por bastante tiempo. No había escrito nada desde que salí del Hackathon de OpenAI, y la verdad es que han pasado muchas cosas que valía la pena contar.
      </p>

      <img
        src="/blog/findesem1.jpeg"
        alt="Fin de semestre"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Este cierre de semestre fue pesado. Después del hackathon de Open, me enfoqué tanto en el proyecto y en estudiar lo necesario para sacarlo adelante que terminé descuidando varias cosas de la escuela. Exámenes que no estudié a tiempo, evaluaciones que tuve que reponer, semanas donde se juntaron dos o tres exámenes importantes y la presión se volvió constante.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Normalmente suelo organizarme bien: hago planes de estudio con anticipación, estudio con calma y llego a los exámenes con bases sólidas. Esta vez no fue así, y se notó. Fue frustrante tener que improvisar y sobrevivir más que aprender.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        También tuve que hacer una exposición. Originalmente era sobre redes neuronales, pero decidí usar el tema del Hackathon porque ya tenía una demo funcional. Además, se me cruzó por la cabeza que quizá de ahí podría salir algo más grande, incluso un negocio. Eso quedó pendiente.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Pasé álgebra y matemáticas para las ciencias aplicadas (una especie de cálculo para computación) y entregué un proyecto de modelado y programación que, siendo honesto, no fue mi mejor trabajo. Aun así, aquí estoy. Vivo. Y, aunque con un sabor un poco amargo, puedo decir que terminé el semestre de forma satisfactoria. Incluso logré pasar con buena calificación una materia que venía arrastrando desde antes, y eso se siente bien.
      </p>

      <img
        src="/blog/findesem2.jpeg"
        alt="Experiencias del semestre"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Ahora viene algo que quiero dejar para el récord: Apliqué a un internship en Amazon… y fallé épicamente.
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La verdad lo hice más por curiosidad que con verdadera esperanza. Avancé hasta el Online Assessment, lo cual ya fue una sorpresa. Eran dos problemas técnicos en una hora. Solo logré resolver uno, y el otro apenas y lo entendí. No pasé. Pero no lo veo como un fracaso total; más bien como una señal clara de que tengo una deuda técnica importante. Este invierno quiero meterle muy duro a LeetCode y reforzar fundamentos que dejé de lado este semestre.
      </p>

      <img
        src="/blog/findesem3.jpeg"
        alt="Desafíos académicos"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Otro tema que me ha tenido inquieto es una red social que estoy desarrollando para la Facultad de Ciencias. Se ha vuelto un reto grande, no solo técnico, sino personal. Mucho tiene que ver con autoestima y con la duda constante de si soy capaz de hacerlo bien, bien de verdad. Aun así, me emociona. Quiero aprender más sobre psicología del usuario, diseño, tendencias, y construir algo útil y atractivo para estudiantes.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En estos días he estado muy reflexivo. A veces siento que me estoy volviendo viejo, que debería exigirme más, que el tiempo pasa rápido. Todo se ha sentido un poco pesado… pero también auténtico. Me apasiona lo que hago, incluso cuando me cansa.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Tomé dos decisiones importantes:
        </span>
      </p>

      <img
        src="/blog/findesem4.jpeg"
        alt="Decisiones importantes"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La primera fue cerrar Club Plus. Ya no le veía futuro. Con el tiempo se volvió inviable y, sobre todo, dejó de sentirse ético. Eso pesó mucho en la decisión final.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La segunda es que mi agencia de marketing va a cambiar. Voy a ofrecer menos servicios, pero mejor hechos. Principalmente diseño web, pero de una forma que realmente impresione. Quiero calidad real, no volumen.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Tengo otro proyecto pendiente para el que incluso ya compré el dominio. Se me ocurrió documentar todo el proceso en un video de YouTube: tres días trabajando intensamente, desde cero hasta algo funcional. Un video largo, de unos 20 o 25 minutos, y de ahí sacar clips para TikTok. No sé si lo haré, pero la idea está ahí.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La creación de contenido es otro tema complicado. Tengo ganas, pero entre la flojera, el perfeccionismo y la falta de ideas, termino no haciendo nada. Se ha vuelto un patrón: muchos proyectos, muchas ideas, poco avance. Lo único realmente sólido es que sobreviví el semestre y que tengo de mediados de diciembre a febrero para ordenar todo esto.
      </p>

      <img
        src="/blog/findesem5.jpeg"
        alt="Proyectos y contenido"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Tal vez haga más contenido, vaya a más eventos… aunque últimamente me he vuelto bastante ermitaño. Antes era muy social, ahora prefiero quedarme en mi computadora. No sé si sea normal, pero es donde me siento más cómodo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Todo esto me trae confundido, un poco perdido. Pero, curiosamente, me gusta. Porque en medio de ese caos, siento que aquí hay algo que me da propósito, o al menos la posibilidad de construirlo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Esta entrada es más personal. No es para el currículum ni para aparentar productividad. Es solo contexto, una forma de decir: esto es lo que ha estado pasando en mi día a día.
      </p>

      <img
        src="/blog/findesem6.jpeg"
        alt="Reflexión final del semestre"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En las siguientes entradas les contaré cómo Zoi Marketing va a transformarse en otra marca, y también quiero escribir sobre cómo lidiar con el fracaso, porque últimamente me ha tocado más de lo que me gustaría admitir.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Por ahora, eso es todo. Gracias por leer.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO 1: Ingreso a la UNAM
export const IngresoUnamContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Les voy a poner un poco en contexto. Estaba por hacer mi examen COMIPEMS en el año 2021. Para quienes no lo sepan, el examen COMIPEMS es la prueba de ingreso a las preparatorias. La mejor universidad de Latinoamérica, la UNAM, tiene una extensión de bachillerato que permite entrar a la universidad directamente sin tener que presentar un examen de admisión.
        </span>{" "}
        Desde que salí de la secundaria ya podía entrar a esta universidad, y para lograrlo debía hacerlo mediante ese examen. El COMIPEMS consiste en agrupar todas las preparatorias de la zona metropolitana de la Ciudad de México; el proceso es que seleccionas tus opciones de preparatoria, y conforme a los aciertos que obtienes en el examen, es la escuela a la que te asignan.
      </p>
      
      <img
        src="/blog/cchsur.jpeg"
        alt="Letras en el CCH Sur"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La UNAM tiene muchos bachilleratos, pero yo quería uno en especial: el CCH Sur, que pedía un mínimo de 99 aciertos. Pongámonos aún más en contexto: estábamos en plena pandemia, y mi familia no tenía dinero para pagarme un curso privado de ingreso. Esos cursos normalmente cuestan más de $20,000 pesos, una cantidad que mi familia no podía cubrir.
        </span>{" "}
        Entonces decidí estudiar autodidacta, con ayuda de YouTube, específicamente con un canal llamado Iknium. Pero ese no fue mi único recurso. La propia universidad me proporcionó una guía de estudio con los temas oficiales y un examen de simulación. (Esto es importante: recuerden los exámenes de simulación).
      </p>

      <img
        src="/blog/cch7am.jpeg"
        alt="llegando al CCH Sur"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Esta historia no se trata solo de que estudié, hice el examen y pasé. Lo viví más como un proceso de desarrollo personal, porque literalmente fue el primer reto en el que mis decisiones podían cambiar mi futuro. Al principio, no me lo tomaba tan en serio. No estudiaba tanto, me lo tomaba como un hobby.
        </span>{" "}
        Sentía que tenía demasiado tiempo y que no era necesario matarme estudiando desde temprano. Así que durante varios meses no avancé mucho. También tenía otra guía que conseguí en internet, pero resultó inservible: contenía temas de años pasados, no del temario oficial.
      </p>

      <img
        src="/blog/jardinbotanico.jpeg"
        alt="Jardín Botánico de la UNAM"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El canal Iknium ofrecía exámenes de simulación en línea para practicar. Un día decidí resolver uno de esos exámenes y terminé con una pésima calificación: de 128 aciertos, solo obtuve 50. Eso me desanimó completamente. Me sentí devastado, aunque sabía que en el fondo no había estudiado bien.
        </span>{" "}
        Ese fue mi momento de introspección, el punto donde decidí analizar: ¿cómo estoy estudiando?, ¿qué estoy haciendo mal? A partir de ahí, con el poco esfuerzo que ya había tenido, decidí empezar desde cero. Sentía que no dominaba todos los temas, y dominarlo todo me haría sentir más seguro para el examen.
      </p>

      <img
        src="/blog/primerafotounam.jpeg"
        alt="Primera foto en la UNAM"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Entonces lo que hice fue ver todos los videos del canal Iknium, siguiendo el temario oficial de la guía de la UNAM. A veces me aburría o me hartaba, pero siempre escuchaba con atención. Además, practicaba constantemente con ejercicios y preguntas. Al final, en mi último examen de simulación, obtuve 110 aciertos de 128.
        </span>{" "}
        Ya eran las últimas semanas antes del examen real, y sentí que lo tenía todo… pero me faltaba algo: lo mental. Porque si no tenía resiliencia ni nervios de acero, por más que hubiera estudiado, no iba a pasar el examen. Así que los últimos días me dediqué a practicar y prepararme mentalmente para el reto más grande que había enfrentado hasta entonces.
      </p>

      <img
        src="/blog/primeravisitacu.jpeg"
        alt="Primera visita a la UNAM"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Recuerdo perfectamente el día del examen. Un día antes no estudié nada, porque ya había repasado todo. Confiaba en mi proceso y en que todo saldría bien. Dormí muy bien y me levanté a las 5 de la mañana, porque el examen era a las 7. Mientras me arreglaba y desayunaba, estaba librando una batalla interna de motivación.
        </span>{" "}
        Llegué a la sede, me pasaron al aula y traté de platicar con alguien, pero estaba demasiado nervioso. Me senté, vi el examen y sentí una enorme satisfacción: casi todas las preguntas me las sabía. Esa sensación de "esto ya lo estudié" fue increíble.
      </p>

      <img
        src="/blog/sisepuede.jpeg"
        alt="Motivación para el examen"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          No contesté en orden. Empecé por la materia más fácil y dejé matemáticas para el final. Terminé siendo el último en salir del aula, porque no quería desperdiciar ni un minuto. Cuando faltaban cinco minutos, ya había terminado, pero decidí quedarme para relajarme, revisar mis respuestas y repetirme mentalmente:
        </span>{" "}
        "Pasará lo que tenga que pasar. Si apruebo o no, di mi mejor esfuerzo. Ya no puedo castigarme más mentalmente si repruebo, porque realmente luché y di mi máximo." Salí de la sede aliviado, con la sensación de haber cumplido. Poco después fue mi graduación de secundaria, pero estábamos en pandemia, así que fue en línea (una graduación bastante chistosa, por cierto).
      </p>

      <img
        src="/blog/resultados.jpeg"
        alt="Resultados del examen"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Pasaron meses hasta que dieron los resultados. Un día de julio anunciaron la fecha, y recuerdo que estaba totalmente nervioso, angustiado y preocupado. Cuando por fin los vi, decía mi nombre y la frase mágica: "Aspirante seleccionado." Con mi primera opción y 100 aciertos de 128. No saben la felicidad que sentí. Lloré. Sí, lloré con los resultados.
        </span>{" "}
        Me sentí profundamente orgulloso de mí mismo. Fue una batalla mental más que académica: por primera vez me probé a mí mismo y supe quién era de verdad. Me dijeron que no iba a poder. Me dijeron que estaba loco. Pero fue mi miedo a no pasar lo que me hizo estudiar más… y lo que me llevó a la mejor universidad de Latinoamérica solo estudiando con YouTube y disciplina. Moraleja: aunque no te compren un curso caro ni tengas las mejores herramientas, si te preparas mentalmente y tienes lo necesario, puedes lograrlo. Esta experiencia me enseñó una gran lección: me dio autoestima, orgullo y algo que siempre llevaré conmigo. Después de eso, actualmente estudio en la UNAM, en la carrera de Ciencias de la Computación. Pero las historias de la preparatoria se las contaré después. Muchas gracias por leer. Si esto te sirve de algo, puedes mandarme un mensaje por Instagram y con gusto te puedo aconsejar cómo lo hice o qué sistemas utilicé para estudiar de la mejor manera. Gracias por leer mi historia.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO 2: Vida diaria en la UNAM
export const VidaDiariaContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Mi horario como estudiante de Ciencias de la Computación en la UNAM es bastante variado, así que les contaré exactamente qué hago y cómo cambian mis días. Lo primero que hago es levantarme a las 4:30 de la mañana. Esto porque vivo un poco lejos de la universidad, así que necesito salir temprano.
        </span>{" "}
        Me levanto, me baño, me cambio, desayuno y salgo rumbo a la UNAM. Llego aproximadamente entre 6:50 y 7:00 de la mañana, justo a tiempo para mi primera clase: Álgebra Lineal.
      </p>
      
      <img
        src="/blog/1ru.jpeg"
        alt="Álgebra Lineal en el pizarrón"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          En esa clase vemos cosas rarísimas, como matrices, vectores y transformaciones, temas que al principio pueden parecer abstractos, pero que son esenciales para la carrera. Después, a las 8:00 a.m., tengo otra materia: Modelado y Programación. En ella aprendemos a estructurar el código, a escribirlo de forma ordenada y limpia, y en general a pensar de manera más lógica para resolver problemas complejos.
        </span>{" "}
        Más tarde tengo Probabilidad, una de las clases más pesadas del semestre. Las materias de Álgebra Lineal y Probabilidad las tomo junto con alumnos de Actuaría, Matemáticas y Física, así que ya se imaginarán el nivel de dificultad. Aunque es demandante, estoy seguro de que puedo aprobarla con buena calificación.
      </p>

      <img
        src="/blog/2ru.jpeg"
        alt="Materiales de programación"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Después de esas clases tengo un espacio libre de cinco horas, de 10:00 a.m. a 3:00 p.m.. Originalmente pensaba usar ese tiempo para hacer ejercicio, pero por diferentes motivos no he podido hacerlo con regularidad.
        </span>{" "}
        En lugar de eso, esas cinco horas las utilizo para estudiar, adelantar tareas, avanzar proyectos o repasar temas de mis clases. Todo eso lo hago en un lugar muy especial dentro de la facultad: el Laboratorio Simbólico de Alumnos de Ciencias de la Computación. Si eres de la carrera y estás leyendo esto, probablemente me veas ahí todos los días alrededor de las 10 de la mañana hasta las 3 de la tarde.
      </p>

      <img
        src="/blog/3ru.jpeg"
        alt="Mi espacio de trabajo en el laboratorio"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          No soy un robot que pueda pasar cinco horas seguidas pegado a la computadora. No tengo esa capacidad, pero sí tengo la habilidad de organizar mi tiempo y concentrarme en tareas específicas. Normalmente dejo de trabajar alrededor de las 2:00 p.m.
        </span>{" "}
        A esa hora bajo a comer. Casi siempre llevo mi propia comida y la caliento en un microondas comunitario que hay en la facultad. La mayoría de las veces como solo, escuchando música o revisando redes sociales. A veces me encuentro con amigos y como con ellos, pero eso varía.
      </p>

      <img
        src="/blog/4ru.jpeg"
        alt="Pasillos de la Facultad de Ciencias"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Después tengo otra clase que se llama Teoría de Gráficas (Graph Theory), una materia que me parece sumamente fascinante. Y tras esa clase viene una más: Matemáticas para las Ciencias Aplicadas, que dura de 4:00 p.m. a 6:00 p.m.. En esa tengo un profesor increíble, así que siempre aprendo algo nuevo y disfruto mucho la clase.
        </span>{" "}
        En resumen, paso muchas horas en la facultad, pero me gusta. Al terminar el día, regreso a casa —a veces leyendo un libro, escuchando música o simplemente navegando en redes sociales. Escucho muchísima música; de hecho, creo que sin mis AirPods no podría vivir.
      </p>

      <img
        src="/blog/5ru.jpeg"
        alt="Setup de estudio en casa"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Ya en casa, lo que hago es avanzar un poco más en tareas o proyectos, o simplemente dormir y preparar mis cosas para el día siguiente. Esa es mi rutina de lunes, miércoles y viernes. Los martes y jueves son un poco más relajados, porque esos días no tengo clases en la tarde.
        </span>{" "}
        Normalmente salgo de la escuela a las 10:00 a.m., y a partir de ahí el resto del día está libre. A veces me regreso a mi casa, otras veces hago ejercicio, o me quedo en la facultad avanzando en algo. Depende del día, pero usualmente esos días como en casa.
      </p>

      <img
        src="/blog/6ru.jpeg"
        alt="Momento de relajación"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Esa sería, en resumen, mi rutina como estudiante de Computer Science. Ojalá pudiera transmitir con palabras la presión académica que implica esta carrera, pero es difícil describirlo.
        </span>{" "}
        En los próximos días estaré grabando ya sea un reel, un TikTok o un video de YouTube para mostrar cómo es mi semana, los retos que enfrento y, sobre todo, darles un vistazo real a cómo se ve mi vida como estudiante de Ciencias de la Computación en la UNAM. Muchísimas gracias por leer.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO 3: Eventos tech siendo introvertido
export const EventosTechContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Voy a empezar aclarando algo: no puedo hablarles desde la experiencia de una persona con 40 años yendo a eventos, organizándolos o con la receta exacta del éxito. Primero, porque esa receta no existe; y segundo, porque todavía no tengo tanta experiencia como para decirles cómo va a ser cada evento tech o cómo "deben" vivirlo.
        </span>{" "}
        Lo que sí puedo decirles —desde mi experiencia— es que ir a eventos tecnológicos me ha salido completamente gratis. No he pagado ni un solo boleto para asistir, ya que la mayoría de estos eventos en la Ciudad de México son gratuitos. Pero el verdadero reto no ha sido conseguir la entrada: ha sido vencer mi lado introvertido.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En la industria tecnológica, hay muchísima gente introvertida. En mi carrera, por ejemplo, abunda este tipo de personalidad. No sé exactamente por qué, pero a muchos se nos complica conectar con otras personas, hacer networking, entablar conversación con expertos, reclutadores o futuros socios. Y eso es un problema, porque si no sabes cómo romper esa barrera, te pierdes de muchísimas oportunidades.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Hay quienes ni siquiera se atreven a asistir a estos eventos por miedo, y este texto justamente está dirigido a esas personas: para que vean que sí se puede, que hay un mundo enorme de oportunidades esperándolos afuera, y que solo con ir ya estás ganando.
      </p>
      
      <img
        src="/blog/1so.jpeg"
        alt="Mi experiencia en eventos tech"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Mi experiencia en eventos tech
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        He asistido a eventos de comunidades como Python CDMX, Google, y otras organizaciones tecnológicas. Llevo más de un año yendo y conociendo gente nueva, y eso inevitablemente me llevó a abrir un perfil en LinkedIn.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Sin embargo, antes de cada evento siempre me asaltaba el mismo pensamiento:
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          "¿Qué van a pensar de mí? ¿De mi cara? ¿De mi cuerpo? ¿De mis proyectos?"
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Ese miedo me acompañó mucho tiempo, incluso fue una de las razones por las que decidí bajar de peso, pero esa historia la contaré otro día.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Con el tiempo entendí que ser social empieza sintiéndote cómodo contigo mismo. Y eso no se logra de un día para otro ni con una simple frase motivacional. Es algo que implica tanto trabajo psicológico como físico.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si no te sientes bien contigo mismo, te recomiendo que primero trabajes en eso. Ve a terapia, mejora tu salud o tu aspecto, pero asegúrate de llegar al evento sintiéndote seguro de quién eres.
      </p>

      <img
        src="/blog/2so.jpeg"
        alt="Eventos de comunidades tech"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Antes del evento: prepárate física y mentalmente
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Vístete cómodo y elegante. No significa llevar esmoquin, pero sí ir presentable. Combina tu ropa, busca ideas en Pinterest, y elige un atuendo que te haga sentir bien.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Come antes de ir. Ir con hambre solo aumenta la incomodidad.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Arréglate lo mejor posible. Báñate, perfúmate, y siéntete bien contigo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Mentalízate. Pregúntate:
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        "¿Quiero ir?"
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        "¿Por qué quiero ir?"
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si las respuestas te convencen, entonces ve con energía y disposición. Ir sin ganas o por obligación es un desperdicio.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Yo he ido a eventos sin motivación y se sienten vacíos. Pero cuando vas con ganas de conocer y conectar, todo cambia.
      </p>

      <img
        src="/blog/3so.jpeg"
        alt="Networking en la industria tech"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Si eres introvertido, ve acompañado (o con valor)
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si es tu primer evento tech y decides ir solo, te mando mi respeto. Yo lo hice y fue un reto enorme, incluso siendo una persona social.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si te da mucha ansiedad, ve con un amigo o grupo, pero no te quedes pegado con ellos todo el tiempo. Aprovecha para conocer más gente, aunque sea un par de personas nuevas.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y algo muy importante: libérate mentalmente antes de ir. Si tienes tareas, proyectos o entregas, termínalos. No vas a disfrutar ni aprovechar nada si tu mente está preocupada por otras cosas.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Todos están igual que tú
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Algo que me ayudó mucho fue entender que muchas personas en los eventos también son introvertidas, nerviosas o nuevas. Y, curiosamente, la mayoría son más experimentadas que tú: saben más sobre despliegues, nube, trabajo o estudios.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Cuando empecé a ir a estos eventos tenía 18 años, y me encontraba rodeado de gente que me superaba en experiencia, dinero y conocimiento. Pero en vez de verlo como algo intimidante, lo vi como una oportunidad: podía aprender de todos.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La mayoría de las personas en el ambiente tech quieren ayudar a los principiantes, porque ellos también empezaron así.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Así que, si eres nuevo, di la verdad:
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        "Soy estudiante."
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        "Soy principiante."
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        "¿Cómo conseguiste tu primer trabajo?"
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        "¿Cómo aprendiste esto?"
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Ser honesto abre más puertas que fingir saberlo todo.
      </p>

      <img
        src="/blog/4so.jpeg"
        alt="Aprendiendo de expertos"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          No vayas con ego
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si crees que ya sabes mucho o te sientes demasiado experimentado, no vayas con ego. En serio. No sirve de nada.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Ve con la disposición de aprender, de escuchar y de conocer gente nueva.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El reto más difícil: la primera conversación
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No hay una palabra mágica que te haga sentir confianza al instante. Pero si te quedas esperando a que alguien más hable, te vas a arrepentir al salir del evento.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Lánzate tú primero.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Di un simple "hola", "¿a qué hora llegaste?" o "¿cómo te llamas?".
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Sí, hay gente que no responde con entusiasmo, pero hay muchísima más que sí. Cuando eso pasa, la conversación fluye. Pregunta de dónde son, a qué se dedican, y si son más experimentados, pídeles consejos.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y sobre todo: escucha.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Escucha lo que te digan, sus historias, sus errores, sus recomendaciones.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Un consejo práctico: no te quedes más de 5 minutos por conversación.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Después de eso, intercambia redes o LinkedIn y pasa con otra persona. Así conocerás a más gente en menos tiempo.
      </p>

      <img
        src="/blog/5so.jpeg"
        alt="Construyendo conexiones"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Después del evento
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Crea un LinkedIn si aún no lo tienes. Agrega a la gente que conociste, comenta sus publicaciones y mantén el contacto.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y recuerda: la gente prefiere ayudar a quien tiene ganas de aprender que a quien llega con actitud de sabelotodo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          En resumen
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si eres introvertido y quieres empezar a conocer gente, empieza conociéndote a ti mismo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Habrá eventos donde no te la pases tan bien, y otros que te fascinarán. Pero todos te dejarán algo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Ármate de valor.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Hazlo porque te apasiona esta industria. Es un mundo increíble, lleno de personas con historias únicas y temas infinitos de los que hablar.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Así que, personas introvertidas en tecnología:
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        👉 Salgan un poco de la computadora.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        👉 Aprendan de la gente allá afuera.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Las experiencias humanas no las puede reemplazar ninguna IA, ni ChatGPT, ni nadie.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Empieza a construir tu propio camino.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Gracias por leer.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO 4: Apps y sistemas de estudio en la UNAM
export const HerramientasProductividadContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Hola, ¿cómo están? Yo estudio Ciencias de la Computación en la UNAM, una carrera del área I (Físico-Matemáticas) que se fundamenta totalmente en las matemáticas.
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y sí, como podrán imaginar, no es nada sencilla. Por eso hoy quiero compartirles cómo estudio, qué métodos uso y qué aplicaciones realmente me ayudan a sobrevivir los exámenes y tareas dentro de la universidad.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Antes de empezar, aclaro que mi sistema de estudio no tiene nada extraordinario ni mágico. No uso apps secretas ni programas que nadie conozca. Lo que utilizo son herramientas simples y efectivas, pero bien aplicadas.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Mi equipo básico es:
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Una libreta
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Una pluma
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Mi laptop
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Un temporizador Pomodoro
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y música relajante
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Ese es mi ambiente de estudio ideal.
      </p>
      
      <img
        src="/blog/1ap.jpeg"
        alt="Mi setup de estudio"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Entendiendo el reto
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Las materias de esta carrera requieren mucha abstracción matemática. No se trata solo de memorizar teoría o recitar libros; se trata de entender conceptos profundamente y saber aplicarlos.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y eso, por experiencia, solo se logra con constancia y paciencia.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Estudiar matemáticas implica equivocarte una y otra vez.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Literalmente: equivocarte, equivocarte, equivocarte… y no parar hasta que entiendas.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Así es como se alcanza la verdadera comprensión.
      </p>

      <img
        src="/blog/2ap.jpeg"
        alt="Trabajando con álgebra lineal"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Cómo enfrento una tarea
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Pongamos un ejemplo: tengo una tarea de Álgebra Lineal.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Primero la leo completa.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Marco los puntos que no entiendo o que me parecen confusos. A veces pasa que literalmente no tengo ni idea de qué están preguntando, y está bien. Lo importante es reconocerlo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Después me apoyo en una guía.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Aquí hago un paréntesis importante, porque tengo amigos en la carrera que se burlan de mí por usar inteligencia artificial.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        (Sí, David, si estás leyendo esto: un fuerte y caluroso abrazo, jaja.)
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Lo que hago es preguntarle a la IA qué conceptos necesito dominar para resolver la tarea. Me los explica, los repaso, y trato de entenderlos a fondo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Uso la inteligencia artificial como mi tutora personal. Es una herramienta a la que le puedo hacer todas las preguntas "tontas" que quiera, sin miedo a ser juzgado, y esa es su gran ventaja.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Cuando ya entendí los conceptos, empiezo a plantear mis soluciones.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Hago un bosquejo de mi idea y se la explico a la IA:
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        "¿Está bien mi razonamiento?"
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        "¿Hay algún error?"
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y la IA me da feedback, recomendaciones y correcciones. Paso a paso, voy entendiendo cómo se resuelve cada ejercicio.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Finalmente llego a la solución concreta y paso a la siguiente pregunta.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Ese es mi flujo normal para las tareas.
      </p>

      <img
        src="/blog/3ap.jpeg"
        alt="Sesiones de estudio nocturnas"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Cómo estudio para un examen
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Prepararse para un examen es diferente. Más que memorizar temas, hay que anticipar qué tipo de preguntas vendrán:
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        ¿Serán teóricas o prácticas?
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        ¿Habrá ejercicios nuevos o ya vistos?
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Con base en eso, hago un plan de estudio.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Primero elaboro una lista de temas y me enfoco en los ejercicios, porque la mayoría de los exámenes en la Facultad de Ciencias son así: prácticos. Lo importante no es solo saber el resultado, sino entender el método para resolverlos.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Entrenando con inteligencia artificial
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Cuando estudio ejercicios, vuelvo a usar la IA, pero esta vez como un entrenador personal digital.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Le pido que resolvamos ejercicios paso a paso. Me explica el método, el razonamiento detrás, y luego me pone a practicar. Le digo:
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        "Ponme otro ejercicio, pero que no sea igual."
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Así repito el mismo método en diferentes variaciones hasta dominarlo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        A esto le llamo entrenar el método mecánico, porque hay pasos que se repiten y que, al automatizarlos, te dan abstracción y confianza.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Cuando ya puedo resolver ejercicios sin ayuda, sé que ese tema está cubierto.
      </p>

      <img
        src="/blog/4ap.jpeg"
        alt="Estudiando con libros de programación"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Cuando estudio teoría
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Para exámenes teóricos uso herramientas más sencillas:
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Notas
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Kahoots o cuestionarios
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Pero la clave es la misma:
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Primero entiende. Luego memoriza.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Mi regla personal es:
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          "Si puedes explicarle un tema a alguien que nunca lo ha visto y logra entenderte, entonces tú ya lo dominas."
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y sí, hazlo lo más simple posible.
      </p>

      <img
        src="/blog/5ap.jpeg"
        alt="Estudiando en la facultad"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Las apps que realmente uso
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Aquí no hay secretos:
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Gemini (la uso como IA principal, además tengo descuento de estudiante 😅)
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Recordatorios de iOS (para organizar tareas, pendientes y entregas)
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Temporizador Pomodoro (para medir mis sesiones de estudio)
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y eso es todo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No uso mil apps ni sistemas complejos. Mi enfoque está en usar bien lo que tengo.
      </p>

      <img
        src="/blog/6ap.jpeg"
        alt=""
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Este blog lo dediqué a cómo estudio materias teóricas o matemáticas puras.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En otro blog les contaré cómo estudio programación y código, porque ahí sí cambia todo el método.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Gracias por leer. Nos vemos en el siguiente blog.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO 5: Desarrollando fciencias.app
export const BitacoraDevContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Suena loco pensar en una red social. Igualmente suena más loco hacerla tú mismo desde cero.
        </span>{" "}
        En este blog les voy a compartir un poco del proceso que estoy llevando para crear F Ciencias, una red social para mi facultad. Más que enfocarme en el código, quiero contarles los retos que me he enfrentado y cómo los iré resolviendo. Mi plan es que esto se convierta en una serie de blogs, acompañada de videos en YouTube y Reels, donde también les muestre el avance. Por ahora no he logrado tanto como quisiera, y como estoy solo en este proyecto, quiero contarles cómo le estoy haciendo.
      </p>
      
      <img
        src="/blog/1fc.png"
        alt="Desarrollo de F Ciencias"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Qué es fciencias?
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Primero, hablemos del origen del proyecto.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En mi facultad (la Facultad de Ciencias de la UNAM), existe un espacio común entre toda la comunidad: un grupo de Facebook. Ahí se publican anuncios, ventas, críticas y debates sobre lo que pasa en la facultad —si hay paro, eventos, avisos, etc.—.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        El problema es que no es un grupo exclusivo. Hay muchísima gente externa y, además, la comunidad está dispersa entre Telegram, WhatsApp, Instagram y más plataformas.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Mi objetivo con esta red social es crear un espacio verdaderamente común y diseñado específicamente para la facultad, donde se resuelva esta fragmentación y la comunidad tenga su propio lugar digital.
      </p>

      <img
        src="/blog/2fc.png"
        alt="La idea detrás del proyecto"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Cómo nació la idea
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La idea surgió mientras aprovechaba los beneficios que GitHub ofrece a estudiantes. Entre ellos, te dan dominios gratuitos, y se me ocurrió buscar la palabra "F" junto con "ciencias". Para mi sorpresa, el dominio estaba disponible… y gratuito. Lo tomé como una señal y dije: "¿Por qué no? Vamos a aventarnos el proyecto".
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Spoiler: no tardé en arrepentirme de esas palabras, porque crear algo así desde cero es cualquier cosa menos trivial.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Tampoco voy a decir que empecé a programar como el creador de Facebook, escribiendo líneas de código desde cero. No. Obviamente me apoyo en Copilot (la inteligencia artificial de GitHub), pero descubrí que no basta con pedirle "hazme una red social". Antes de eso, hay que diseñarla técnicamente.
      </p>

      <img
        src="/blog/3fc.png"
        alt="Diseño técnico del proyecto"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El diseño técnico
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Diseñar técnicamente significa escribir todo el proyecto a detalle: cómo estará organizada la aplicación, qué funcionalidades tendrá, cómo se implementarán, cómo se guardarán los datos, etc.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Todo eso lo redacté en más de 100 páginas en PDF. Para lograrlo, tuve que comunicarle muy bien las ideas a la IA y supervisar todo lo que generaba, porque si no lo hacía, podía producir errores graves.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Esa documentación técnica la pasé a formato Markdown, y después la integré en Copilot. Así, el proceso fue:
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Diseñar toda la estructura técnica.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Pasar esa documentación a un formato legible para Copilot.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Empezar a programar el proyecto real.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El repositorio y el desarrollo
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Después de tener todo el diseño técnico, creé la estructura del repositorio. Pueden verlo directamente en mi sitio web, en la sección de Proyectos, donde está el botón del repositorio oficial de la red social.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si están leyendo esto en octubre de 2025, deben saber que el repositorio cambia constantemente. Así que, si piensan clonarlo, no lo hagan, porque probablemente cambiará demasiado.
      </p>

      <img
        src="/blog/4fc.png"
        alt="Primeras funcionalidades"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La primera funcionalidad
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La primera funcionalidad completa que logré implementar (y que ya funciona) fue la autenticación de usuarios: el registro y el inicio de sesión.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Quiero que solo los alumnos de la Facultad de Ciencias puedan crear cuentas, usando su correo institucional @ciencias.unam.mx. Así, se autentica que realmente pertenecen a la comunidad.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Para hacerlo, implementé una base de datos y un sistema de autenticación por correo electrónico.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No entraré en detalles técnicos aquí (sería muy largo), pero puedo decir que ya funciona: si eres alumno, puedes autenticarte sin problemas, crear tu cuenta, etc.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Por ahora la red social aún no tiene contenido, pero la parte de registro ya está lista.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Cuando lance la versión final, borraré toda la base de datos, así que no hay problema con poner tus datos de prueba.
      </p>

      <img
        src="/blog/5fc.png"
        alt="Enfoque en el usuario"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Enfoque en el usuario
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Otro reto importante ha sido la interfaz de usuario (UI). Quiero que el usuario sienta la plataforma limpia, rápida y cómoda, y eso es algo que lleva tiempo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Crear una red social no solo es código; también requiere creatividad y empatía con el usuario.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Hacer que una app funcione técnicamente es "fácil" con plataformas como Curso o frameworks modernos, pero hacer que la gente realmente la use es otro nivel.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Ahí la inteligencia artificial no puede reemplazar la parte humana y creativa.
      </p>

      <img
        src="/blog/6fcc.png"
        alt="Desarrollo en progreso"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Lo que sigue
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Por ahora, eso es lo que llevo desarrollado de la red social F Ciencias. En las siguientes entradas del blog iré contando cómo avanzo en el desarrollo, y probablemente también lo documente en Reels, TikTok o YouTube.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Tal vez incluso haga un video largo en YouTube titulado "Cómo desarrollé F Ciencias desde cero".
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si eres parte de la Facultad de Ciencias, ¡apóyame por favor en este proyecto!
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Muchas gracias por leer 
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO 6: Freelancing en CDMX
export const VidaFreelancerContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Ser desarrollador web freelance en Ciudad de México suena fácil hasta que te das cuenta de que el reto más grande no es programar, sino conseguir clientes reales. En este blog quiero contarte exactamente cómo lo estoy haciendo yo, qué estrategias uso, qué errores he cometido y cómo me estoy abriendo paso en este mundo freelance desde cero, sin tener una agencia ni una gran red de contactos.
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          1. Entiende el mercado en el que estás
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Primero lo primero: si quieres conseguir clientes en la CDMX, tienes que entender cómo se mueve el mercado aquí. Hay muchísimos desarrolladores, agencias y freelancers, pero también hay muchísimas pequeñas empresas que necesitan presencia en línea y no tienen ni idea de por dónde empezar.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Panaderías, cafeterías, estudios de tatuajes, escuelas, despachos, todos ellos son clientes potenciales. El problema es que la mayoría no sabe buscar "web developer freelance", así que tú tienes que aparecerles en el camino.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Lo que hago es investigar zonas y negocios locales (por ejemplo, los que están en mi colonia o cerca de mi universidad) y anotar quiénes no tienen página web o la tienen abandonada. Suena básico, pero ese paso me ha conseguido más contactos que subir mi portafolio a internet.
      </p>
      
      <img
        src="/blog/1fre.jpeg"
        alt="Trabajando con clientes locales"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          2. Crea un portafolio, aunque estés empezando
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No necesitas tener veinte proyectos para empezar. Si no tienes clientes aún, crea proyectos ficticios. Haz páginas web de ejemplo: un sitio para una cafetería, una landing para un gimnasio, una página de portafolio personal.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Sube esos proyectos a un dominio gratuito o incluso a GitHub Pages. La clave es demostrar que sabes construir y entregar algo funcional y bonito.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En mi caso, lo que hago es tener un portafolio con una sección donde explico qué tecnologías usé y por qué, porque los clientes no entienden qué es React o Next.js, pero sí entienden cuando les dices "tu web cargará más rápido y se verá bien en celulares".
      </p>

      <img
        src="/blog/2fre.jpeg"
        alt="Creando proyectos de portafolio"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          3. Usa las redes sociales, pero con estrategia
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Muchos freelancers creen que por abrir una cuenta de Instagram o LinkedIn ya llegarán los clientes, pero la verdad es que tienes que publicar contenido que le hable a las empresas, no a otros programadores.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Por ejemplo, yo subo mini videos o reels donde explico cosas como "por qué una web lenta te hace perder clientes" o "cuánto cuesta realmente una página web". Eso genera confianza y me ha traído mensajes de negocios que necesitan ayuda.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        También sirve mucho publicar en grupos locales de Facebook (por ejemplo, "Emprendedores CDMX", "Negocios en la Roma", etc.) ofreciendo tus servicios. No pongas un mensaje genérico, di algo como:
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        "Soy desarrollador web freelance y ayudo a negocios de la CDMX a tener páginas que sí les traigan clientes. Si tienes un negocio y tu web está caída o no tienes una, puedo ayudarte."
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Simple, directo y sin sonar como bot.
      </p>

      <img
        src="/blog/3fre.jpeg"
        alt="Estrategias de marketing digital"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          4. Cobra bien, no seas barato
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Lo sé, al principio da miedo cobrar bien porque piensas que nadie te va a contratar. Pero si empiezas cobrando muy barato, es súper difícil subir tus precios después.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Mejor investiga qué cobran otros freelancers en la CDMX. Una página web básica en la ciudad puede ir desde $8,000 hasta $25,000 pesos, dependiendo de lo que incluya. Y no tengas miedo de pedir 50% de anticipo antes de empezar el proyecto.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        También siempre haz contratos, aunque sea un documento sencillo donde pongas qué vas a entregar, cuándo, y cuánto cuesta. Eso te protege de clientes que luego quieren cambiar todo a la mitad del proyecto o que no quieren pagar.
      </p>

      <img
        src="/blog/4fre.jpeg"
        alt="Construyendo confianza con clientes"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          5. Gana confianza hablando como persona, no como robot
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La mayoría de mis clientes potenciales llegan nerviosos porque no entienden de tecnología. Así que trato de hablarles en su idioma. No digo "te haré una landing con API REST y Next.js", digo "te haré una página que se vea bien en celulares y se cargue rápido".
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Además, algo que me ha funcionado muchísimo es mostrar avances por etapas. Por ejemplo, después de dos días les mando un prototipo visual, no código. Eso les hace sentir que están viendo progreso real.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Cuando confían en ti, pagan más fácil y te recomiendan. Cada cliente feliz puede traerte tres nuevos clientes.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          6. Pide testimonios siempre
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Al terminar cada proyecto, pide una reseña o testimonio. No es opcional. Un testimonio te puede abrir las puertas a trabajos más grandes.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Yo tengo testimonios en LinkedIn, en mi portafolio y hasta capturas de WhatsApp donde los clientes me dicen que quedaron contentos. Eso da mucha tranquilidad a clientes nuevos.
      </p>

      <img
        src="/blog/5fre.jpeg"
        alt="Crecimiento del negocio freelance"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          7. Ten paciencia, pero mantente activo
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Conseguir tus primeros clientes freelance no pasa en una semana. A mí me tomó meses tener los primeros tres, pero una vez que entregas bien, los demás llegan por recomendación.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        El secreto es seguir publicando, seguir aprendiendo y sobre todo no compararte con otros developers que ya tienen cinco años en el mercado.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Ser freelance en Ciudad de México no es imposible, pero requiere estrategia, paciencia y sobre todo constancia. Tienes que entender que cada proyecto que haces es una inversión en tu reputación, no solo dinero rápido.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Así que si estás empezando como web developer, te dejo mi consejo final: haz tu portafolio, ofrece tu trabajo, cobra justo y nunca dejes de aprender.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO 7: Hackathon OpenAI
export const HackathonOpenAIContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          OK, lo primero es que yo no pensaba que me iban a aceptar. De hecho, descubrí el Hackathon por LinkedIn: vi de qué trataba, quién lo organizaba y me emocionó porque soy muy fanático de la compañía. Así que decidí registrarme.
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Para que te aceptaran, tenías que enviar tu LinkedIn, tu GitHub y tus redes sociales, porque un comité de selección investigaba tu perfil. Aun así, lo hice sin problema, aunque sinceramente pensé que ni me iban a aceptar.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Pero unos días después me llega un correo: había conseguido un lugar. La verdad es que estoy muy contento, porque es algo muy importante para mí. Es mi primer hackathon, mi primera competencia, y quiero dar lo mejor de mí.
      </p>
      
      <img
        src="/blog/POSTER.jpeg"
        alt="Preparándome para el hackathon"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          1. El proyecto: una inteligencia artificial que se mejora sola
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Les cuento un poco de lo que estoy haciendo. Vamos a crear un sistema de inteligencia artificial que se mejora solito, con un sistema de auto-mejora.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Este tipo de arquitectura fue descubierta hace muy poco —a inicios de octubre— por investigadores de distintas universidades. Y lo interesante es que ya quieren que experimentemos con eso en la competencia.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Para hacerlo, usaremos un framework especial y tendremos acceso directo a la API de la compañía.
      </p>

      <img
        src="/blog/PlanOpenai.jpeg"
        alt="Trabajando en el proyecto"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          2. La organización del equipo
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En mi equipo nos hemos estado organizando muy bien. Yo tengo las bases teóricas claras, ya definimos qué tipo de proyecto vamos a hacer y cómo estará estructurado.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Solo tendremos 13 horas en total para la competencia, así que el tiempo es clave.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si quieren verlo con una analogía: nosotros tenemos que llegar con las llantas, la estructura y el motor del coche listos, y durante la competencia solo conectamos los cables, sin encender el coche todavía.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Esa es más o menos la lógica del hackathon: llegar listos, bien coordinados y con la parte técnica clara antes de entrar al reloj.
      </p>

      <img
        src="/blog/diagramaop.png"
        alt="Colaboración en equipo"
        className="w-full h-96 object-contain rounded-lg mb-8 mx-auto bg-neutral-100 dark:bg-neutral-800 p-8"
      />
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          3. La competencia
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Estamos compitiendo con 40 equipos en total, y honestamente esperamos ganar. La comunicación con mi equipo ha sido excelente; cada día tenemos entregables para llegar bien preparados y poder rendir lo mejor posible.
      </p>

      <img
        src="/blog/Paper1.png"
        alt="Presentación final"
        className="w-full h-96 object-contain rounded-lg mb-8 mx-auto bg-neutral-100 dark:bg-neutral-800 p-8"
      />
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          4. Lo que viene
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        El próximo domingo les estaré contando cómo me fue, qué aprendí y qué cosas interesantes se vivieron durante la competencia.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        También estaré grabando contenido y compartiendo fotos del evento para que puedan ver el proceso desde dentro.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Muchas gracias por leer y acompañarme en esta experiencia que para mí significa muchísimo.
      </p>

      <img
        src="/blog/cicloaut.png"
        alt="Conexiones y networking"
        className="w-full h-96 object-contain rounded-lg mb-8 mx-auto bg-neutral-100 dark:bg-neutral-800 p-8"
      />

      <img
        src="/blog/logicaauto.png"
        alt="Experiencia final del hackathon"
        className="w-full h-96 object-contain rounded-lg mb-8 mx-auto bg-neutral-100 dark:bg-neutral-800 p-8"
      />
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO 8: Aprendiendo TypeScript - Mi experiencia
export const AprendiendoTypeScriptContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          TypeScript cambió completamente mi forma de programar. Hace un año ni siquiera sabía qué era, y ahora no puedo imaginar hacer un proyecto sin él. En este blog te voy a contar mi experiencia aprendiendo TypeScript, los errores que cometí, y por qué creo que todos los desarrolladores JavaScript deberían darle una oportunidad.
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Qué es TypeScript y por qué debería importarte?
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Para los que no lo saben, TypeScript es básicamente JavaScript pero con tipos. Eso significa que puedes decirle a tu código qué tipo de datos esperas en cada variable, función o parámetro. Suena simple, pero cambia todo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Antes de TypeScript, me pasaba horas debuggeando errores tontos como pasar un string donde debía ir un número, o llamar una función con los parámetros en el orden incorrecto. TypeScript te avisa de esos errores antes de que ejecutes el código.
      </p>
      
      <img
        src="/blog/mydesk.jpeg"
        alt="Código TypeScript en VS Code"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Mis primeros días con TypeScript (spoiler: fueron frustrantes)
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Al principio TypeScript me frustraba muchísimo. Estaba acostumbrado a la libertad de JavaScript, donde podías hacer lo que quisieras sin que el editor te molestara con errores rojos por todos lados.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Recuerdo mi primer proyecto en TypeScript: una simple API con Express. Lo que normalmente me tomaba dos horas, me tomó seis porque no entendía los tipos, las interfaces, ni cómo tipar correctamente las peticiones HTTP.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Había momentos donde quería rendirme y volver a JavaScript puro. Pero decidí persistir, y fue la mejor decisión que pude tomar.
      </p>

      <img
        src="/blog/Setup1AM.jpeg"
        alt="Aprendiendo TypeScript desde cero"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Lo que realmente me ayudó a entenderlo
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        1. Empezar con proyectos pequeños: No intentes aprender TypeScript refactorizando un proyecto enorme. Empieza con algo simple, como una calculadora o una to-do list.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        2. Entender las interfaces y types: Al principio no entendía la diferencia. Luego descubrí que las interfaces son perfectas para definir la estructura de objetos, y los types son más flexibles para uniones y otras cosas.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        3. Usar el autocompletado: Una vez que defines bien tus tipos, el autocompletado de VS Code se vuelve tu mejor amigo. Ya no tienes que recordar qué propiedades tiene un objeto, el editor te las muestra.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        4. Leer código de otros: Ver cómo otros developers tipan su código me ayudó un montón. Los repositorios de GitHub con TypeScript son oro puro para aprender.
      </p>

      <img
        src="/blog/LibroJulia.jpeg"
        alt="Beneficios de usar TypeScript"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Por qué ahora no puedo vivir sin TypeScript
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Después de pasar la curva de aprendizaje, TypeScript se convirtió en una herramienta indispensable para mí. Ahora escribo menos bugs, mi código es más limpio, y cuando vuelvo a un proyecto después de meses, entiendo qué hace cada función solo viendo los tipos.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Además, cuando trabajas en equipo, TypeScript es un salvador. Los demás desarrolladores saben exactamente qué esperar de tu código sin tener que leer toda la implementación.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        También me ha ayudado muchísimo en entrevistas técnicas. Saber TypeScript te diferencia de otros candidatos y demuestra que te preocupas por escribir código de calidad.
      </p>

      <img
        src="/blog/portadaredsocial.jpeg"
        alt="Proyecto en TypeScript"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Consejos si estás empezando con TypeScript
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        - No uses "any" en todo: Sé que es tentador, pero estás perdiendo todo el beneficio de TypeScript. Si no sabes qué tipo usar, investiga en lugar de poner "any".
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        - Aprende los utility types: TypeScript trae tipos como Partial, Pick, Omit que te facilitan la vida. Úsalos.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        - Configura bien tu tsconfig.json: Al principio parece intimidante, pero configurar bien las opciones de compilación te ahorra muchos dolores de cabeza.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        - Ten paciencia: La curva de aprendizaje es real, pero vale totalmente la pena.
      </p>

      <img
        src="/blog/primerafotounam.jpeg"
        alt="El futuro con TypeScript"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Conclusión
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si eres desarrollador JavaScript y todavía no has probado TypeScript, te invito a que lo hagas. Sí, al principio vas a batallar. Sí, vas a querer dejarlo. Pero créeme que después de superarlo, no vas a querer volver atrás.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        TypeScript no es solo agregar tipos por agregar. Es una forma de pensar diferente, de escribir código más robusto y mantenible. Y en un mundo donde los proyectos crecen cada vez más, eso es invaluable.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Gracias por leer. Si tienes preguntas sobre TypeScript o quieres que haga un tutorial más específico, mándame mensaje. ¡Nos vemos en el siguiente blog!
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO NUEVO: Experiencia en el Hackathon OpenAI x Kavak 2025
export const ExperienciaHackathonOpenAIKavak2025Content = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Bien, para empezar, para este hackathon me preparé durante seis días completos. Estuve coordinándome con mi equipo y organizando el proyecto que íbamos a desarrollar.
        </span>{" "}
        Si quieren ver el proyecto completo, pueden ir al apartado de proyectos —ahí dejé el link directo al repositorio en GitHub—.
        Y si prefieren ver la experiencia en video, ya subí todo el proceso completo a mi canal de YouTube, donde muestro cómo vivimos cada momento del evento.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Ahora sí, les cuento cómo fue todo desde mi perspectiva.
      </p>

      <img
        src="/blog/regaloshack.jpeg"
        alt="Regalos del Hackathon OpenAI x Kavak"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La llegada y el inicio del reto
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Llegué súper temprano, con toda la emoción. Nos recibieron con una sudadera y una libreta de OpenAI, un detalle que me encantó.
        Antes de arrancar el hackathon, nos dieron una charla de bienvenida y después una persona de OpenAI nos habló sobre GPT-5, lo cual me pareció impresionante.
      </p>

      <img
        src="/blog/gafetehack.jpeg"
        alt="Gafete del Hackathon"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        A las 9:00 a.m. comenzó oficialmente el reto.
        Mi equipo y yo ya teníamos planeado casi todo: habíamos diseñado el sistema, hecho pseudocódigo y preparado archivos base.
        Todo iba conforme a lo planeado hasta que un empleado de Kavak se acercó a darnos una recomendación técnica que nos hizo replantear nuestra estrategia.
      </p>

      <img
        src="/blog/oficinahack.jpeg"
        alt="Oficinas de Kavak durante el Hackathon"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El cambio de estrategia
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Originalmente íbamos a usar una estructura de tres nodos, porque nos parecía más sencilla de implementar en el tiempo que teníamos.
        Pero después de analizar la sugerencia, decidimos arriesgarnos y cambiar a una estructura de seis lados.
        Eso significaba más trabajo y más complejidad, pero también más potencial.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Fue estresante.
        El reloj corría y cada línea de código contaba, pero poco a poco fuimos avanzando hasta lograr una demo funcional e interactiva, que fue lo que más me emocionó de todo el proceso.
      </p>

      <img
        src="/blog/equipohack.jpeg"
        alt="Mi equipo durante el Hackathon"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La presentación
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Para la presentación usamos Claude, que nos ayudó a generar una presentación en LaTeX de 40 hojas (sí, 40 😅).
        El problema fue que los jueces nos dieron solo 8 minutos para mostrar nuestro proyecto, así que no alcanzamos a cubrir todo.
        Aun así, nuestra demo funcionó perfectamente y eso fue lo más importante para mí.
      </p>

      <img
        src="/blog/selfiehack.jpeg"
        alt="Selfie en el Hackathon"
        className="w-full h-96 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El cierre y las conexiones
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Después de la presentación vinieron los resultados.
        No quedamos en el podio, pero honestamente me sentí satisfecho.
        Conocí a muchísima gente increíble, equipos muy preparados, y me quedo con la experiencia, las conexiones y lo que aprendí durante esas 13 horas intensas.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Sinceramente, fue una de las mejores experiencias que he tenido.
        Mi equipo fue lo máximo y me llevo una enorme lección: prepararte, adaptarte y mantenerte tranquilo es la clave para disfrutar un hackathon.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si quieren ver cómo se vivió todo minuto a minuto, pueden visitar mi canal de YouTube: <span className="font-bold text-[#FF8200]">emicarrada</span>, donde subí el video completo.
        Y estén atentos, porque el próximo domingo publicaré una nueva entrada en el blog 👀
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Gracias por leer 🙌
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO: Inicio de 2026
export const InicioDe2026Content = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Inicio de 2026
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Hola, ¿cómo están?
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Hace tiempo que no subía nada al blog. Han pasado varias cosas que no había contado por aquí. No sé si alguien lea esto —ojalá que sí— pero bueno, aquí va.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Cómo inició 2026?
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La verdad, con varias cosas moviéndose al mismo tiempo. Desde diciembre estuve trabajando en el sitio web de chiikö design, y por fin este año lo lancé. Me esmeré bastante en hacerlo, así que si pueden darse una vuelta, lo agradecería mucho:<br />
        👉 <span className="font-bold text-[#FF8200]">chiiko.design</span>
      </p>

      <img
        src="/blog/meetup2026-1.jpg"
        alt="Evento inicio 2026"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En estas vacaciones de invierno estuve prácticamente en dos modos: la mitad del tiempo enfermo, y la otra mitad trabajando.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        También hubo cambios importantes. Ahora estoy trabajando solo. Ya no estoy con el socio que tenía, y aunque al inicio era raro, me di cuenta de que funciono mejor así. Hay muchas cosas que quería hacer y que simplemente no podía, y ahora todo fluye más.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y algo interesante: <span className="font-bold text-neutral-700 dark:text-neutral-200">sí vale la pena esmerarte en un buen sitio web.</span> Se nota. Especialmente cuando haces networking o te presentas con otras personas.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Últimamente me he estado cuestionando mucho cuál es mi rumbo al salir de la carrera. Antes lo tenía muy claro: entrar a Big Tech, "ser feliz" y listo. Pero la vida no es tan simple.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Ahora que le he dedicado tiempo a mi estudio creativo, me he dado cuenta de algo importante:<br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">me apasiona.</span><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">Me hace sentir vivo.</span><br />
        <span className="font-bold text-neutral-700 dark:text-neutral-200">Siento que mi trabajo vale lo que debería valer.</span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y eso cambia todo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No tengo completamente claro qué voy a hacer, pero sí tengo algo decidido: <span className="font-bold text-neutral-700 dark:text-neutral-200">si esto llega a ser suficiente para mantenerme, lo voy a seguir.</span>
      </p>

      <img
        src="/blog/credencialpint.jpg"
        alt="Credencial evento"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        También he estado haciendo mucha introspección. No soy perfecto. Tengo momentos altos y momentos bajos, y la verdad está bien. Es parte de. Pero sí siento que tengo que trabajar más en esa parte emocional.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Por otro lado… subí de peso.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Me pasa algo curioso: cuando me va bien en el trabajo, descuido mi físico. Dejé de correr, dejé de hacer ejercicio. Se me venció el gimnasio, no renové, y simplemente no me han dado ganas. No lo justifico, pero es algo que tengo que retomar.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Otra cosa: tengo pendiente un video de una visita que grabé. No lo he editado ni estoy cerca de hacerlo. No por falta de tiempo… por flojera. Editar es una friega y me cuesta empezar. Pero lo voy a sacar. Eventualmente.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        También pausé la investigación de inteligencia artificial. Por hueva, siendo honesto. Perdón, Juan Gómez, si estás leyendo esto.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Han sido muchas cosas en la cabeza al mismo tiempo. Pero justo por eso se siente bien volver a escribir aquí. Este espacio es importante para mí porque puedo expresarme libremente y contar lo que realmente está pasando, sin filtros.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Esta es la primera entrada de 2026.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No quiero alargarme demasiado porque vienen más. Si estás leyendo esto, gracias por quedarte.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Nos seguimos leyendo.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO: El nuevo inicio de mi estudio creativo
export const NuevoInicioChiikoDesignContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El nuevo inicio de mi estudio creativo: chiikö design
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Quiero contarles cómo va esta nueva etapa con chiikö design.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Para empezar: me ha ido bien. Conseguí mi primer cliente y curiosamente se dedica a algo muy similar a lo mío. Más adelante les contaré más sobre eso, pero por ahora solo puedo decir que me emociona bastante.
      </p>

      <img
        src="/blog/cena2026-1.jpg"
        alt="Nuevo inicio de chiikö design"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Lancé el sitio en enero y desde el inicio tuve algo claro: no iba a ir a negocios locales a ofrecer páginas web baratas.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No porque esté mal, sino porque no es el punto en el que estoy. Siento que mi nivel actual de diseño web no vale cinco pesos. Vale más. Y quiero tratarlo como tal.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Porque también entendí algo importante: si empiezo cobrando poco, haciendo proyectos sin exigencia, eventualmente me voy a aburrir. Voy a dejar de esforzarme. Y eso mata el crecimiento.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En cambio, si apunto más alto: me obligo a hacer mejores diseños, a pensar mejor cada detalle y a seguir subiendo mi nivel.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y eso ya está dando resultados.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En uno o dos meses de existencia, ya logré facturar más de lo que hacía en mi emprendimiento anterior. Eso, sinceramente, no me lo esperaba tan rápido.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        También estoy próximo a patrocinar un evento de computación. Todavía no puedo decir mucho, pero es algo importante y me emociona bastante.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y hay otra idea que me ronda la cabeza: hacer mercancía oficial. Tal vez para mis amigos cercanos y mi familia primero. No es algo urgente, pero me gusta pensar en ello.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Más allá de números o cosas externas, hubo un cambio importante en mi mentalidad.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Antes hacía sitios web por entregar. Cumplía y ya.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Ahora entiendo que un sitio web no solo muestra qué haces. Comunica el nivel en el que operas.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Cuando hablas con clientes de alto nivel, tu sitio tiene que estar a la altura de esa conversación. Porque dice todo de ti: si tienes clientes o no, si te importa tu imagen, si sabes lo que estás haciendo, si estás jugando en serio o no.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        He visto sitios de otros diseñadores web que, siendo honestos, están por debajo de lo que yo hago. Y no lo digo desde arrogancia, sino desde una pregunta real: ¿no se lo toman en serio?, ¿les da flojera?, ¿o simplemente no lo ven como algo estratégico?
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Porque para mí dejó de ser solo hacer páginas.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Me estoy convirtiendo más en alguien que piensa, estructura y comunica, más estratega que obrero del código. Y eso es lo que más me gusta de chiikö design.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Antes hacía de todo y terminaba frustrado. Ahora sigo haciendo mucho, pero en otro nivel: con mejores clientes, mejor pagado y con más sentido.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Los siguientes meses quiero seguir moviéndome: ir a eventos de networking, fortalecer relaciones y seguir entrando más en el entorno tecnológico.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Porque al final, eso es lo que me apasiona: estar cerca de lo que se está construyendo hoy y de lo que se va a construir mañana.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Gracias por leer.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO: ¿Y si no quiero ser influencer?
export const YSiNoQuieroSerInfluencerContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Y si no quiero ser influencer?
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Hay algo que también he estado pensando últimamente.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Tal vez... no soy un influencer. O al menos, no quiero serlo.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        El año pasado, desde verano, me esforcé mucho en construir mi marca personal. Subí contenido, intenté ser constante, traté de entender cómo funciona todo ese mundo. Pero con el tiempo me di cuenta de algo: no sé si estoy hecho para eso.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No quiero ser un "Juanpa Zurita" o algo por el estilo. Y no lo digo desde arrogancia, lo digo desde lo que realmente siento.
      </p>

      <img
        src="/blog/pizarron2026-2.jpg"
        alt="Reflexión sobre redes y autenticidad"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Incluso pagué la verificación de Instagram y sinceramente fue una mala experiencia. No te deja cambiar la foto de perfil como quieres, el servicio fue pésimo y nunca me resolvieron varios problemas. Y al final, ¿para qué? Para que tu cara esté aún más expuesta.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Eso me hizo cuestionarme más.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Subí un video random de un hámster y llegó a 11,000 vistas. No sé cómo. Está padre, sí, pero también me hizo pensar: ¿de verdad quiero una vida donde tengo que grabar todo, exponer todo y estar constantemente "activo" para mantener atención?
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No estoy seguro.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Porque hay algo que no se dice mucho: la fama no es natural.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Existe esta idea de que ser famoso es el objetivo máximo, pero en realidad no garantiza nada. Hay estudios que dicen que el cerebro humano ni siquiera está preparado para procesar la fama. Estamos hechos para lidiar con pérdidas fuertes, sí, pero no con miles o millones de personas observándote, juzgándote, opinando de ti.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Es raro.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y sí, ya en la facultad, que de por sí puede ser un ambiente hostil, tengo gente que critica, que observa, que opina. No me afecta tanto, pero escalar eso a miles de personas... no sé si lo quiero.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Prefiero otra cosa.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Me gusta la vida que tengo: ser universitario, trabajar en mis proyectos, construir algo propio y sentirme bien con eso. Me gusta ser alguien más de nicho. Me gusta cuando alguien se acerca y me dice que le gustó algo que hice o que le inspiró un proyecto. Eso sí me llena.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No necesito millones.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y no estoy seguro de querer pagar el precio de lo que implica tenerlos. Porque si realmente quisiera, podría intentarlo en serio: subir cinco videos al día, optimizar contenido, jugar el juego. Pero no es lo que quiero.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Además, siendo honestos, hoy en día mucha gente sigue cosas bastante cuestionables: peleas absurdas, contenido vacío, incluso figuras que representan cosas bastante oscuras y eso se normaliza. No es el tipo de atención que me interesa atraer.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Prefiero tener a los míos. Pasármela bien. Construir algo con sentido.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Me gustaría más que mi estudio creativo se vuelva reconocido antes que yo. Que el foco esté en lo que construyo, no en mi cara.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y también hay algo más: cuando eres "famoso", conocer gente pierde cierta magia. Ya saben quién eres. Ya hay una idea previa. Se pierde un poco lo real. Incluso en relaciones personales.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        A mí me interesa lo contrario.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Lo auténtico. Lo que no está filtrado por el estatus.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Tal vez en el futuro cambie de opinión. No lo sé. Pero hoy, sinceramente, prefiero este camino.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Gracias por leer.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO: ¿Por qué ya no seguí con fciencias.app?
export const PorQueYaNoSeguiFcienciasAppContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ¿Por qué ya no seguí con fciencias.app?
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La respuesta corta: por el ambiente en la facultad.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La respuesta larga: por flojera... y porque me di cuenta de que, en realidad, era una mala idea.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si lo veo con honestidad, la razón por la que quise crear esa red social no era tan pura como pensaba. Tal vez era por aprobación. Tal vez por ego. Tal vez porque quería construir algo grande. O tal vez sí había una parte genuina de querer resolver un problema.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Pero con el tiempo entendí algo incómodo: no era el proyecto correcto para mí.
      </p>

      <img
        src="/blog/5ru.jpeg"
        alt="Reflexión sobre el ambiente en la facultad"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y no porque no pudiera funcionar. De hecho, creo que sí hubiera tenido tracción. Incluso desde la idea ya llamaba la atención.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        El problema era otro.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Yo quiero mucho a mi facultad. A mi carrera. A mis amigos.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Pero siendo completamente sincero: el ambiente general puede ser muy tóxico.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Estoy en el grupo de Facebook de la facultad con un perfil falso, porque no me interesa exponerme ahí, y aun así he recibido bastante hate solo por comentar cosas normales.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Eso me hizo pensar.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si con una cuenta anónima ya hay ese nivel de reacción, ¿qué pasaría si lanzo una red social donde soy el responsable directo?
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Porque una red social no es solo código.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Es: lidiar con odio, lidiar con bots, lidiar con usuarios enojados, lidiar con críticas constantes, y muchas veces, críticas hacia ti como persona.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y eso desgasta. Mucho más de lo que parece.
      </p>

      <img
        src="/blog/5fc.png"
        alt="Reflexión sobre exposición y redes sociales"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En verano investigué bastante sobre lo que implica lanzar una plataforma así. No solo a nivel técnico, sino social. Y entendí algo muy claro: si quieres paz, tienes que cuidar tu nivel de exposición.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y este proyecto iba en dirección contraria a eso.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Porque aunque pudiera ocultar mi identidad, al final iba a estar ahí, detrás. Y en algún punto eso se filtra, se sabe o simplemente se siente.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Además, hay algo que me terminó de hacer ruido.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        En el grupo de Facebook, mucha gente comenta desde el anonimato cosas que jamás dirían en persona: comentarios ofensivos, ataques gratuitos, opiniones cargadas de odio.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y eso no es el tipo de entorno que quiero construir. Ni en internet, ni en mi vida.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Entonces empecé a hacerme una pregunta más honesta: ¿de verdad quiero crear algo que probablemente se convierta en eso?
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        La respuesta fue no.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Porque incluso si funcionaba, incluso si crecía, sabía que me iba a terminar sintiendo mal por haberlo creado.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y cuando un proyecto te genera eso desde antes de lanzarlo, es señal suficiente.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        También hay algo personal.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Si en un entorno pequeño ya recibo críticas de personas que ni conozco, en uno más grande probablemente sería peor.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y la facultad, al final, es un lugar importante para mí: es donde estudio, donde aprendo, donde también encuentro paz.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No quiero convertir ese espacio en algo incómodo por un proyecto.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Así que tomé la decisión. fciencias.app no va a salir.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Probablemente borre todo rastro con el tiempo. No por miedo, sino porque ya no me representa.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Cuando algo deja de hacer sentido para mí, simplemente lo suelto.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Quería contar esto porque ya le había hablado del proyecto a varias personas. Y si estás leyendo esto, esta es la razón real.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Gracias por leer.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO: La última entrada del blog
export const LaUltimaEntradaDelBlogContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La última entrada del blog
        </span>
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y pues bueno... en esta entrada me despido. No del blog para siempre, no se emocionen, pero sí de este momento.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No soy la persona más constante escribiendo aquí, y lo saben. Pero cuando vuelvo, es porque realmente lo necesito. Y por eso este espacio sigue siendo importante para mí. Si no lo cuido, se muere. Y no quiero que eso pase.
      </p>

      <img
        src="/blog/4ru.jpeg"
        alt="Despedida y reflexión personal"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Quiero aprovechar para decir algo que casi no digo: a las personas que me apoyan, muchas de ellas mis amigos, que han estado conmigo, que conocen mis problemas, mis procesos, mis subidas y bajadas... gracias. De verdad.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        A las personas que me leen, que me escriben, que me preguntan cosas, que de alguna forma admiran lo que hago... también gracias.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No lo digo por compromiso. Lo digo porque es real. Construir algo por tu cuenta y ver que hay gente que lo aprecia, que lo disfruta o que se inspira con eso... es de las cosas más reconfortantes que existen.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Porque siendo sincero, muchas veces este camino es solitario. Cuando estoy construyendo proyectos, haciendo sitios web, pensando ideas... no hay nadie alrededor.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        No tengo a alguien viviendo conmigo, no tengo una rutina compartida con alguien más en ese sentido. Soy yo contra lo que quiero construir.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Y eso tiene dos caras: por un lado, libertad total. Por el otro, una exigencia que a veces pesa demasiado. Porque nadie me presiona... más que yo mismo. Y a veces eso rompe.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Pero también están esos momentos donde alguien llega y te dice algo simple: que le gustó lo que hiciste, que le ayudó, que le inspiró. Y eso... te levanta. Te recuerda por qué empezaste.
      </p>

      <img
        src="/blog/findesem4.jpeg"
        alt="Gratitud y cierre de etapa"
        className="w-full h-auto rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        También intento mantener los pies en la tierra. No soy perfecto. Hay días en los que no estoy en el mood, días en los que estoy cansado, días en los que simplemente no quiero hacer nada. Y está bien.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Nunca he sido alguien ideal, ni quiero serlo. Solo soy alguien intentando construir algo con lo que cree.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Gracias a los que están. A los que apoyan. A los que recomiendan. Y a los que, poco a poco, se van sumando.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Se vienen cosas grandes. Proyectos importantes. Y espero que quienes están hoy... también estén en esa etapa.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        Por ahora, me despido. Nos leemos cuando vuelva a tener algo que decir. Cuando vuelva a necesitar escribir.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Cuídense mucho. Y gracias por estar ahí.
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