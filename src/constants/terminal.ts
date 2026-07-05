import { AvailableCommands, CommandOutputs } from '@/types';

export const AVAILABLE_COMMANDS: AvailableCommands = {
  help: 'Muestra los comandos disponibles',
  clear: 'Limpia la terminal',
  profile: 'Muestra toda mi información',
  whoami: 'Muestra información básica sobre mí',
  skills: 'Lista mis habilidades técnicas',
  tools: 'Lista mis herramientas y tecnologías',
  projects: 'Muestra mis proyectos principales',
  studies: 'Muestra mis estudios y formación',
  university: 'Muestra mi universidad',
  contact: 'Muestra mi información de contacto',
  movies: 'Muestra mis películas favoritas',
  series: 'Muestra mis series favoritas',
  books: 'Muestra mis libros favoritos',
  hobbies: 'Muestra mis hobbies e intereses',
  birthday: 'Muestra mi fecha de nacimiento',
};

export const COMMAND_OUTPUTS: CommandOutputs = {
  whoami:
    'Soy Cristopher Carrada, un desarrollador de software enfocado en crear "artesanías digitales". Me apasiona construir tecnología con un alto nivel de detalle manual y calidad técnica que resuelva problemas reales. Actualmente soy Founder y CEO de Chiikö, y me desempeño como Technical Lead en el AWS Student Builder Group de la UNAM, combinando mi visión técnica con un fuerte enfoque en el impacto.',

  tools: `Lenguajes y Frameworks: Java, TypeScript, Node.js, Express.js, React, Vite

Estilado y UI: Tailwind CSS, shadcn/ui, Heroicons, Tabler Icons, Lucide Icons, PostCSS, Autoprefixer, clsx, Class Variance Authority

Animaciones y UI Dinámica: Framer Motion, GSAP, React Simple Typewriter

Gráficos y Visuales: React Three Fiber, Drei

Base de Datos: PostgreSQL, Prisma ORM, Prisma Studio

Autenticación: JWT, bcryptjs, Firebase

Automatización y APIs: n8n, Formspree

DevOps, Cloud y Sistemas: AWS, Bash, systemctl, DNF (Fedora Linux), dotenv, tsx, nodemon

Hardware Preferido: ThinkPad

IA y ML: Ollama, Mistral 7B`,

  skills: `Desarrollo Full-Stack con TypeScript,

Filosofía de "Artesanías Digitales" (alto detalle UI/UX),

Arquitectura Cloud (AWS),

Patrones modernos de React,

Backend escalable y seguro,

Modelado relacional de bases de datos,

Migraciones y seeders,

Automatización de flujos de trabajo,

Integración de APIs externas,

Arquitectura en monorepo,

Configuración de entornos seguros y escalables,

Ingeniería de prompts e IA,

DevOps y administración de sistemas Linux (Fedora),

Estrategia de branding digital,

Despliegues automatizados y flujos CI/CD,

Algoritmos personalizados`,

  projects: `- Chiikö (Founder & CEO - Estudio Creativo Digital)
- AWS Student Builder Group UNAM (Technical Lead)
- IIMAS - UNAM (Research Intern - Dinámicas de violencia en redes sociales)
- Más proyectos en mi GitHub: github.com/emicarrada`,

  contact: `Email: cristopher@emicarrada.com
LinkedIn, X, Instagram, TikTok, Github, Youtube: @emicarrada`,

  profile: `Nombre: Cristopher Carrada

Nacionalidad: Mexicano

Edad: 19

Ocupación: Desarrollador de Software y Emprendedor

Empresa: Chiikö (Founder & CEO)

Roles Activos:
Technical Lead en AWS Student Builder Group
Research Intern en IIMAS - UNAM

Universidad: UNAM - Facultad de Ciencias

Estudios:
Técnico Desarrollador de Software (CCH Sur)
Licenciatura en Ciencias de la Computación (En curso)

Ubicación: Miguel Hidalgo, Ciudad de México

Descripción:
Soy Cristopher Carrada, desarrollador de software y emprendedor con una visión clara: alejarme de las plantillas automatizadas para construir verdaderas "artesanías digitales". Lidero el estudio creativo Chiikö, donde combino el diseño de alta calidad con la ejecución técnica. Además, aporto a la comunidad tecnológica como Technical Lead en AWS y exploro la investigación de datos en el IIMAS de la UNAM.`,

  hola: 'Hola! bienvenido a mi sitio',
  sudo: 'No jajaja, esto no funciona aquí',
  ls: 'Aquí no hay archivos, pero puedes ver mis proyectos en GitHub: github.com/emicarrada',
  titi: 'Asi me decian de pequeño, como descubriste eso?',
  birthday: '19 de septiembre de 2006',
  series: 'Suits, Mr. Robot, The Office, Silicon Valley, Drive to Survive',
  movies: "The Creator, Rocky (1, 3, 4), Creed (1, 2), The Social Network, The Wolf of Wall Street, The Pursuit of Happyness, The Big Short, The Dark Knight, Ocean's Eleven",
  books: "El principito, Hábitos Atómicos, El monje que vendió su Ferrari, Shoe Dog, Can't Hurt Me",
  studies: 'Técnico Desarrollador de Software - CCH Sur (UNAM)\nLicenciatura en Ciencias de la Computación (En curso) - Facultad de Ciencias, UNAM',
  university: 'Facultad de Ciencias, UNAM - Estudiante de Ciencias de la Computación',
  hobbies: 'Boxeo, Análisis de arquitectura de negocios musicales (estrategias en la industria), Cinematografía Sci-Fi, Tocar Guitarra, Emprendimiento, Hardware y Linux.',
};

// Terminal styling constants
export const TERMINAL_STYLES = {
  accent: 'text-orange-400',
  bgPrimary: 'bg-[#061b3a]',
  bgSecondary: 'bg-[#0a2550]',
  textPrimary: 'text-green-400',
  height: 'h-[400px]',
} as const;
