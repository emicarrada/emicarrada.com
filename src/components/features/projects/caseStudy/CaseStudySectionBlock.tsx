import { CaseStudySection } from '@/types/caseStudy';
import { CaseStudyIcon } from './CaseStudyIcon';

interface CaseStudySectionBlockProps {
  section: CaseStudySection;
  isLast: boolean;
}

const bodyFont = { fontFamily: 'Be Vietnam, sans-serif' } as const;

export function CaseStudySectionBlock({ section, isLast }: CaseStudySectionBlockProps) {
  return (
    <li className="relative flex gap-5 md:gap-8">
      <div className="flex flex-col items-center">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#FF8200]/25 bg-[#FF8200]/10">
          <CaseStudyIcon id={section.icon} />
        </div>
        {!isLast && (
          <div className="mt-3 w-px flex-1 min-h-[2rem] bg-gradient-to-b from-[#FF8200]/40 to-white/10" aria-hidden="true" />
        )}
      </div>

      <article className="min-w-0 flex-1 pb-12 md:pb-16">
        <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">{section.title}</h2>

        {section.intro && (
          <p className="mt-3 text-base leading-relaxed text-white/55 md:text-lg" style={bodyFont}>
            {section.intro}
          </p>
        )}

        {section.paragraphs?.map((p) => (
          <p key={p.slice(0, 48)} className="mt-4 text-base leading-relaxed text-white/55 md:text-lg" style={bodyFont}>
            {p}
          </p>
        ))}

        {section.bullets && section.bullets.length > 0 && (
          <ul className="mt-4 space-y-2.5" style={bodyFont}>
            {section.bullets.map((item) => (
              <li key={item.slice(0, 40)} className="flex gap-3 text-sm leading-relaxed text-white/55 md:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF8200]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {section.stackRows && section.stackRows.length > 0 && (
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.4fr)] gap-px bg-white/10 text-[11px] uppercase tracking-wider text-white/40 md:text-xs">
              <div className="bg-[#061b3a] px-3 py-2.5 md:px-4">Capa</div>
              <div className="bg-[#061b3a] px-3 py-2.5 md:px-4">Tecnología</div>
              <div className="bg-[#061b3a] px-3 py-2.5 md:px-4 hidden sm:block">Función</div>
            </div>
            {section.stackRows.map((row) => (
              <div
                key={row.layer}
                className="grid grid-cols-1 gap-1 border-t border-white/10 bg-[#041737]/80 px-3 py-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.4fr)] sm:gap-px sm:bg-white/10 md:px-4 md:py-3.5"
                style={bodyFont}
              >
                <div className="text-sm font-medium text-[#FF8200] sm:bg-[#041737]/90 sm:px-2 sm:py-1">{row.layer}</div>
                <div className="text-sm text-white/80 sm:bg-[#041737]/90 sm:px-2 sm:py-1">{row.tech}</div>
                <div className="text-sm text-white/50 sm:bg-[#041737]/90 sm:px-2 sm:py-1">{row.role}</div>
              </div>
            ))}
          </div>
        )}

        {section.brandRows && section.brandRows.length > 0 && (
          <div className="mt-5 space-y-3">
            {section.brandRows.map((row) => (
              <div
                key={row.form}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5"
                style={bodyFont}
              >
                <p className="text-xs uppercase tracking-wider text-white/35">{row.use}</p>
                <p className="mt-2 text-lg font-semibold text-[#FF8200]">{row.form}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/55 md:text-base">{row.where}</p>
              </div>
            ))}
          </div>
        )}

        {section.flow && (
          <pre className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-[#061b3a] p-4 text-xs leading-relaxed text-white/70 md:text-sm">
            {section.flow}
          </pre>
        )}

        {section.codeTree && (
          <pre className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-[#061b3a] p-4 text-xs leading-relaxed text-emerald-400/80 md:text-sm">
            {section.codeTree}
          </pre>
        )}

        {section.note && (
          <p
            className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-sm leading-relaxed text-amber-100/70 md:text-base"
            style={bodyFont}
          >
            {section.note}
          </p>
        )}
      </article>
    </li>
  );
}
