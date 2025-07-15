import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import LoQueHago from "./LoQueHago";

const terminalLines = [
	{ type: "cmd", text: "whoami" },
	{ type: "output", text: "emicarrada" },
	{ type: "cmd", text: "cat profile.json" },
	{
		type: "json",
		text: `{
  "Nombre": "Cristopher Carrada",
  "Nacionalidad": "Mexicano",
  "Edad": 18,
  "Rol": "Desarrollador de Software y Emprendedor",
  "CoFounder & CEO": [
    "Club+",
    "Zoi Marketing"
  ],
  "Universidad": "UNAM"
  "Estudios": [
    "Tecnico Desarrollador de Software",
    "Licenciatura en Ciencias de la Computación (En curso)"
  ],
  "Ubicacion": "Ciudad de México",
  "Descripcion": [
  "Soy Cristopher Carrada, desarrollador de software
  y emprendedor autodidacta con una visión clara: 
  construir tecnología que inspire, resuelva problemas 
  reales y refleje autenticidad. Lidero proyectos como 
  Club+ y Zoi Marketing, donde combino pensamiento estratégico 
  con ejecución técnica para crear soluciones con propósito." 
  ],

}`,
	},
];

const accent = "text-orange-400";
const prompt = <span className={accent}>{">_"}</span>;

function TypingTerminal({ lines }) {
	const [displayed, setDisplayed] = useState([]);
	const [charIdx, setCharIdx] = useState(0);
	const [lineIdx, setLineIdx] = useState(0);

	useEffect(() => {
		if (lineIdx < lines.length) {
			const line = lines[lineIdx].text;
			if (charIdx < line.length) {
				const timeout = setTimeout(() => setCharIdx(charIdx + 1), 18);
				return () => clearTimeout(timeout);
			} else {
				setTimeout(() => {
					setDisplayed([...displayed, line]);
					setLineIdx(lineIdx + 1);
					setCharIdx(0);
				}, 300);
			}
		}
	}, [charIdx, lineIdx, lines, displayed]);

	return (
		<div className="font-null text-base md:text-lg bg-[#061b3a] rounded-lg p-6 shadow-lg border border-[#0a2550] relative overflow-hidden min-h-[260px] w-full h-full flex flex-col justify-center">
			<div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-10" />
			{lines.slice(0, lineIdx).map((l, i) => (
				<TerminalLine key={i} {...l} />
			))}
			{lineIdx < lines.length && (
				<div className="flex items-center">
					{lines[lineIdx].type === "cmd" && prompt}
					<span className="whitespace-pre text-orange-200">
						{lines[lineIdx].text.slice(0, charIdx)}
						<span className="animate-blink">|</span>
					</span>
				</div>
			)}
		</div>
	);
}

function TerminalLine({ type, text }) {
	if (type === "cmd")
		return (
			<div>
				<span className="text-orange-400">{">_"}</span>{" "}
				<span className="text-orange-200">{text}</span>
			</div>
		);
	if (type === "output")
		return <div className="text-blue-200">{text}</div>;
	if (type === "json")
		return <pre className="text-green-300">{text}</pre>;
	return null;
}

export default function QuienSoy() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);
	return (
		<>
			<div className="w-full flex justify-center items-center mb-2 mt-2">
				<h2 className="font-null text-3xl md:text-5xl text-[#ff8200] text-center select-none">
					Quién Soy
				</h2>
			</div>
			<section className="w-full min-h-[60vh] bg-[#041737] relative pt-4 pb-6 flex items-start justify-center overflow-hidden">
				<div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-10" />
				<div className="container mx-auto flex flex-col md:flex-row items-stretch gap-0 z-10 h-full">
					{/* Imagen */}
					<div className="w-full md:w-1/2 flex items-center justify-center h-full p-4 md:p-6">
						<div className="bg-[#061b3a] rounded-xl shadow-2xl border border-[#0a2550] relative overflow-hidden group-hover:scale-105 group-hover:shadow-orange-400/30 transition-all duration-300 w-full max-w-md h-full flex flex-col justify-center">
							{/* Simula barra de ventana */}
							<div className="flex gap-2 p-2 bg-[#0a2550]">
								<span className="w-3 h-3 rounded-full bg-red-400" />
								<span className="w-3 h-3 rounded-full bg-yellow-400" />
								<span className="w-3 h-3 rounded-full bg-green-400" />
							</div>
							<img
								src="/QuienSoy.jpg"
								alt="Emicarrada"
								className="w-full h-auto object-cover"
								draggable={false}
							/>
						</div>
					</div>
					{/* Terminal */}
					<div className="w-full md:w-1/2 flex items-center justify-center h-full p-4 md:p-6">
						{isMobile ? (
							<div className="font-null text-base md:text-lg bg-[#061b3a] rounded-lg shadow-lg border border-[#0a2550] w-full max-w-md overflow-x-auto p-4 whitespace-pre-wrap break-words">
								{/* Renderiza todo el texto sin animación */}
								{terminalLines.map((l, i) => (
									<TerminalLine key={i} {...l} />
								))}
							</div>
						) : (
							<TypingTerminal lines={terminalLines} />
						)}
					</div>
				</div>
			</section>
			<LoQueHago />
		</>
	);
}
