import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const menuVariants = {
  closed: { opacity: 0, y: 40, pointerEvents: 'none', transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
  open: { opacity: 1, y: 0, pointerEvents: 'auto', transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function MobileMenu({ isOpen, onClose, navLinks }) {
  const firstLinkRef = useRef(null);

  // Foco y escape accesible
  useEffect(() => {
    if (isOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
    function handleEsc(e) {
      if (e.key === 'Escape' && isOpen) onClose();
    }
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <motion.nav
      aria-label="Main navigation"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      exit="closed"
      variants={menuVariants}
      className="fixed inset-0 bg-[#041737]/80 backdrop-blur-md flex flex-col items-center justify-center z-[1000] w-full h-full md:hidden"
      style={{ willChange: 'opacity, transform' }}
    >
      {/* Botón cerrar (tache) */}
      <button
        className="absolute top-6 right-6 text-white text-4xl font-bold focus:outline-none z-[1001] hover:text-[#FF8200] transition-colors duration-200"
        onClick={onClose}
        aria-label="Cerrar menú"
        tabIndex={0}
      >
        ×
      </button>
      <ul className="flex flex-col items-center gap-y-8 font-title">
        {navLinks && navLinks.map((link, idx) => (
          <li key={link.href} className="w-full flex justify-center">
            <a
              href={link.href}
              ref={idx === 0 ? firstLinkRef : undefined}
              className="font-title text-3xl sm:text-4xl text-white px-6 py-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8200] hover:text-[#FF8200] transition-all duration-200 text-center"
              tabIndex={0}
              onClick={onClose}
              role="link"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
