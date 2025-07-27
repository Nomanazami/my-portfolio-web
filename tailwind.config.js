/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode support
  content: ["./src/**/*.{js,jsx}"], // include all JSX files
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        accent: "#2563eb",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
