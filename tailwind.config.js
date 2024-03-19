/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors: {
        backPageColor: "#1d2029",
        darkParagraph: "#8c91b7",
        lightParagraph: "#61616b",
      },
    },
  },
  plugins: [],
};
