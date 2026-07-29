import { CaseStudyIconId } from '@/types/caseStudy';

const stroke = 'currentColor';
const common = 'h-7 w-7 text-[#FF8200]';

export function CaseStudyIcon({ id }: { id: CaseStudyIconId }) {
  switch (id) {
    case 'layers':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0 4.179 2.25L21.75 12l-4.179 2.25m0 0-4.179 2.25L12 17.25l-9.75-5.25m4.179-2.25L12 12.75l4.179-2.25" />
        </svg>
      );
    case 'stack':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 1.5m0 0 3-1.5m-3 1.5V21m0-12.75L3 7.5m3.75 1.5L12 3l5.25 2.625M21 7.5l-3.75 1.5M12 12.75V21" />
        </svg>
      );
    case 'flow':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
      );
    case 'globe':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.732-3.553" />
        </svg>
      );
    case 'seo':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      );
    case 'content':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      );
    case 'experience':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
        </svg>
      );
    case 'deploy':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
        </svg>
      );
    case 'brand':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
        </svg>
      );
    case 'craft':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
        </svg>
      );
    case 'map':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.165c.381-.17.622-.548.622-.961V8.25c0-.627-.507-1.133-1.133-1.133H4.983c-.626 0-1.133.507-1.133 1.133v6.75c0 .414.241.791.622.961l4.875 2.165M9 6.75l4.5-1.636M9 6.75 4.5 5.114M15 9.75l4.5-1.636M15 9.75V18m0 0-4.5 1.636M15 18l-4.5 1.636" />
        </svg>
      );
    case 'summary':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      );
    default:
      return null;
  }
}
