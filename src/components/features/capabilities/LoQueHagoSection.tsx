import { CAPABILITIES } from '@/constants/capabilities';
import { CapabilityIcon } from './CapabilityIcon';
import { SectionHeader } from './SectionHeader';

function capabilityLayoutClass(featured?: boolean, wide?: boolean) {
  if (featured) {
    return 'md:col-span-2 md:row-span-2';
  }
  if (wide) {
    return 'lg:col-span-2';
  }
  return '';
}

export function LoQueHagoSection() {
  return (
    <section className="w-full bg-[#041737] text-white">
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-4 md:px-8 md:pb-28 md:pt-8">
        <SectionHeader
          eyebrow="Especialidades"
          title="Qué hago"
          description="Stack, arquitectura y herramientas con las que construyo productos web listos para producción."
        />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {CAPABILITIES.map((item) => (
            <article
              key={item.id}
              className={`group flex min-h-[11rem] flex-col rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/[0.04] md:min-h-[12rem] md:p-8 ${capabilityLayoutClass(item.featured, item.wide)}`}
            >
              <CapabilityIcon id={item.icon} size={item.featured ? 'large' : 'default'} />

              <h3
                className={`mt-5 font-semibold tracking-tight text-white ${
                  item.featured ? 'text-2xl md:text-[1.75rem] md:leading-tight' : 'text-xl md:text-[1.35rem]'
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`mt-3 leading-relaxed text-white/50 ${
                  item.featured ? 'max-w-md text-base md:text-lg' : 'text-sm md:text-base'
                }`}
                style={{ fontFamily: 'Be Vietnam, sans-serif' }}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
