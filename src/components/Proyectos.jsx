import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Proyectos() {
  return (
    <>
      <Header />
      <section id="proyectos" className="w-full py-20 bg-[#041737] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-title">Proyectos</h2>
          <p className="text-lg md:text-xl mb-12 font-body">
            Aquí encontrarás una selección de mis proyectos destacados, desarrollados con pasión y creatividad.
          </p>
          {/* Aquí puedes agregar tarjetas, grids o cualquier contenido de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ejemplo de proyecto */}
            <div className="bg-[#092a5a] rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Proyecto Ejemplo</h3>
              <p className="mb-4">Descripción breve del proyecto. Puedes personalizar este bloque.</p>
              <a href="#" className="inline-block px-6 py-2 bg-[#FF8200] text-white rounded-full font-bold transition hover:bg-[#ff9a3c]">Ver más</a>
            </div>
            {/* Más proyectos aquí... */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
