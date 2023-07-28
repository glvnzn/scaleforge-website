/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rosso-red": "#d70d01",
        black: "#0d0d0d",
        "bright-yellow": "#fcb226",
        carrot: "#f27a0a",
        "mystic-red": "#fd5303",
        white: "#ffffff",
      },
      fontFamily: {
        rubik: ["var(--font-rubik)"],
        "sf-mono": ["var(--font-sf-mono)"],
      },
    },
  },
  plugins: [],
};
