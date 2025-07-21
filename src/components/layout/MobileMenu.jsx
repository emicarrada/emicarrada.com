import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  closed: { 
    opacity: 0,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  open: { 
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

const menuVariants = {
  closed: { 
    x: '100%',
    opacity: 0,
    transition: { 
      duration: 0.25, 
      ease: [0.4, 0.0, 0.2, 1], // Más rápido y dinámico
      staggerChildren: 0.03,
      staggerDirection: -1
    }
  },
  open: { 
    x: 0,
    opacity: 1,
    transition: { 
      duration: 0.3, 
      ease: [0.0, 0.0, 0.2, 1], // Curva más dinámica
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  closed: {
    x: 30,
    opacity: 0,
    transition: { duration: 0.15, ease: "easeOut" }
  },
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.25, ease: [0.0, 0.0, 0.2, 1] }
  }
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
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop con blur */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999] md:hidden"
            onClick={onClose}
          />
          
          {/* Menu Container */}
          <motion.nav
            aria-label="Main navigation"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 w-80 h-full bg-gradient-to-b from-[#041737] to-[#0a2550] shadow-2xl flex flex-col justify-center z-[1000] md:hidden"
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Botón cerrar con animación */}
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white text-3xl font-bold focus:outline-none z-[1001] hover:text-[#FF8200] hover:bg-white/10 rounded-full transition-all duration-300"
              onClick={onClose}
              aria-label="Cerrar menú"
              tabIndex={0}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>

            {/* Decorative line */}
            <motion.div 
              className="absolute top-20 right-6 left-6 h-px bg-gradient-to-r from-transparent via-[#FF8200] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            
            <motion.ul 
              className="flex flex-col items-center gap-y-8 font-title px-8"
              variants={menuVariants}
            >
              {navLinks && navLinks.map((link, idx) => (
                <motion.li 
                  key={link.href} 
                  className="w-full flex justify-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={link.href}
                    ref={idx === 0 ? firstLinkRef : undefined}
                    className="font-title text-2xl sm:text-3xl text-white px-6 py-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8200] hover:text-[#FF8200] hover:bg-white/5 transition-all duration-300 text-center w-full relative overflow-hidden"
                    tabIndex={0}
                    onClick={onClose}
                    role="link"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#FF8200]/10 to-[#FF8200]/20 -translate-x-full"
                      whileHover={{ translateX: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            {/* Decorative elements */}
            <motion.div 
              className="absolute bottom-10 left-6 right-6 text-center text-[#FF8200]/60 text-sm font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              // emicarrada.com
            </motion.div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
