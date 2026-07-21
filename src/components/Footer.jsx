// ...existing code...

import React from "react";

const socialLinks = [
  {
    href: "https://instagram.com/emicarrada",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 transition-colors duration-200 text-white group-hover:text-[#FF8200]">
        <path fill="currentColor" d="M7.03.08c-1.28.06-2.15.26-2.91.56-.79.31-1.46.72-2.12 1.39-.67.67-1.08 1.34-1.38 2.13-.3.76-.5 1.64-.55 2.91-.06 1.28-.07 1.69-.06 4.95.01 3.26.02 3.67.08 4.95.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.39 2.12.67.67 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.55 1.28.06 1.69.07 4.95.06 3.26-.01 3.67-.02 4.95-.08 1.28-.06 2.15-.27 2.91-.56.79-.31 1.46-.72 2.12-1.39.67-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.55-2.91.06-1.28.07-1.69.06-4.95-.01-3.26-.02-3.67-.08-4.95-.06-1.28-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.39-2.12C21.3 1.33 20.63.92 19.84.62c-.76-.3-1.63-.5-2.91-.56-1.28-.06-1.69-.07-4.95-.06-3.26.01-3.67.02-4.95.08zm.14 21.69c-1.17-.05-1.81-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.42-2.23-.06-1.26-.07-1.64-.08-4.85-.01-3.2.01-3.58.06-4.85.05-1.17.25-1.81.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.42 1.27-.06 1.64-.07 4.85-.08 3.2-.01 3.58.01 4.85.06 1.17.05 1.81.24 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.42 2.23.06 1.27.07 1.65.08 4.85.01 3.2-.01 3.58-.06 4.85-.05 1.17-.25 1.81-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.42-1.27.06-1.65.07-4.85.08-3.2.01-3.58-.01-4.85-.06zm9.78-16.1a1.44 1.44 0 1 0 1.44-1.44 1.44 1.44 0 0 0-1.44 1.44zM5.84 12.01c.01 3.4 2.77 6.16 6.17 6.15 3.4-.01 6.16-2.77 6.15-6.17-.01-3.4-2.77-6.16-6.17-6.15-3.4.01-6.16 2.77-6.15 6.17zm2.16-.01a4 4 0 1 1 4.01 3.99A4 4 0 0 1 8 12z"/>
      </svg>
    ),
  },
  {
    href: "https://x.com/emicarrada",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 transition-colors duration-200 text-white group-hover:text-[#FF8200]">
        <path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
      </svg>
    ),
  },
  {
    href: "https://youtube.com/@emicarrada",
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 transition-colors duration-200 text-white group-hover:text-[#FF8200]">
        <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    href: "https://github.com/emicarrada",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 transition-colors duration-200 text-white group-hover:text-[#FF8200]">
        <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/emicarrada",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 50 50" fill="none" className="w-6 h-6 transition-colors duration-200 text-white group-hover:text-[#FF8200]">
        <path fill="currentColor" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#041737] text-white font-[Null_Free] py-12 px-6 flex flex-col items-center" style={{ fontFamily: "'Null Free', Null_Free, sans-serif" }}>
      {/* Logo centrado */}
      <img src="/logoemicarrada.png" alt="Logo emicarrada" className="w-24 h-24 mb-6 object-contain mx-auto" />
      {/* Botones de redes sociales debajo del logo */}
      <div className="flex flex-row items-center justify-center gap-8 mb-8">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="group"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="text-center text-sm mt-2 font-bevietnam" style={{ fontFamily: "'Be Vietnam', 'BeVietnam', sans-serif" }}>
        © 2026 emicarrada. Todos los derechos reservados.
      </div>
    </footer>
  );
}
