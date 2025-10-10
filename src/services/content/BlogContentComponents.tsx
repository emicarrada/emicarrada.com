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
        src="/public/blog/1ap.jpeg"
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
        src="/public/blog/2ap.jpeg"
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
        src="/public/blog/3ap.jpeg"
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
        src="/public/blog/4ap.jpeg"
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
        src="/public/blog/5ap.jpeg"
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
        src="/public/blog/6ap.jpeg"
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
        src="/public/blog/1fc.png"
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
        src="/public/blog/2fc.png"
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
        src="/public/blog/3fc.png"
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
        src="/public/blog/4fc.png"
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
        src="/public/blog/5fc.png"
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
        src="/public/blog/6fcc.png"
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
        src="/public/blog/1fre.jpeg"
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
        src="/public/blog/2fre.jpeg"
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
        src="/public/blog/3fre.jpeg"
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
        src="/public/blog/4fre.jpeg"
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
        src="/public/blog/5fre.jpeg"
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

// Mantener componentes legacy para compatibilidad
export const ReactArticleContent = () => <DummyContent />;
export const AITechArticleContent = () => <DummyContent />;
export const EntrepreneurshipArticleContent = () => <DummyContent />;
export const TutorialArticleContent = () => <DummyContent />;
export const ArchitectureArticleContent = () => <DummyContent />;
export const StartupsArticleContent = () => <DummyContent />;