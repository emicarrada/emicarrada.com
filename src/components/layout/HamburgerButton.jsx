import React from 'react';
import { motion } from 'framer-motion';

/**
 * Botón hamburguesa animado y accesible para menú móvil.
 * Props:
 * - isOpen: boolean (si el menú está abierto)
 * - onClick: función para alternar menú
 * - ariaLabel: string (accesibilidad)
 * - ariaExpanded: boolean
 */
export default function HamburgerButton({ isOpen, onClick, ariaLabel = 'Abrir menú', ariaExpanded = false }) {
  return (
    <button
      type="button"
      className="relative flex flex-col justify-center items-center w-12 h-12 p-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8200] bg-transparent border-none group"
      aria-label={ariaLabel}
      aria-haspopup="true"
      aria-expanded={ariaExpanded}
      tabIndex={0}
      onClick={onClick}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {/* Línea superior */}
      <motion.span
        className="block absolute left-3 right-3 h-[3px] bg-white rounded transition-all"
        initial={false}
        animate={isOpen ? { rotate: 45, y: 9, background: '#FF8200' } : { rotate: 0, y: 0, background: '#fff' }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ willChange: 'transform' }}
      />
      {/* Línea central */}
      <motion.span
        className="block absolute left-3 right-3 h-[3px] bg-white rounded transition-all"
        initial={false}
        animate={isOpen ? { opacity: 0 } : { opacity: 1, y: 9 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ willChange: 'opacity, transform' }}
      />
      {/* Línea inferior */}
      <motion.span
        className="block absolute left-3 right-3 h-[3px] bg-white rounded transition-all"
        initial={false}
        animate={isOpen ? { rotate: -45, y: 18, background: '#FF8200' } : { rotate: 0, y: 18, background: '#fff' }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ willChange: 'transform' }}
      />
    </button>
  );
}
