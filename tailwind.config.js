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
        bgGradation:
          "linear-gradient( 0deg, #f2c5eb 42.76%, #5bc9f9 69.18%,#ff75d0 97.79%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
