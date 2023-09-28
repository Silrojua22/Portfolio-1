/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px', // Puedes ajustar estos valores según tus necesidades
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      fontFamily: {
        'mono': ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'), // Mueve los plugins dentro del objeto theme -> extend
  ],
};
