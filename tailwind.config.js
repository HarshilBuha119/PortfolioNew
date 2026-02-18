/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        brand: {
          orange: "#ff4d00",
          gold: "#ffaa00",
        },
      },
      // --- ADD THESE KEYFRAMES ---
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "hide": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-in": {
          from: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
          to: { transform: "translateX(0)" },
        },
        "swipe-out": {
          from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
        },
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite ease-in-out',
        'gradient-x': 'gradient-x 5s ease infinite',
        // --- ADD THESE ANIMATION DEFINITIONS ---
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "hide": "hide 100ms ease-in",
        "slide-in": "slide-in 150ms cubic-bezier(0.21, 1.02, 0.73, 1)",
        "swipe-out": "swipe-out 100ms ease-out",
      },
      dropShadow: {
        'orange-glow': '0 0 20px rgba(255, 77, 0, 0.4)',
        'white-shine': '0 0 15px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};