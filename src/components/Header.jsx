import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HamburgerButton from './layout/HamburgerButton';
import MobileMenuButton from './layout/MobileMenuButton';

const navLinks = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#libros', label: 'Libros' },
  { href: '#blog', label: 'Blog' },
  { href: '#webs', label: 'Webs' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Cerrar menú móvil con Escape y controlar foco
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  // Sticky + fondo dinámico al hacer scroll
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-[#041737] ${scrolled ? 'shadow-sm' : ''}`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-20 md:h-24 relative">
        {/* Logo siempre visible a la izquierda */}
        <a href="#" className="flex items-center z-50 select-none focus:outline-none" tabIndex={0} aria-label="Inicio">
          <img
            src="/logoemicarrada.png"
            alt="Logo Emicarrada"
            className="object-contain w-[100px] md:w-[120px] h-auto"
            style={{ willChange: 'transform' }}
            draggable="false"
          />
        </a>
        {/* Navegación desktop */}
        <nav
          className="hidden md:flex items-center space-x-10 h-32"
          aria-label="Main navigation"
        >
          <ul className="flex items-center space-x-10">
            {navLinks.map((link, idx) => (
              <li key={link.href}>
                <motion.a
                  href={link.href}
                  className="relative font-title text-xl text-white px-4 py-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8200] group"
                  whileHover={{ scale: 1.13, color: '#FF8200' }}
                  whileTap={{ scale: 0.97 }}
                  style={{ willChange: 'transform, color' }}
                >
                  <span className="transition-all duration-300">
                    {link.label}
                  </span>
                  {/* Subrayado animado */}
                  <motion.span
                    className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#FF8200] origin-left scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"
                    layoutId={`underline-${idx}`}
                    whileHover={{ scaleX: 1 }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 0 }}
                  />
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Botón menú móvil personalizado */}
        <div className="md:hidden">
          <MobileMenuButton navLinks={navLinks} />
        </div>
        {/* Overlay menú móvil (legacy, ahora reemplazado por MobileMenuButton) */}
        {/* <AnimatePresence>
          <MobileMenu
            isOpen={menuOpen}
            navLinks={navLinks}
            onClose={() => setMenuOpen(false)}
          />
        </AnimatePresence> */}
      </div>
    </header>
  );
}
