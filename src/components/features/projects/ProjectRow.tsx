import React from 'react';
import { Project } from '../../../types/projects';

interface ProjectRowProps {
  project: Project;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ project }) => {
  return (
    <article className="group border-b border-white/10 py-10 md:py-14 last:border-b-0">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="flex min-w-0 flex-1 items-start gap-5 md:gap-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/[0.04] md:h-16 md:w-16">
            <img
              src={project.logo}
              alt={`${project.name} logo`}
              className="max-h-10 max-w-10 object-contain md:max-h-12 md:max-w-12"
            />
          </div>

          <div className="min-w-0">
            <h3 className="text-2xl font-semibold tracking-tight text-white md:text-[2rem] md:leading-tight">
              {project.name}
            </h3>
            <div
              className="mt-3 max-w-2xl space-y-3"
              style={{ fontFamily: 'Be Vietnam, sans-serif' }}
            >
              {project.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-white/55 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-5 pl-[4.75rem] text-sm md:flex-col md:items-end md:gap-3 md:pl-0 md:pt-2">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#FF8200] transition-opacity duration-200 hover:opacity-80"
          >
            Sitio web
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/45 transition-colors duration-200 hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};
