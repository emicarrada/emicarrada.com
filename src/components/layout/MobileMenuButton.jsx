import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function MenuStairIcon() {
  // SVG hamburguesa personalizado, color naranja
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF8200" className="size-6">
      <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
    </svg>
  );
}

function MenuXIcon() {
  // SVG X personalizada, color naranja
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FF8200" className="size-5">
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

export default function MobileMenuButton({ navLinks }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  // Cerrar con Escape o click fuera
  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);

  // Devolver foco al botón al cerrar
  useEffect(() => {
    if (!isOpen && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [isOpen]);

  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsOpen((open) => !open);
    }
  }

  return (
    <>
      {/* Botón menú escalera alineada derecha o X */}
      {!isOpen && (
        <button
          ref={buttonRef}
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          role="button"
          className="md:hidden absolute top-4 right-4 z-[1050] p-0 m-0 w-12 h-12 flex items-center justify-center bg-transparent border-none select-none focus:outline-none"
          onClick={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          type="button"
          style={{ minWidth: 48, minHeight: 48 }}
        >
          <MenuStairIcon />
        </button>
      )}
      {/* Overlay menú móvil con Glassmorphism */}
      {isOpen && (
        <nav
          ref={menuRef}
          className="fixed inset-0 backdrop-blur-xl bg-gradient-to-br from-[#041737]/80 via-[#0a2550]/70 to-[#041737]/90 flex flex-col items-center justify-center z-[1000] w-full md:hidden border border-white/10"
          aria-label="Navegación principal"
          tabIndex={-1}
          style={{ 
            borderRadius: 0,
            height: '100vh',
            overflow: 'hidden',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {/* Botón cerrar sin marco */}
          <button
            aria-label="Cerrar menú"
            role="button"
            className="absolute right-4 top-4 w-12 h-12 flex items-center justify-center focus:outline-none bg-transparent hover:bg-white/10 transition-all duration-300 select-none p-0"
            onClick={() => setIsOpen(false)}
            tabIndex={0}
            type="button"
            style={{ 
              minWidth: 48, 
              minHeight: 48,
            }}
          >
            <MenuXIcon />
          </button>
          <ul className="flex flex-col items-center justify-center gap-y-10 font-null relative z-10">
            {navLinks && navLinks.map((link) => (
              <li key={link.href} className="w-full flex justify-center">
                <a
                  href={link.href}
                  className="font-null text-4xl sm:text-5xl text-white px-6 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8200] hover:text-[#FF8200] transition-all duration-300 text-center"
                  tabIndex={0}
                  onClick={() => setIsOpen(false)}
                  role="link"
                  style={{ 
                    color: '#FFFFFF', 
                    textDecoration: 'none',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
