import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BubbleMenu from '../ui/BubbleMenu';
import MobileMenuButton from './MobileMenuButton';
import {
  ENABLE_BUBBLE_MENU,
  BUBBLE_MENU_ITEMS,
  BUBBLE_MENU_THEME,
} from '../../config/bubbleMenu.config';

const FALLBACK_NAV_LINKS = BUBBLE_MENU_ITEMS.map((item) => ({
  href: item.href,
  label: item.ariaLabel || item.label,
}));

export default function SiteBubbleNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!ENABLE_BUBBLE_MENU) {
    return (
      <>
        <nav className="hidden md:flex items-center space-x-10 h-32" aria-label="Main navigation">
          <ul className="flex items-center space-x-10">
            {FALLBACK_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="relative font-title text-xl text-white px-4 py-2 transition-colors duration-150 hover:text-[#FF6B00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]"
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block transition-transform duration-150"
                  >
                    {link.label}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <MobileMenuButton navLinks={FALLBACK_NAV_LINKS} />
        </div>
      </>
    );
  }

  return (
    <BubbleMenu
      showLogoBubble={false}
      items={BUBBLE_MENU_ITEMS}
      menuAriaLabel="Abrir menú de navegación"
      useFixedPosition={false}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      {...BUBBLE_MENU_THEME}
    />
  );
}
