/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003366', // Deep Blue
          light: '#004d99',
          dark: '#001a33',
        },
        accent: {
          DEFAULT: '#e6f0ff', // Light Blue
          dark: '#1a334d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
