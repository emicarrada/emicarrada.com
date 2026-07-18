export const ENABLE_BUBBLE_MENU = true;

export const BUBBLE_MENU_THEME = {
  menuBg: '#061b3a',
  menuContentColor: '#ffffff',
  animationEase: 'back.out(1.5)',
  animationDuration: 0.5,
  staggerDelay: 0.12,
};

export const BUBBLE_MENU_ITEMS = [
  {
    label: 'proyectos',
    href: '/proyectos',
    ariaLabel: 'Proyectos',
    rotation: -8,
    hoverStyles: { bgColor: '#FF8200', textColor: '#041737' },
  },
  {
    label: 'blog',
    href: '/blog',
    ariaLabel: 'Blog',
    rotation: 8,
    hoverStyles: { bgColor: '#FF8200', textColor: '#041737' },
  },
];
