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
        100: '#f3f4f6',
        600: '#4b5563',
        700: '#374151',
        950: '#030712',

      },
      'indigo': {
        100: '#e0e7ff',
        500: '#6366f1',
        600: '#4f46e5',
      },
      'orange':{
        700: '#dc2626',
      },
      'white': '#ffffff',
    }
  },
  plugins: [],
}