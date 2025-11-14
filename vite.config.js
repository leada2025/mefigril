/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'parrot-green': '#9ee970',
        'deep-green': '#143202',
        'dark-gray': '#1F2937',
      },
      backgroundImage: {
        'gradient-green': 'linear-gradient(135deg, #9ee970, #143202)',
      },
      boxShadow: {
        'soft-3d': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glow-green': '0 0 20px rgba(158, 233, 112, 0.3)',
      }
    },
  },
  plugins: [],
}