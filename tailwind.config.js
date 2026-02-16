/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        brand: {
          orange: "#ff4d00",
          gold: "#ffaa00",
        }
      },
      dropShadow: {
        'orange-glow': '0 0 20px rgba(255, 77, 0, 0.4)',
        'white-shine': '0 0 15px rgba(255, 255, 255, 0.5)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite ease-in-out',
        'gradient-x': 'gradient-x 5s ease infinite',
      }
    },
  },
  plugins: [],
};