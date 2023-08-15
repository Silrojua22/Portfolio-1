/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px', // Pequeño
      'md': '768px', // Mediano
      'lg': '1024px', // Grande
      'xl': '1280px', // Extra grande
    }
  },
  plugins: [],
}

