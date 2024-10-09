/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: 'rgb(20, 20, 20)',
          text: '#ddd',
          primary: '#3b82f6',
          secondary: '#8b5cf6',
          accent: '#10b981',
        },
      },
    },
  },
  plugins: [],
}