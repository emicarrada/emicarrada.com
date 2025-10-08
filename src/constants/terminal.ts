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
    'Soy Cristopher Carrada, un desarrollador de software y emprendedor autodidacta. Me apasiona crear tecnología que inspire y resuelva problemas reales. Actualmente soy Co-Founder y CEO de Club+ y Zoi Marketing, donde combino mi visión estratégica con habilidades técnicas para construir soluciones auténticas.',

  tools: `Lenguajes y Frameworks: Java, TypeScript, Node.js, Express.js, React, Vite

Estilado y UI: Tailwind CSS, shadcn/ui, Heroicons, Tabler Icons, Lucide Icons, PostCSS, Autoprefixer, clsx, Class Variance Authority

Animaciones y UI Dinámica: Framer Motion, GSAP, React Simple Typewriter

Gráficos y Visuales: React Three Fiber, Drei

Base de Datos: PostgreSQL, Prisma ORM, Prisma Studio

Autenticación: JWT, bcryptjs, Firebase

Automatización y APIs: n8n, Formspree

DevOps y Sistemas: Bash, systemctl, DNF (Fedora), dotenv, tsx, nodemon

IA y ML: Ollama, Mistral 7B`,

  skills: `Desarrollo Full-Stack con TypeScript, 

Patrones modernos de React, 

Diseño UI/UX minimalista, 

Backend escalable y seguro, 

Modelado relacional de bases de datos, 

Migraciones y seeders, 

Automatización de flujos de trabajo, 

Integración de APIs externas, 

Arquitectura en monorepo, 

Configuración de entornos seguros y escalables, 

Ingeniería de prompts, 

DevOps y administración de sistemas Linux (Fedora), 

Estrategia de branding y marketing digital, 

Despliegues automatizados y flujos CI/CD, 

Ruteo en SPA y manejo de formularios, 

Algoritmos personalizados`,

  projects: `- Club+ (Co-Founder & CEO)
- Zoi Marketing (Co-Founder & CEO)
- Más proyectos en mi GitHub: github.com/emicarrada`,

  contact: `Email: cristopher@emicarrada.com
LinkedIn, X, Instagram, TikTok, Github, Youtube: @emicarrada`,

  profile: `Nombre: Cristopher Carrada

Nacionalidad: Mexicano

Edad: 18

Ocupación: Desarrollador de Software y Emprendedor

Empresas: Club+ y Zoi Marketing

Universidad: UNAM - Facultad de Ciencias

Estudios:
Tecnico Desarrollador de Software
Licenciatura en Ciencias de la Computación (En curso)

Ubicación: Ciudad de México

Descripción: 
Soy Cristopher Carrada, desarrollador de software y emprendedor autodidacta con una visión clara:
construir tecnología que inspire, resuelva problemas reales y refleje autenticidad. lidero proyectos
como Club+ y Zoi Marketing, donde combino pensamiento estratégico con ejecución técnica para crear 
soluciones con propósito.`,

  hola: 'Hola! bienvenido a mi sitio',
  sudo: 'No jajaja, esto no funciona aquí',
  ls: 'Aquí no hay archivos, pero puedes ver mis proyectos en GitHub: github.com/emicarrada',
  titi: 'Asi me decian de pequeño, como descubriste eso?',
  birthday: '19 de septiembre de 2006',
  series: 'Suits, Mr robot, The Office, Sillicon Valley, Drive to Survive',
  movies: 'Rocky (1, 3, 4), Creed (1, 2), The Social Network, The Wolf of Wall Street , The Pursuit of Happyness, The Big Short, The Dark Knight, Oceans Eleven',
  books: 'El principito, Habitos Atómicos, El monje que vendió su Ferrari, Shoe Dog, Cant hurt me',
  studies: 'Técnico Desarrollador de Software - CCH Sur (UNAM), Licenciatura en Ciencias de la Computación (En curso) - UNAM',
  university: 'Facultad de Ciencias, UNAM - Estudiante de Ciencias de la Computación',
  hobbies: 'Fútbol, Box, Tocar Guitarra, Películas, Series, Libros, Tecnología, Emprendimiento',
};

// Terminal styling constants
export const TERMINAL_STYLES = {
  accent: 'text-orange-400',
  bgPrimary: 'bg-[#061b3a]',
  bgSecondary: 'bg-[#0a2550]',
  textPrimary: 'text-green-400',
  height: 'h-[400px]',
} as const;