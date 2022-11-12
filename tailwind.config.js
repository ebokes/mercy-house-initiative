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
        bg1: "url('/src/assets/bg1.webp')",
        bg2: "url('/src/assets/bg2.webp')",
        bg3: "url('/src/assets/bg3.webp')",
        // "arrow-gradient": "(to left, rgba())",
      },
    },
  },
  plugins: [],
};
