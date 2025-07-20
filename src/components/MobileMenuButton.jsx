import React from "react";
import { motion } from "framer-motion";

export default function MobileMenuButton({ isOpen, onClick }) {
  return (
    <button
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      role="button"
      onClick={onClick}
      className="md:hidden w-10 h-10 flex items-center justify-center z-[1001] focus:outline-none"
      tabIndex={0}
    >
      <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
      <span className="relative w-6 h-6 block">
        {/* Línea superior */}
        <motion.span
          className={`absolute left-0 top-0 w-6 h-0.5 bg-white rounded transition-all ${
            isOpen ? "rotate-45 top-3" : "rotate-0 top-0"
          }`}
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 12 : 0 }}
          transition={{ duration: 0.3 }}
        />
        {/* Línea media */}
        <motion.span
          className="absolute left-0 top-3 w-6 h-0.5 bg-white rounded transition-all"
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
        {/* Línea inferior */}
        <motion.span
          className={`absolute left-0 bottom-0 w-6 h-0.5 bg-white rounded transition-all ${
            isOpen ? "-rotate-45 bottom-3" : "rotate-0 bottom-0"
          }`}
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -12 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </span>
    </button>
  );
}
