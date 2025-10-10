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
        src="/blog/unamportada.jpg"
        alt="Campus de la UNAM"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La UNAM tiene muchos bachilleratos, pero yo quería uno en especial: el CCH Sur, que pedía un mínimo de 99 aciertos. Pongámonos aún más en contexto: estábamos en plena pandemia, y mi familia no tenía dinero para pagarme un curso privado de ingreso. Esos cursos normalmente cuestan más de $20,000 pesos, una cantidad que mi familia no podía cubrir.
        </span>{" "}
        Entonces decidí estudiar autodidacta, con ayuda de YouTube, específicamente con un canal llamado Iknium. Pero ese no fue mi único recurso. La propia universidad me proporcionó una guía de estudio con los temas oficiales y un examen de simulación. (Esto es importante: recuerden los exámenes de simulación).
      </p>

      <img
        src="/blog/PizarronLineal.jpeg"
        alt="Estudiando matemáticas"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Esta historia no se trata solo de que estudié, hice el examen y pasé. Lo viví más como un proceso de desarrollo personal, porque literalmente fue el primer reto en el que mis decisiones podían cambiar mi futuro. Al principio, no me lo tomaba tan en serio. No estudiaba tanto, me lo tomaba como un hobby.
        </span>{" "}
        Sentía que tenía demasiado tiempo y que no era necesario matarme estudiando desde temprano. Así que durante varios meses no avancé mucho. También tenía otra guía que conseguí en internet, pero resultó inservible: contenía temas de años pasados, no del temario oficial.
      </p>

      <img
        src="/blog/Setup1AM.jpeg"
        alt="Setup de estudio nocturno"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El canal Iknium ofrecía exámenes de simulación en línea para practicar. Un día decidí resolver uno de esos exámenes y terminé con una pésima calificación: de 128 aciertos, solo obtuve 50. Eso me desanimó completamente. Me sentí devastado, aunque sabía que en el fondo no había estudiado bien.
        </span>{" "}
        Ese fue mi momento de introspección, el punto donde decidí analizar: ¿cómo estoy estudiando?, ¿qué estoy haciendo mal? A partir de ahí, con el poco esfuerzo que ya había tenido, decidí empezar desde cero. Sentía que no dominaba todos los temas, y dominarlo todo me haría sentir más seguro para el examen.
      </p>

      <img
        src="/blog/LibroJulia.jpeg"
        alt="Materiales de estudio"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Entonces lo que hice fue ver todos los videos del canal Iknium, siguiendo el temario oficial de la guía de la UNAM. A veces me aburría o me hartaba, pero siempre escuchaba con atención. Además, practicaba constantemente con ejercicios y preguntas.
        </span>{" "}
        Al final, en mi último examen de simulación, obtuve 110 aciertos de 128. Ya eran las últimas semanas antes del examen real, y sentí que lo tenía todo… pero me faltaba algo: lo mental. Porque si no tenía resiliencia ni nervios de acero, por más que hubiera estudiado, no iba a pasar el examen.
      </p>

      <img
        src="/blog/Pasillo.jpeg"
        alt="Pasillos de la UNAM"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Recuerdo perfectamente el día del examen. Un día antes no estudié nada, porque ya había repasado todo. Confiaba en mi proceso y en que todo saldría bien. Dormí muy bien y me levanté a las 5 de la mañana, porque el examen era a las 7.
        </span>{" "}
        Mientras me arreglaba y desayunaba, estaba librando una batalla interna de motivación. Llegué a la sede, me pasaron al aula y traté de platicar con alguien, pero estaba demasiado nervioso. Me senté, vi el examen y sentí una enorme satisfacción: casi todas las preguntas me las sabía.
      </p>

      <img
        src="/blog/portadayo.jpeg"
        alt="Celebrando el ingreso"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          No contesté en orden. Empecé por la materia más fácil y dejé matemáticas para el final. Terminé siendo el último en salir del aula, porque no quería desperdiciar ni un minuto. Cuando faltaban cinco minutos, ya había terminado, pero decidí quedarme para relajarme y repetirme mentalmente: "Pasará lo que tenga que pasar."
        </span>{" "}
        Pasaron meses hasta que dieron los resultados. Un día de julio anunciaron la fecha, y recuerdo que estaba totalmente nervioso, angustiado y preocupado. Cuando por fin los vi, decía mi nombre y la frase mágica: "Aspirante seleccionado." Con mi primera opción y 100 aciertos de 128.
      </p>

      <img
        src="/blog/mydesk.jpeg"
        alt="Mi espacio de estudio actual"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          No saben la felicidad que sentí. Lloré. Sí, lloré con los resultados. Me sentí profundamente orgulloso de mí mismo. Fue una batalla mental más que académica: por primera vez me probé a mí mismo y supe quién era de verdad.
        </span>{" "}
        Me dijeron que no iba a poder. Me dijeron que estaba loco. Pero fue mi miedo a no pasar lo que me hizo estudiar más… y lo que me llevó a la mejor universidad de Latinoamérica solo estudiando con YouTube y disciplina. Moraleja: aunque no te compren un curso caro ni tengas las mejores herramientas, si te preparas mentalmente y tienes lo necesario, puedes lograrlo. Después de eso, actualmente estudio en la UNAM, en la carrera de Ciencias de la Computación.
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
          Ok, les voy a contar como es realmente un día normal estudiando Computer Science en la UNAM, porque la verdad no es como se ve en las películas gringas. Mi día empieza a las 5:30 AM, no porque sea madrugador, sino porque vivir lejos de CU es una realidad que muchos no consideramos cuando elegimos carrera.
        </span>{" "}
        Me levanto, café instantáneo porque no da tiempo para nada fancy, y me subo al metro Línea 3 hacia Universidad. Son como 45 minutos de viaje que aprovecho para leer papers en el celular o repasar apuntes. A veces hay gente que me ve leyendo código en el metro y me voltean a ver como si fuera alien, pero ya me acostumbré.
      </p>
      
      <img
        src="/blog/LibroJulia.jpeg"
        alt="Libro de Julia Programming"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Las clases en la Facultad de Ciencias son otro nivel. No es que sean imposibles, pero definitivamente te obligan a cambiar tu forma de pensar. Recuerdo mi primera clase de Estructuras de Datos donde el profesor empezó hablando de complejidad O(n) y yo ahí de "¿qué madres es eso?"
        </span>{" "}
        Pero esa es la magia de estudiar aquí, cada semestre sientes como tu cerebro literalmente se expande. Los profesores no te van a llevar de la mano, esperan que llegues preparado y que sepas hacer preguntas inteligentes. Al principio es intimidante, pero después entiendes que te están preparando para resolver problemas reales en la industria.
      </p>

      <img
        src="/blog/Setup1AM.jpeg"
        alt="Setup de estudio nocturno"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Las noches son sagradas para programar. Mientras mis amigos de otras carreras andan en fiestas o viendo series, yo estoy aquí debuggeando código hasta las 2 AM. No es que no tenga vida social, pero cuando agarras el hilo de un problema de programación, es como una adicción.
        </span>{" "}
        Mi setup nocturno es básico: mi laptop, una lámpara que compré en mercado libre, café de olla que preparo en termo, y Spotify con lo-fi hip hop para concentrarme. He resuelto mis mejores algoritmos entre las 11 PM y las 2 AM, algo tiene la noche que te hace más creativo para el código.
      </p>

      <img
        src="/blog/mydesk.jpeg"
        alt="Mi escritorio de estudio"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El balance entre estudios, proyectos personales y vida social es todo un arte que todavía estoy aprendiendo. Porque no nada más es estudiar para los exámenes, también tienes que mantenerte al día con tecnologías nuevas, hacer proyectos para tu portafolio, y si quieres ser honesto contigo mismo, también necesitas tiempo para no hacer nada.
        </span>{" "}
        Los fines de semana trato de no tocar código, pero siempre termino abriendo VS Code "solo para ver algo rápido" y antes de darme cuenta ya pasaron 4 horas. Es un problema que tenemos todos los que estudiamos esto: el código es adictivo cuando empiezas a entenderle realmente.
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
          La primera vez que fui a un evento tech casi me doy la vuelta en la entrada. Era el Google I/O Extended en la CDMX y había como 200 personas, todas súper extrovertidas hablando de frameworks que yo apenas conocía. Pensé "no pertenezco aquí" y casi me voy, pero algo me dijo que me quedara.
        </span>{" "}
        Resulta que ser introvertido en estos eventos no es una desventaja, es literalmente tu superpoder. Mientras todos los extrovertidos están compitiendo por hablar más fuerte, tú puedes observar, escuchar de verdad, y hacer las conexiones que realmente importan. Solo necesitas cambiar tu estrategia.
      </p>
      
      <img
        src="/blog/Googleentrada.jpeg"
        alt="Entrada a evento de Google"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Mi truco favorito es llegar súper temprano, tipo 30 minutos antes. En ese momento solo hay organizadores y speakers preparándose, el ambiente es más relajado y puedes tener conversaciones reales sin competir con el ruido.
        </span>{" "}
        También me quedo hasta el final, cuando ya se fue el 80% de la gente y quedan solo los que realmente están interesados en el tema. Ahí es donde suceden las conversaciones más valiosas. He conseguido mentorías, colaboraciones en proyectos y hasta oportunidades de trabajo en esos últimos 20 minutos que nadie más aprovecha.
      </p>

      <img
        src="/blog/portadapolanco.jpeg"
        alt="Networking en evento tech"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La clave no es fingir ser extrovertido, es usar tu naturaleza introvertida como ventaja. En lugar de preparar elevator pitches que suenan falsos, preparo preguntas genuinas sobre los proyectos de la gente.
        </span>{" "}
        "¿Qué fue lo más difícil de implementar en tu API?" "¿Cómo decidiste entre React y Vue para ese proyecto?" La gente ama hablar de sus proyectos cuando les preguntas algo específico y técnico. Y como introvertido, eres naturalmente bueno escuchando, así que dejas que ellos hablen mientras tú aprendes un montón.
      </p>

      <img
        src="/blog/Setup1AM.jpeg"
        alt="Tomando notas después del evento"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El follow-up es donde realmente ganas como introvertido. Mientras los extrovertidos coleccionan tarjetas de presentación como pokemones y después no hacen nada con ellas, tú puedes enfocarte en las 2-3 conexiones que realmente te importaron.
        </span>{" "}
        Llegando a casa, mientras la conversación está fresca, les escribo un mensaje personalizado mencionando algo específico de lo que hablamos. "Oye, me gustó mucho tu punto sobre GraphQL vs REST, encontré este artículo que creo que te puede interesar..." Esa atención al detalle que tenemos los introvertidos es oro puro para hacer networking real.
      </p>
    </PersonalBlogTemplate>
  );
};

