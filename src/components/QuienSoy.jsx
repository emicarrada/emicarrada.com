import React, { useEffect, useState, useRef } from "react";
import "../styles/globals.css";
import LoQueHago from "./LoQueHago";

const AVAILABLE_COMMANDS = {
  help: "Muestra los comandos disponibles",
  whoami: "Muestra información básica sobre mí",
  skills: "Lista mis habilidades técnicas por proyecto, sin rodeos",
  projects: "Muestra mis proyectos principales",
  contact: "Muestra mi información de contacto",
  studies: "Muestra mis estudios y formación",
  university: "Muestra mi universidad",
  clear: "Limpia la terminal",
  profile: "Muestra toda mi información",
  movies: "Muestra mis películas favoritas",
  series: "Muestra mis series favoritas",
  books: "Muestra mis libros favoritos",
  birthday: "Muestra mi fecha de nacimiento",
};

const COMMAND_OUTPUTS = {
  whoami: "Soy Cristopher Carrada, un desarrollador de software y emprendedor autodidacta. Me apasiona crear tecnología que inspire y resuelva problemas reales. Actualmente soy Co-Founder y CEO de Club+ y Zoi Marketing, donde combino mi visión estratégica con habilidades técnicas para construir soluciones auténticas.",
  skills: `[✔] Club+ (Plataforma de Suscripción Full-Stack) ├── Backend: Node.js + TypeScript | Express.js | Autenticación JWT | bcryptjs ├── Base de datos: PostgreSQL | Prisma ORM | Migraciones ├── Frontend: React | Tailwind CSS ├── Automatización: flujos de trabajo n8n | Integraciones API de plataformas (Netflix, Disney+, Spotify) ├── Arquitectura: Monorepo | Configuración dotenv | Algoritmos de precios y validación

[✔] Zoi Marketing (Plataforma de Marketing Potenciada por IA) ├── Frontend: React + TypeScript | Vite | Tailwind | React Router | Hot Toast | Lucide Icons ├── Backend: Node.js + Express | Prisma | PostgreSQL | Autenticación Firebase | Stripe ├── IA/ML: Ollama | Mistral 7B | Ingeniería de prompts para generación de contenido ├── DevOps: Scripting Bash | systemctl | Gestión de paquetes DNF (Fedora) ├── Base de datos: Modelado relacional | Seeders | Prisma Studio ├── Flujo de trabajo: Recarga en caliente (tsx/nodemon) | Despliegues automatizados

[✔] emicarrada.com (Portafolio Personal) ├── Frontend: React + TypeScript | Tailwind CSS | Vite ├── Animaciones: Framer Motion | GSAP | Motion | React Simple Typewriter ├── UI: shadcn/ui | Heroicons | Tabler Icons | Lucide React ├── Gráficos 3D: React Three Fiber | Drei ├── Utilidades: PostCSS | Autoprefixer | clsx | Class Variance Authority ├── Ruteo y Formularios: React Router DOM | Formspree

[✔] Fortalezas Clave ├── Desarrollo Full-Stack con TypeScript (frontend y backend) ├── Patrones modernos de React y UI/UX minimalista ├── Integración de IA e ingeniería de prompts ├── DevOps y administración de Linux (Fedora) ├── Automatización e integraciones API ├── Estrategia sólida de branding y marketing`,
  projects: `- Club+ (Co-Founder & CEO)
- Zoi Marketing (Co-Founder & CEO)
- Más proyectos en mi GitHub: github.com/emicarrada`,
  contact: `Email: cristopher@emicarrada.com
LinkedIn, X, Instagram, TikTok, Github, Youtube: @emicarrada`,
  profile: JSON.stringify({
    Nombre: "Cristopher Carrada",
    Nacionalidad: "Mexicano",
    Edad: 18,
    Rol: "Desarrollador de Software y Emprendedor",
    "CoFounder & CEO": [
      "Club+",
      "Zoi Marketing"
    ],
    Universidad: "UNAM",
    Estudios: [
      "Tecnico Desarrollador de Software",
      "Licenciatura en Ciencias de la Computación (En curso)"
    ],
    Ubicacion: "Ciudad de México",
    Descripcion: [
      "Soy Cristopher Carrada, desarrollador de software",
      "y emprendedor autodidacta con una visión clara:", 
      "construir tecnología que inspire, resuelva problemas", 
      "reales y refleje autenticidad. Lidero proyectos como", 
      "Club+ y Zoi Marketing, donde combino pensamiento estratégico", 
      "con ejecución técnica para crear soluciones con propósito."
    ]
  }, null, 2),
  hola: "Hola! bienvenido a mi sitio",
  ls: "Esto no es linux, es solo mi terminal interactiva",
  titi: "Asi me decian de pequeño, como descubriste eso?",
  birthday: "19 de septiembre de 2006",
  series: "Suits, Mr robot, The Office, Sillicon Valley, Drive to Survive",
  movies: "Rocky (1, 3, 4), Creed (1, 2), The Social Network, The Wolf of Wall Street , The Pursuit of Happyness, The Big Short, The Dark Knight, Oceans Eleven",
  books: "El principito, Habitos Atómicos, El monje que vendió su Ferrari, Shoe Dog, Cant hurt me",
  studies: "Técnico Desarrollador de Software - CCH Sur (UNAM), Licenciatura en Ciencias de la Computación (En curso) - UNAM",
  university: "Facultad de Ciencias, UNAM - Estudiante de Ciencias de la Computación",
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
