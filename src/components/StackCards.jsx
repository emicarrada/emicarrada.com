import React from "react";

// Ejemplo de íconos SVG personalizados
const icons = [
  (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF8200" className="size-6 mx-auto" width="32" height="32">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  ),
  (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF8200" className="size-6 mx-auto" width="32" height="32">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  ),
  (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF8200" className="size-6 mx-auto" width="32" height="32">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
    </svg>
  ),
  (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF8200" className="size-6 mx-auto" width="32" height="32">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
    </svg>
  ),
];

const cards = [
  {
    title: "Desarrollo a la medida",
    desc: (
      <>
        <div>Construyo soluciones Full Stack adaptadas a tu proyecto, con diseño limpio, código eficiente y rendimiento asegurado.</div>
      </>
    ),
  },
  {
    title: "Automatización Inteligente con IA",
    desc: (
      <>
        <div>Integro procesos que ahorran tiempo y eliminan tareas repetitivas. Desde contenido dinámico hasta flujos entre apps, todo conectado y funcionando solo.</div>
      </>
    ),
  },
  {
    title: "Auditoría Técnica",
    desc: (
      <>
        <div>Encuentro cuellos de botella, errores ocultos y mejoras estructurales en tu arquitectura web. Ideal si ya tienes algo construido y quieres mejorarlo.</div>
      </>
    ),
  },
  {
    title: "Infraestructura Escalable",
    desc: (
      <>
        <div>Uso PostgreSQL, Redis, despliegue en Vercel o Railway, y estructuras tipo monorepo que permiten un desarrollo modular, limpio y profesional.</div>
      </>
    ),
  },
];



export default function StackCards() {
  return (
    <section id="servicios" className="w-full bg-[#041737] py-12 px-2 md:px-8 flex flex-col items-center">
      <h2 className="font-null text-3xl md:text-5xl text-[#ff8200] text-center mb-10 select-none">
        Que puedo hacer por ti
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div
            key={card.title}
            className="group bg-[#041737] border border-white/10 rounded-xl p-5 md:p-7 flex flex-col items-center text-center shadow-lg transition-all duration-200 hover:scale-105 hover:border-orange-400 hover:shadow-orange-400/20 cursor-pointer w-full max-w-xs mx-auto"
          >
            <div className="mb-4">{icons[idx]}</div>
            <h3 className="font-null text-white text-xl mb-2">
              {card.title}
            </h3>
            <div className="font-bevietnam text-white text-sm opacity-80 leading-snug text-center" style={{ fontFamily: "'Be Vietnam', 'BeVietnam', sans-serif" }}>
              {card.desc}
            </div>
          </div>
        ))}
      </div>
      {/* Botón Agendar reunión */}
      <a
        href="https://calendly.com/emicarrada/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 group bg-[#041737] border border-white/10 rounded-xl p-5 md:p-7 flex flex-row items-center justify-center text-center shadow-lg transition-all duration-200 hover:scale-105 hover:border-orange-400 hover:shadow-orange-400/20 cursor-pointer w-full max-w-xs mx-auto gap-3 font-null text-white text-lg"
      >
        <span className="transition-colors duration-200 group-hover:text-[#ff8200]">Agendar reunión</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-6 transition-colors duration-200 group-hover:stroke-[#ff8200]" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
        </svg>
      </a>
    </section>
  );
}