// ARTÍCULO 4: Herramientas de productividad
export const HerramientasProductividadContent = () => {
  return (
    <PersonalBlogTemplate>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Voy a ser súper honesto: he probado como 20 apps de productividad diferentes en estos años de carrera. Desde Todoist hasta apps raras que prometían revolucionar mi vida, todas terminaban en la carpeta de "apps que ya no uso" después de 2 semanas.
        </span>{" "}
        El problema es que cuando estudias Computer Science, no necesitas algo que te organize la vida como si fueras CEO de una startup. Necesitas algo que entienda tu flujo de trabajo real: debugging a las 3 AM, proyectos que se extienden por meses, y la constante presión de mantenerte actualizado con tecnologías nuevas.
      </p>
      
      <img
        src="/blog/mydesk.jpeg"
        alt="Mi setup de productividad"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Mi stack actual es súper simple: Notion para todo lo que necesito recordar, Obsidian para conectar ideas, y ya. Notion es como mi segundo cerebro donde vivo literalmente - ahí tengo mis horarios de clase, notas de cada materia, tracker de proyectos personales, y hasta mi lista de tecnologías que quiero aprender.
        </span>{" "}
        Obsidian lo uso diferente, es donde hago mis mapas mentales cuando estoy diseñando un algoritmo complejo o tratando de entender una arquitectura nueva. La magia está en que puedes conectar conceptos de diferentes materias. Por ejemplo, vinculo mis notas de estructuras de datos con proyectos reales donde las aplico.
      </p>

      <img
        src="/blog/PizarronLineal.jpeg"
        alt="Organizando ideas en el pizarrón"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Para manejo del tiempo, olvídense del Pomodoro tradicional. 25 minutos no alcanzan ni para entender un error de compilación, mucho menos para entrar en flow state. Yo trabajo en bloques de 90 minutos con descansos de 20.
        </span>{" "}
        Este tiempo es perfecto para resolver un problema complejo sin quemarte mentalmente. Durante el descanso me levanto, camino, a veces hasta me baño si es un día largo. He notado que mis mejores insights vienen en esos 20 minutos cuando no estoy forzando mi cerebro a encontrar la solución.
      </p>

      <img
        src="/blog/Setup1AM.jpeg"
        alt="Sesión de programación nocturna"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El hack más importante que he descubierto es configurar mi entorno para eliminar fricciones. Mi teléfono se queda en modo avión durante las sesiones de estudio profundo, tengo shortcuts de teclado para todo, y uso Dark Reader en todas las páginas web para no lastimar mis ojos en sesiones nocturnas.
        </span>{" "}
        También tengo una regla personal: si algo me toma más de 2 minutos hacer manualmente más de 3 veces, lo automatizo. He escrito scripts para generar templates de proyectos, organizar archivos de descarga, y hasta para mandar mensajes automáticos cuando no estoy disponible. Un estudiante de CS que no automatiza su vida está desperdiciando su tiempo.
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
          fciencias.app nació de una frustración súper real que tengo con los grupos de WhatsApp de mi carrera. Imagínense: 15 grupos diferentes, mensajes importantes perdidos entre memes, gente preguntando lo mismo cada semana, y cero organización para compartir recursos o encontrar compañeros de estudio.
        </span>{" "}
        Un día estaba en el grupo de "Algoritmos y Estructuras de Datos" viendo como alguien preguntaba por quinta vez dónde conseguir el libro del curso, mientras que otro vato había subido un PDF súper útil hace 3 días pero ya estaba perdido entre 200 mensajes de stickers. Ahí fue cuando dije "tiene que haber una mejor forma de hacer esto".
      </p>
      
      <img
        src="/blog/portadaredsocial.jpeg"
        alt="Desarrollo de la red social"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La decisión del stack técnico la hice basándome en lo que ya sabía y lo que podía aprender rápido. React para el frontend porque ya lo manejaba decente, Node.js con Express para el backend, y PostgreSQL para la base de datos porque necesitaba algo robusto para manejar relaciones complejas entre usuarios, materias, y recursos.
        </span>{" "}
        No quise complicarme con tecnologías súper nuevas porque mi objetivo era resolver un problema real, no hacer un showcase de las últimas tendencias. Aunque sí me está costando trabajo implementar el sistema de notificaciones en tiempo real - Socket.io se ve fácil en los tutoriales pero cuando lo implementas con un sistema de permisos complejo es otro pedo.
      </p>

      <img
        src="/blog/Setup1AM.jpeg"
        alt="Coding sessions nocturnas"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La validación más honesta la conseguí con mis propios compañeros de clase. Les mostré wireframes súper básicos y de inmediato empezaron a dar feedback: "oye, ¿y si también pudiéramos organizar grupos de estudio?" "¿podrías agregar un calendario compartido para exámenes?" "¿qué tal un sistema de calificaciones para profesores?"
        </span>{" "}
        Es increíble como cuando construyes algo para gente que conoces, el feedback es brutalmente honesto pero súper constructivo. No es como mostrarle tu app a extraños que van a ser educados y decirte "está cool". Mis compañeros literalmente me dijeron "esta interfaz está fea" y "este flujo no tiene sentido", y tenían razón.
      </p>

      <img
        src="/blog/Pasillo.jpeg"
        alt="Validando la app en la facultad"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Cada feature que desarrollo me enseña algo nuevo sobre programación, pero también sobre el comportamiento humano. Por ejemplo, pensé que todo mundo iba a querer perfiles súper detallados, pero resulta que la mayoría prefiere mantenerse semi-anónimo y enfocarse en el contenido académico.
        </span>{" "}
        También descubrí que los estudiantes de ciencias somos súper críticos con el diseño - si algo se ve muy "fancy" o como red social tradicional, inmediatamente desconfían. Tuve que redesñar la interfaz para que se sintiera más como una herramienta académica seria que como Instagram para nerds. Es mi laboratorio personal donde aprendo tanto de código como de product management.
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
          Mi primer cliente freelance lo conseguí de la manera más random posible. Estaba en un café en la Roma Norte haciendo tarea cuando escuché a unos emprendedores quejándose de que su desarrollador los había ghosteado a media página web. Me armé de valor, me acerqué y les dije "discúlpenme, soy estudiante de Computer Science y escuché su problema, ¿puedo ayudarlos?"
        </span>{" "}
        Fue súper awkward al principio, pero resultó que necesitaban algo básico: una landing page con formulario de contacto. Les cobré súper barato porque era mi primera vez, pero me dio la confianza de que sí podía hacer esto del freelancing. Desde entonces entendí que conseguir clientes en CDMX no es tanto sobre ser el mejor programador, sino sobre estar en el lugar correcto y saber comunicar que puedes resolver problemas reales.
      </p>
      
      <img
        src="/blog/portadapolanco.jpeg"
        alt="Reunión con cliente en Polanco"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El networking presencial en la CDMX es oro puro, especialmente en zonas como Polanco, Santa Fe, y la Roma Norte. Ahí es donde están las startups que tienen presupuesto pero no saben cómo gastar en tech. Yo voy a eventos de emprendimiento, no tanto de programación.
        </span>{" "}
        En los eventos tech todos son desarrolladores compitiendo por las mismas oportunidades. En los eventos de business, soy el único que entiende de tecnología entre puros emprendedores que necesitan desarrollar sus ideas. Es como ser bilingüe en un país extranjero - automáticamente tienes ventaja. Plus, muchos de estos emprendedores tienen presupuestos de 50k-200k pesos para MVPs.
      </p>

      <img
        src="/blog/mydesk.jpeg"
        alt="Trabajando en proyectos freelance"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Mi especialidad sin querer se volvió e-commerce para PyMEs y automatización para startups. La CDMX está llena de negocios familiares que necesitan vender en línea pero no saben por dónde empezar, y startups que están perdiendo tiempo en tareas manuales que se pueden automatizar.
        </span>{" "}
        He hecho desde sistemas de inventario súper básicos hasta chatbots para atención al cliente. Lo que he aprendido es que no necesitas conocer las tecnologías más nuevas, necesitas entender los problemas específicos de los negocios mexicanos: integración con bancos locales, manejo de facturación del SAT, sistemas que funcionen con internet lento. Esa especialización local me permite cobrar precios premium.
      </p>

      <img
        src="/blog/Googleentrada.jpeg"
        alt="Evento de tecnología en la ciudad"
        className="w-full h-80 object-cover rounded-lg mb-8 mx-auto"
      />

      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La regla de oro que he aprendido es que tus primeros 3 clientes definen tu reputación en esta ciudad. CDMX es gigante pero el ecosistema emprendedor es súper pequeño, todos se conocen. Si haces un buen trabajo, te van a recomendar. Si la riegas, también se van a enterar todos.
        </span>{" "}
        Por eso al principio cobraba 40% menos de lo que valía mi trabajo, pero entregaba 120% de lo que prometía. Siempre incluía funcionalidades extra sin costo, documentación súper detallada, y capacitación personal para usar el sistema. Ahora, 2 años después, el 80% de mis clientes vienen por referencia directa. En una ciudad donde la confianza es todo, una buena reputación vale más que cualquier campaña de marketing.
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