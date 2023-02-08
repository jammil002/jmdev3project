/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PressStart: ["var(--font-PressStart)", "cursive"],
        BebasNeue: ["var(--font-BebasNeue)", "regular"],
        Montserrat: ["var(--font-Montserrat)", "regular"],
        Oswald: ["var(--font-Oswald)", "regular"],
      },
    },
  },
  plugins: [],
};
