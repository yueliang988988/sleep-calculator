/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'mobile': '390px'
      },
      gridTemplateRows: {
        'layout': '45px 1fr 1fr 1fr 1fr'
      },
      gridTemplateColumns: {
        'layout': '120px 1fr 1fr 45%'
      }
    },
  },
  plugins: [],
};
