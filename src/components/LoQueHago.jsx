import React from "react";

const cards = [
	{
	icon: (
	  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF8200" className="size-6 mx-auto group-hover:scale-110 transition-transform duration-200">
		<path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
	  </svg>
	),
		title: "Desarrollo Full Stack",
		desc: "Diseño y desarrollo aplicaciones web completas, integrando frontend moderno con backend sólido. Uso React, Node.js o Laravel con PostgreSQL y despliegue en la nube para lograr productos escalables y listos para producción.",
	},
	{
	icon: (
	  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF8200" className="size-6 mx-auto group-hover:scale-110 transition-transform duration-200">
		<path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
	  </svg>
	),
		title: "Desarrollo Web",
		desc: "Construyo interfaces limpias y rápidas, con una atención especial en tipografía, animaciones suaves y diseño responsivo. Experiencias web pensadas para usabilidad y estética técnica.",
	},
	{
	icon: (
	  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF8200" className="size-6 mx-auto group-hover:scale-110 transition-transform duration-200">
		<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
	  </svg>
	),
		title: "Backend Robusto",
		desc: "Creo sistemas backend eficientes y seguros usando Node.js o Laravel. Arquitecturas limpias, control de acceso, lógica de negocio clara y rendimiento optimizado para escalar sin fricciones.",
	},
	{
	icon: (
	  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF8200" className="size-6 mx-auto group-hover:scale-110 transition-transform duration-200">
		<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
	  </svg>
	),
		title: "Automatización",
		desc: "Automatizo flujos repetitivos e integraciones entre plataformas con n8n. Desde generación de contenido hasta notificaciones y manejo de datos, para ahorrar tiempo y escalar operaciones.",
	},
	{
	icon: (
	  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF8200" className="size-6 mx-auto group-hover:scale-110 transition-transform duration-200">
		<path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
	  </svg>
	),
		title: "IA y Generación",
		desc: "Integro modelos como Mistral 7B para crear asistentes virtuales, ideas personalizadas y herramientas generativas. La IA ya forma parte de mi stack para resolver problemas reales.",
	},
	{
	icon: (
	  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF8200" className="size-6 mx-auto group-hover:scale-110 transition-transform duration-200">
		<path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
	  </svg>
	),
		title: "Bases de Datos y Arquitectura Escalable",
		desc:
			"Diseño arquitecturas sólidas y escalables usando PostgreSQL, Redis para caché, y estructura de monorepo con buenas prácticas de desarrollo moderno.",
	},
];

export default function LoQueHago() {
	return (
		<section className="w-full bg-[#041737] py-12 px-2 md:px-8 flex flex-col items-center">
			<h2 className="font-null text-3xl md:text-5xl text-[#ff8200] text-center mb-10 select-none">
				Que hago
			</h2>
			<div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{cards.map((card, i) => (
					<div
						key={i}
						className="group bg-[#041737] border border-[#0a2550] rounded-xl p-5 md:p-7 flex flex-col items-center text-center shadow-lg transition-all duration-200 hover:scale-105 hover:border-orange-400 hover:shadow-orange-400/20 cursor-pointer w-full max-w-xs mx-auto"
					>
						<div className="mb-4">{card.icon}</div>
						<h3 className="font-null text-white text-xl mb-2">
							{card.title}
						</h3>
						<p className="font-bevietnam text-white text-sm opacity-80 leading-snug">
							{card.desc}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
