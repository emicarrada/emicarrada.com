import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SiteBubbleNav from './layout/SiteBubbleNav';

export default function Header() {
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
        <Link to="/" className="flex items-center z-50 select-none focus:outline-none" tabIndex={0} aria-label="Inicio">
          <img
            src="/logoemicarrada.png"
            alt="Logo Emicarrada"
            className="object-contain w-[100px] md:w-[120px] h-auto"
            style={{ willChange: 'transform' }}
            draggable="false"
          />
        </Link>

        <SiteBubbleNav />
      </div>
    </header>
  );
}
