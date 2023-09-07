/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary: "#64748b",
      },
      fontFamily: {
        inter: "Inter",
      },
    },
  },
  plugins: [],
};
