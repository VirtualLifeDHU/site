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
        text: "#3F3F3F",
        background: "#FAFAFA",
        button: "#151515",
      },
    },
  },
  plugins: [],
};
