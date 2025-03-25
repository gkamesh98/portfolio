/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tech-blue': '#1E90FF',
        'tech-green': '#32CD32',
      },
      backgroundImage: {
        'gradient-tech': 'linear-gradient(to right, #1E90FF, #32CD32)',
      },
      boxShadow: {
        'tech-glow': '0 0 15px rgba(50, 205, 50, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
      }
    },
  },
  plugins: [],
}