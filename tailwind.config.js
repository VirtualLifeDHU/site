/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      maxWidth: {
        max: "1200px",
      },
      colors: {
        text: "#111111",
        background: "#FAFAFA",
        button: "#151515",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
