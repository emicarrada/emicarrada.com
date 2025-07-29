import React, { useEffect, useState, useRef } from "react";
import "../styles/globals.css";
import LoQueHago from "./LoQueHago";

const AVAILABLE_COMMANDS = {
  help: "Muestra los comandos disponibles",
  clear: "Limpia la terminal",

  profile: "Muestra toda mi información",
  whoami: "Muestra información básica sobre mí",
  skills: "Lista mis habilidades técnicas",
  tools: "Lista mis herramientas y tecnologías",
  projects: "Muestra mis proyectos principales",
  studies: "Muestra mis estudios y formación",
  university: "Muestra mi universidad",
  contact: "Muestra mi información de contacto",

  movies: "Muestra mis películas favoritas",
  series: "Muestra mis series favoritas",
  books: "Muestra mis libros favoritos",
  hobbies: "Muestra mis hobbies e intereses",
  birthday: "Muestra mi fecha de nacimiento",
};

const COMMAND_OUTPUTS = {
  whoami: "Soy Cristopher Carrada, un desarrollador de software y emprendedor autodidacta. Me apasiona crear tecnología que inspire y resuelva problemas reales. Actualmente soy Co-Founder y CEO de Club+ y Zoi Marketing, donde combino mi visión estratégica con habilidades técnicas para construir soluciones auténticas.",

  tools: 

`Lenguajes y Frameworks: Java, TypeScript, Node.js, Express.js, React, Vite

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
soluciones con propósito.
      
      `,
  hola: "Hola! bienvenido a mi sitio",
  sudo: "No jajaja, esto no funciona aquí",
  ls: "Aquí no hay archivos, pero puedes ver mis proyectos en GitHub: github.com/emicarrada",
  titi: "Asi me decian de pequeño, como descubriste eso?",
  birthday: "19 de septiembre de 2006",
  series: "Suits, Mr robot, The Office, Sillicon Valley, Drive to Survive",
  movies: "Rocky (1, 3, 4), Creed (1, 2), The Social Network, The Wolf of Wall Street , The Pursuit of Happyness, The Big Short, The Dark Knight, Oceans Eleven",
  books: "El principito, Habitos Atómicos, El monje que vendió su Ferrari, Shoe Dog, Cant hurt me",
  studies: "Técnico Desarrollador de Software - CCH Sur (UNAM), Licenciatura en Ciencias de la Computación (En curso) - UNAM",
  university: "Facultad de Ciencias, UNAM - Estudiante de Ciencias de la Computación",
  hobbies: "Fútbol, Box, Tocar Guitarra, Películas, Series, Libros, Tecnología, Emprendimiento",
};

const accent = "text-orange-400";
const prompt = <span className={accent}>{"guest@emicarrada:~$ "}</span>;

function InteractiveTerminal() {
  const [history, setHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
    // Remover el focus automático para evitar que salte a esta sección
    // if (inputRef.current) {
    //   inputRef.current.focus();
    // }
  }, [history]);

  const processCommand = (cmd) => {
    const command = cmd.toLowerCase().trim();
    
    let output = "";
    
    if (command === "") return;
    
    if (command === "help") {
      output = Object.entries(AVAILABLE_COMMANDS)
        .map(([cmd, desc]) => `${cmd}: ${desc}`)
        .join("\n");
    } else if (command === "clear") {
      setHistory([]);
      return;
    } else if (COMMAND_OUTPUTS[command]) {
      output = COMMAND_OUTPUTS[command];
    } else {
      output = `Comando no reconocido: ${command}\nEscribe 'help' para ver los comandos disponibles`;
    }

    setHistory(prev => [...prev, 
      { type: "input", content: command },
      { type: "output", content: output }
    ]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      processCommand(currentCommand);
      setCurrentCommand("");
    }
  };

  return (
    <div 
      ref={terminalRef}
      className="bg-[#061b3a] text-green-400 p-4 rounded-lg font-mono text-sm h-[400px] overflow-y-auto relative"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="absolute top-0 left-0 w-full bg-[#0a2550] p-2 rounded-t-lg flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="mt-8 mb-2">
        Bienvenido a mi terminal interactiva! Escribe 'help' para ver los comandos disponibles y descubrir más sobre mí.
      </div>
      
      {history.map((entry, i) => (
        <div key={i} className="mb-1">
          {entry.type === "input" ? (
            <div>
              {prompt}{entry.content}
            </div>
          ) : (
            <div className="whitespace-pre-wrap">{entry.content}</div>
          )}
        </div>
      ))}

      <div className="flex">
        {prompt}
        <input
          ref={inputRef}
          type="text"
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={handleKeyPress}
          className="bg-transparent focus:outline-none flex-1 w-full"
        />
      </div>
    </div>
  );
}

export default function QuienSoy() {
  return (
    <section id="quien-soy" className="min-h-screen bg-[#041737]">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-5xl font-null text-[#ff8200] text-center mb-8">Quien Soy</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          <div className="order-1 lg:order-1">
            <div className="bg-[#061b3a] rounded-lg shadow-xl overflow-hidden max-w-md mx-auto">
              <div className="bg-[#0a2550] p-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <img
                src="/QuienSoy.jpg"
                alt="Mi foto"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="order-2 lg:order-2">
            <div className="bg-[#0a2550] rounded-lg p-1">
              <InteractiveTerminal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
