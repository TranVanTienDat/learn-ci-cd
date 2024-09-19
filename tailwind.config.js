/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      green: "#4CAF4F",
      textColor: "#4D4D4D",
      colorWhite: "#fff",
      textColor2: "#717171",
      backGround: "#E0E0E0",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Roboto", "serif"],
    },

    extend: {
      header: "60px",
    },
  },
  plugins: [],
};
