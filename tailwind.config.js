/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': '350px',
      ...defaultTheme.screens,
      // '2xl': {'max': '1535px'},
      // // => @media (max-width: 1535px) { ... }

      // 'xl': {'max': '1279px'},
      // // => @media (max-width: 1279px) { ... }

      // 'lg': {'max': '1023px'},
      // // => @media (max-width: 1023px) { ... }

      // 'md': {'max': '767px'},
      // // => @media (max-width: 767px) { ... }

      // 'sm': {'max': '600px'},
      // // => @media (max-width: 600px) { ... }

      // 'xs': {'max': '370px'},
      // // => @media (max-width: 370px) { ... }
    },
    extend: {
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
