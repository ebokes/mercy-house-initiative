/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#04CF9F",
        color2: "#F8F8F8",
        color3: "#000000",
        color4: "#FFFFFF",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        medic: " url('/src/assets/medication.webp')",
        bg1: "linear-gradient(to left, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/src/assets/main-bg1.webp')",
        bg2: "linear-gradient(to left, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/src/assets/main-bg2.webp')",
        bg3: "linear-gradient(to left, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/src/assets/main-bg3.webp')",
        bg4: "linear-gradient(to left, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/src/assets/main-bg4.webp')",
        // map: "url('/src/assets/World Map.svg')",
        // "arrow-gradient": "(to left, rgba())",
      },
    },
  },
  plugins: [],
};
