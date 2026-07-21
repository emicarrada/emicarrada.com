interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="mb-12 md:mb-16">
      <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#FF8200]">{eyebrow}</p>
      <h2 className="text-5xl font-null text-[#ff8200]">
        {title}
      </h2>
      <p
        className="mt-5 max-w-xl text-lg font-light leading-relaxed text-white/55 md:text-xl"
        style={{ fontFamily: 'Be Vietnam, sans-serif' }}
      >
        {description}
      </p>
    </header>
  );
}
