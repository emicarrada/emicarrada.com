import React from 'react';
import Header from './Header';
import { Canvas3D } from './Canvas3D';
import TypewriterText from './TypewriterText';

export default function Hero() {
  return (
    <div id="home">
      <Header />
      <section className="w-full h-screen bg-[#041737] flex items-center justify-center relative overflow-hidden">
        {/* Subir los lentes y el texto */}
        <div className="flex items-center justify-center w-full h-full pt-2 md:pt-10">
          <Canvas3D medium />
        </div>
        {/* Texto de prueba eliminado, solo TypewriterText */}
        <TypewriterText upMore />
      </section>
    </div>
  );
}
