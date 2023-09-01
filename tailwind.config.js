/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '426px',      // Min value for tablet size
        'lg': '1024px', // Min value for web size
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            ".prose h1, h2, h3, h4, h5, h6": {
              marginTop: "0px",
              marginBottom: "24px",
            },
            ".prose ul": {
              paddingBottom: "20px",
              "> li": {
                paddingLeft: ".1rem",
                marginBottom: "-1em",
              },
              "> li::marker": {
                color: "rgba(13,13,13, .8)",
                fontSize: "larger", // Change the dot color here
              },
            },
          },
        },
      }),
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
  plugins: [require("@tailwindcss/typography")],
};
