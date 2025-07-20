/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'hero-blue': '#041737',
        'primary': '#041737',
        'loader-orange': '#FF6B00',
        'neutral': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          800: '#262626',
        },
      },
      fontFamily: {
        sans: ['Be Vietnam', 'Inter', 'ui-sans-serif', 'system-ui'],
        title: ['Null', 'Be Vietnam', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
