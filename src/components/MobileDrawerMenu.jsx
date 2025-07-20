import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" },
];

export default function MobileDrawerMenu({ isOpen, onClose }) {
  const firstLinkRef = useRef(null);

  useEffect(() => {
    if (isOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black/60 z-[998] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-label="Cerrar menú"
          />
          {/* Drawer */}
          <motion.aside
            key="drawer"
            className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#041737]/80 backdrop-blur-md border-l border-white/10 shadow-lg z-[999] flex flex-col p-6 gap-8 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="self-end text-white text-2xl mb-4 focus:outline-none"
              onClick={onClose}
              aria-label="Cerrar menú"
            >
              ×
            </button>
            <nav className="flex flex-col gap-10 mt-4 font-title h-full justify-center">
              {navLinks.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  ref={idx === 0 ? firstLinkRef : undefined}
                  className="text-white text-4xl md:text-5xl font-semibold hover:text-[#FF8200] transition-colors duration-200 outline-none w-full text-center"
                  role="link"
                  tabIndex={0}
                  onClick={onClose}
                  style={{ lineHeight: 1.1 }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
