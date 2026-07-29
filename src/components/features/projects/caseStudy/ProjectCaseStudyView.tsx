import { Link } from 'react-router-dom';
import { ProjectCaseStudy } from '@/types/caseStudy';
import { CaseStudySectionBlock } from './CaseStudySectionBlock';

interface ProjectCaseStudyViewProps {
  study: ProjectCaseStudy;
}

export function ProjectCaseStudyView({ study }: ProjectCaseStudyViewProps) {
  return (
    <section className="w-full bg-[#041737] text-white">
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-8 md:px-8 md:pb-32 md:pt-12">
        <Link
          to="/proyectos"
          className="inline-flex items-center gap-2 text-sm text-white/45 transition-colors duration-200 hover:text-[#FF8200]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Volver a proyectos
        </Link>

        <header className="mt-8 border-b border-white/10 pb-10 md:mt-10 md:pb-12">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#FF8200]">Desglose técnico</p>
          <h1
            className="text-4xl font-semibold tracking-tight text-[#ff8200] md:text-5xl md:leading-[1.05]"
            style={{ fontFamily: 'Be Vietnam, sans-serif' }}
          >
            {study.title}
          </h1>
          <p className="mt-4 text-lg font-light leading-relaxed text-white/55 md:text-xl" style={{ fontFamily: 'Be Vietnam, sans-serif' }}>
            {study.subtitle}
          </p>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="mt-0.5 h-6 w-6 shrink-0 text-[#FF8200]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
            <p className="text-sm leading-relaxed text-white/60 md:text-base" style={{ fontFamily: 'Be Vietnam, sans-serif' }}>
              {study.summaryLine}
            </p>
          </div>
        </header>

        <ol className="mt-10 list-none md:mt-14">
          {study.sections.map((section, index) => (
            <CaseStudySectionBlock
              key={section.id}
              section={section}
              isLast={index === study.sections.length - 1}
            />
          ))}
        </ol>

        <div className="mt-4 border-t border-white/10 pt-10">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 transition-all duration-200 hover:border-[#FF8200]/40 hover:text-[#FF8200]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Volver a mis proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}
