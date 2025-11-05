/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'parrot-green': '#32CD32',
        'deep-green': '#16A34A',
        'dark-gray': '#1F2937',
      },
      backgroundImage: {
        'gradient-green': 'linear-gradient(to right, #34d399, #84cc16, #16a34a)',
      },
      boxShadow: {
        'soft-3d': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glow-green': '0 0 20px rgba(50, 205, 50, 0.3)',
      }
    },
  },
  plugins: [],
}