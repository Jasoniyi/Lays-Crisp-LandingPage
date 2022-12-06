/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        laysBlue: "80E2FF",
        laysYellow: "FFD36A",
        laysBlack: "FFD36A",
        laysLightBlue: "rgba(2,181,234,0.2)",
      },
    },
  },
  plugins: [],
};
