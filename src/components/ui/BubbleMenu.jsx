import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

import './BubbleMenu.css';

const DEFAULT_ITEMS = [
  {
    label: 'home',
    href: '#',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' },
  },
  {
    label: 'about',
    href: '#',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' },
  },
  {
    label: 'projects',
    href: '#',
    ariaLabel: 'Documentation',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' },
  },
  {
    label: 'blog',
    href: '#',
    ariaLabel: 'Blog',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' },
  },
  {
    label: 'contact',
    href: '#',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' },
  },
];

export default function BubbleMenu({
  logo,
  onMenuClick,
  className,
  style,
  menuAriaLabel = 'Toggle menu',
  menuBg = '#fff',
  menuContentColor = '#111',
  useFixedPosition = false,
  showLogoBubble = true,
  items,
  animationEase = 'back.out(1.5)',
  animationDuration = 0.5,
  staggerDelay = 0.12,
  isOpen: controlledIsOpen,
  onOpenChange,
}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const isControlled = controlledIsOpen !== undefined;
  const isMenuOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const setMenuOpen = (nextState) => {
    if (!isControlled) {
      setInternalIsOpen(nextState);
    }
    onOpenChange?.(nextState);
    onMenuClick?.(nextState);
  };

  const overlayRef = useRef(null);
  const bubblesRef = useRef([]);
  const labelRefs = useRef([]);

  const menuItems = items?.length ? items : DEFAULT_ITEMS;
  const containerClassName = [
    'bubble-menu',
    useFixedPosition ? 'fixed' : 'absolute',
    !showLogoBubble ? 'bubble-menu--no-logo' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      setShowOverlay(true);
    }
  }, [isMenuOpen]);

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);

    if (!overlay || !bubbles.length) return;

    if (isMenuOpen) {
      gsap.set(overlay, { display: 'flex' });
      gsap.killTweensOf([...bubbles, ...labels]);

      bubbles.forEach((bubble, i) => {
        const rotation = menuItems[i]?.rotation ?? 0;
        gsap.set(bubble, { scale: 0, rotation, transformOrigin: '50% 50%' });
        if (labels[i]) {
          gsap.set(labels[i], { y: 24, autoAlpha: 0 });
        }
      });

      bubbles.forEach((bubble, i) => {
        const rotation = menuItems[i]?.rotation ?? 0;
        const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05);
        const tl = gsap.timeline({ delay });

        tl.to(bubble, {
          scale: 1,
          rotation,
          duration: animationDuration,
          ease: animationEase,
        });

        if (labels[i]) {
          tl.to(
            labels[i],
            {
              y: 0,
              autoAlpha: 1,
              duration: animationDuration,
              ease: 'power3.out',
            },
            `-=${animationDuration * 0.9}`,
          );
        }
      });
    } else if (showOverlay) {
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.to(labels, {
        y: 24,
        autoAlpha: 0,
        duration: 0.2,
        ease: 'power3.in',
      });
      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set(overlay, { display: 'none' });
          setShowOverlay(false);
        },
      });
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay, menuItems]);

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) {
        const bubbles = bubblesRef.current.filter(Boolean);

        bubbles.forEach((bubble, i) => {
          const item = menuItems[i];
          if (bubble && item) {
            gsap.set(bubble, { rotation: item.rotation ?? 0 });
          }
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen, menuItems]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };


  const overlayContent =
    isMenuOpen || showOverlay ? (
      <div
        ref={overlayRef}
        className="bubble-menu-items fixed"
        aria-hidden={!isMenuOpen}
      >
        <ul className="pill-list" role="menu" aria-label="Menu links">
          {menuItems.map((item, idx) => (
            <li key={item.href + item.label} role="none" className="pill-col">
              <Link
                role="menuitem"
                to={item.href}
                aria-label={item.ariaLabel || item.label}
                className="pill-link font-title"
                onClick={handleLinkClick}
                style={{
                  '--item-rot': `${item.rotation ?? 0}deg`,
                  '--pill-bg': menuBg,
                  '--pill-color': menuContentColor,
                  '--hover-bg': item.hoverStyles?.bgColor || '#f3f4f6',
                  '--hover-color': item.hoverStyles?.textColor || menuContentColor,
                }}
                ref={(el) => {
                  if (el) bubblesRef.current[idx] = el;
                }}
              >
                <span
                  className="pill-label"
                  ref={(el) => {
                    if (el) labelRefs.current[idx] = el;
                  }}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ) : null;

  return (
    <>
      <nav className={containerClassName} style={style} aria-label="Main navigation">
        {showLogoBubble && (
          <div className="bubble logo-bubble" aria-label="Logo" style={{ background: menuBg }}>
            <span className="logo-content">
              {typeof logo === 'string' ? (
                <img src={logo} alt="Logo" className="bubble-logo" />
              ) : (
                logo
              )}
            </span>
          </div>
        )}

        <button
          type="button"
          className={`bubble toggle-bubble menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={handleToggle}
          aria-label={isMenuOpen ? 'Cerrar menú de navegación' : menuAriaLabel}
          aria-pressed={isMenuOpen}
          aria-expanded={isMenuOpen}
          style={{ background: menuBg }}
        >
          <span className="menu-line" style={{ background: menuContentColor }} />
          <span className="menu-line short" style={{ background: menuContentColor }} />
        </button>
      </nav>
      {typeof document !== 'undefined' && overlayContent
        ? createPortal(overlayContent, document.body)
        : null}
    </>
  );
}
