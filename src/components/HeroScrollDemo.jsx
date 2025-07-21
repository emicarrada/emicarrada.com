"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden -mt-24 md:-mt-36 lg:-mt-48">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-sm md:text-2xl font-semibold text-black dark:text-white">
              Colaboraciones, proyectos o solo saludar <br />
              <span className="text-5xl md:text-[7rem] font-bold mt-1 leading-none">
                ¿Hablamos?
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/picturemail.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
