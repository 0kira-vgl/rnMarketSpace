/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        BLUE: {
          900: "#364D9D",
          500: "#647AC7",
        },
        RED: {
          500: "#EE7979",
        },
        GRAY: {
          900: "#1A181B",
          800: "#3E3A40",
          700: "#5F5B62",
          600: "#9F9BA1",
          500: "#D9D8DA",
          400: "#EDECEE",
          300: "#F7F7F8",
        },
      },
    },
  },
  plugins: [],
};
