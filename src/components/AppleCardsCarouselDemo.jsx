"use client";

import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full min-h-screen flex flex-col py-8 pb-2 md:py-20 md:pb-8">
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-null text-neutral-800 dark:text-neutral-200 mb-6 md:mb-8">
        Mi Blog
      </h2>
      <div className="flex-1">
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Desarrollo web moderno con las mejores prácticas.
              </span>{" "}
              Comparto mi experiencia construyendo aplicaciones escalables y startups exitosas. 
              Desde código hasta estrategia de negocio, exploramos todos los aspectos del desarrollo tech moderno.
            </p>
            <img
              src="/QuienSoy.jpg"
              alt="Emicarrada"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-lg" />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Desarrollo Web",
    title: "Construyendo aplicaciones React modernas",
    src: "/QuienSoy.jpg",
    content: <DummyContent />,
  },
  {
    category: "IA & Tecnología",
    title: "El futuro de la Inteligencia Artificial",
    src: "/QuienSoy.jpg",
    content: <DummyContent />,
  },
  {
    category: "Emprendimiento",
    title: "De la idea al negocio escalable",
    src: "/QuienSoy.jpg",
    content: <DummyContent />,
  },
  {
    category: "Tutorial",
    title: "Configurando tu entorno de desarrollo perfecto",
    src: "/QuienSoy.jpg",
    content: <DummyContent />,
  },
  {
    category: "Arquitectura",
    title: "Microservicios vs Monolitos: ¿Cuándo usar cada uno?",
    src: "/QuienSoy.jpg",
    content: <DummyContent />,
  },
  {
    category: "Startups",
    title: "Lecciones aprendidas construyendo Club+ y Zoi",
    src: "/QuienSoy.jpg",
    content: <DummyContent />,
  },
];
