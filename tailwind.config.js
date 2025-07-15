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
      },
      fontFamily: {
        sans: ['Be Vietnam', 'Inter', 'ui-sans-serif', 'system-ui'],
        title: ['Null', 'Be Vietnam', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
