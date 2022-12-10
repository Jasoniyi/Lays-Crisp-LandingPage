/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "find-store": "url('/src/assets/cta.png')",
      },
    },
  },
  plugins: [],
};
