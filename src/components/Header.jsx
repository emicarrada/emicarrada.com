import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HamburgerButton from './layout/HamburgerButton';
import MobileMenuButton from './layout/MobileMenuButton';

const navLinks = [
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
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
        <Link to="/" className="flex items-center z-50 select-none focus:outline-none" tabIndex={0} aria-label="Inicio">
          <img
            src="/logoemicarrada.png"
            alt="Logo Emicarrada"
            className="object-contain w-[100px] md:w-[120px] h-auto"
            style={{ willChange: 'transform' }}
            draggable="false"
          />
        </Link>
        {/* Navegación desktop */}
        <nav
          className="hidden md:flex items-center space-x-10 h-32"
          aria-label="Main navigation"
        >
          <ul className="flex items-center space-x-10">
            {navLinks.map((link, idx) => (
              <li key={link.href}>
                {link.href.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className="relative font-title text-xl text-white px-4 py-2 transition-colors duration-150 hover:text-[#FF6B00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] group"
                    style={{ willChange: 'transform' }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block transition-transform duration-150"
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                ) : (
                  <motion.a
                    href={link.href}
                    className="relative font-title text-xl text-white px-4 py-2 transition-colors duration-150 hover:text-[#FF6B00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ willChange: 'transform' }}
                  >
                    <span className="inline-block transition-transform duration-150">
                      {link.label}
                    </span>
                  </motion.a>
                )}
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
