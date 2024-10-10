/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'violet':{
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9',
      },
      'gray':{
        700: '#374151',
      },
      'indigo': {
        100: '#e0e7ff',
      }
    }
  },
  plugins: [],
}