/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      fontSize: {
        '2xs': '0.65rem',
      },
      textColor: {
        primary: "#1F2937", // gray-800
        secondary: "#6B7280", // gray-500
        tertiary: "#E5E7EB", // gray-200
        white: "#FFF",
        "blue-primary": "#4F46E5" // indigo-600
      },
      colors: {
        primary: "#4F46E5", // indigo-600
        secondary: "#EEF2FF", // indigo-50
        "light-gray": "#F1F5F9",
        "medium-gray": "#E5E7EB",
        white: "#FFF"
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        'dm-sans': ['var(--font-dm-sans)']
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}