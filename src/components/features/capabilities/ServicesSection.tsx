import { CALENDLY_URL, SERVICES } from '@/constants/capabilities';
import { SectionHeader } from './SectionHeader';

export function ServicesSection() {
  return (
    <section id="servicios" className="w-full bg-[#041737] text-white">
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-4 md:px-8 md:pb-32 md:pt-8">
        <SectionHeader
          eyebrow="Servicios"
          title="Qué puedo hacer por ti"
          description="Soluciones concretas para llevar tu idea, producto o infraestructura al siguiente nivel."
        />

        <div className="border-t border-white/10">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              className="group border-b border-white/10 py-10 md:py-14"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-10">
                <div className="flex min-w-0 flex-1 gap-5 md:gap-8">
                  <span className="pt-1 text-xs tabular-nums tracking-[0.2em] text-white/25 md:text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-2xl font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-[#FF8200] md:text-[1.75rem] md:leading-tight">
                      {service.title}
                    </h3>
                    <p
                      className="mt-4 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg"
                      style={{ fontFamily: 'Be Vietnam, sans-serif' }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="hidden shrink-0 pt-2 md:block">
                  <span
                    aria-hidden="true"
                    className="text-white/15 transition-colors duration-200 group-hover:text-[#FF8200]/40"
                  >
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 border-t border-white/10 pt-10 md:mt-16 md:pt-12">
          <p
            className="max-w-md text-base leading-relaxed text-white/45 md:text-lg"
            style={{ fontFamily: 'Be Vietnam, sans-serif' }}
          >
            ¿Tienes un proyecto en mente? Conversemos sobre cómo puedo ayudarte.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#FF8200]/30 bg-[#FF8200]/10 px-6 py-3 text-base font-medium text-[#FF8200] transition-all duration-200 hover:border-[#FF8200]/50 hover:bg-[#FF8200]/15"
          >
            Agendar reunión
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
