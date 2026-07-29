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
          <>
            {/* Mobile: tarjetas por fila */}
            <div className="mt-5 space-y-3 md:hidden">
              {section.stackRows.map((row) => (
                <div
                  key={row.layer}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  style={bodyFont}
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/35">Capa</p>
                    <p className="mt-1 text-base font-medium leading-snug text-[#FF8200]">{row.layer}</p>
                  </div>
                  <div className="mt-4 border-t border-white/10 pt-4">
                    <p className="text-[10px] uppercase tracking-wider text-white/35">Tecnología</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/85">{row.tech}</p>
                  </div>
                  <div className="mt-4 border-t border-white/10 pt-4">
                    <p className="text-[10px] uppercase tracking-wider text-white/35">Función</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/55">{row.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: tabla */}
            <div className="mt-5 hidden overflow-hidden rounded-2xl border border-white/10 md:block">
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.4fr)] gap-px bg-white/10 text-xs uppercase tracking-wider text-white/40">
                <div className="bg-[#061b3a] px-4 py-2.5">Capa</div>
                <div className="bg-[#061b3a] px-4 py-2.5">Tecnología</div>
                <div className="bg-[#061b3a] px-4 py-2.5">Función</div>
              </div>
              {section.stackRows.map((row) => (
                <div
                  key={row.layer}
                  className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.4fr)] gap-px border-t border-white/10 bg-white/10"
                  style={bodyFont}
                >
                  <div className="bg-[#041737]/90 px-4 py-3.5 text-sm font-medium text-[#FF8200]">{row.layer}</div>
                  <div className="bg-[#041737]/90 px-4 py-3.5 text-sm text-white/80">{row.tech}</div>
                  <div className="bg-[#041737]/90 px-4 py-3.5 text-sm leading-relaxed text-white/50">{row.role}</div>
                </div>
              ))}
            </div>
          </>
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
          <pre className="mt-5 max-w-full overflow-x-auto overscroll-x-contain rounded-2xl border border-white/10 bg-[#061b3a] p-3 text-[11px] leading-relaxed text-white/70 sm:p-4 sm:text-xs md:text-sm">
            {section.flow}
          </pre>
        )}

        {section.codeTree && (
          <pre className="mt-5 max-w-full overflow-x-auto overscroll-x-contain rounded-2xl border border-white/10 bg-[#061b3a] p-3 text-[11px] leading-relaxed text-emerald-400/80 sm:p-4 sm:text-xs md:text-sm">
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
