import React from 'react';
import { useProjects } from '../../../hooks/useProjects';
import { ProjectRow } from './ProjectRow';

const sectionShell = 'w-full bg-[#041737] text-white';

export const ProjectsSection: React.FC = () => {
  const { projects, loading, error } = useProjects();

  if (loading) {
    return (
      <section id="proyectos" className={`${sectionShell} min-h-[60vh] flex items-center justify-center`}>
        <p className="text-white/50 text-sm tracking-wide">Cargando proyectos…</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="proyectos" className={`${sectionShell} min-h-[60vh] flex items-center justify-center`}>
        <p className="text-red-400/90 text-sm">{error}</p>
      </section>
    );
  }

  const startupProjects = projects.filter((project) => project.category === 'startup');
  const scientificProjects = projects.filter((project) => project.category === 'scientific');

  return (
    <section id="proyectos" className={sectionShell}>
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-16 md:px-8 md:pt-24 md:pb-32">
        <header className="mb-16 md:mb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#FF8200]">Portfolio</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
            Proyectos
          </h1>
          <p
            className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/55 md:text-xl"
            style={{ fontFamily: 'Be Vietnam, sans-serif' }}
          >
            Productos y exploraciones donde estrategia, diseño y tecnología convergen.
          </p>
        </header>

        <div className="border-t border-white/10">
          <p className="pt-8 pb-2 text-[11px] uppercase tracking-[0.24em] text-white/35">
            Startups
          </p>
          {startupProjects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>

        {scientificProjects.length > 0 && (
          <div className="mt-12 border-t border-white/10 md:mt-16">
            <p className="pt-8 pb-2 text-[11px] uppercase tracking-[0.24em] text-white/35">
              Ciencia y tecnología
            </p>
            {scientificProjects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
