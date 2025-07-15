import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const words = [
  "cientifico",
  "emprendedor",
  "desarrollador",
  "estudiante",
  "autodidacta",
  "runner",
  "creador",
  "programador",
  "consultor",
  "diseñador"
];

export default function TypewriterText({ upMore }) {
  return (
    <>
      {/* Desktop: esquina inferior izquierda */}
      <div className="hidden md:flex absolute left-0 bottom-40 w-full items-end justify-start p-8 md:p-16 z-40">
        <div className="flex items-baseline gap-5">
          <span className="font-title font-extrabold text-4xl md:text-6xl text-white tracking-wide">soy</span>
          <span className="font-title text-4xl md:text-6xl text-[#FF8200] tracking-wide">
            <Typewriter
              words={words}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={1200}
            />
          </span>
        </div>
      </div>
      {/* Mobile: centrado debajo de los lentes, más arriba y más grande */}
      <div className={`flex md:hidden flex-col items-center justify-center w-full absolute left-0 right-0 ${upMore ? 'bottom-72' : 'bottom-56'} z-40`}>
        <span className="font-title font-extrabold text-5xl text-white mb-3">soy</span>
        <span className="font-title text-5xl text-[#FF8200]">
          <Typewriter
            words={words}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={60}
            delaySpeed={1200}
          />
        </span>
      </div>
    </>
  );
}
