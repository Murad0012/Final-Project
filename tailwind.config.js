/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    fontSize: {
      'xs': '.75rem',
       'sm': '.875rem',
       'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
       '3xl': '1.875rem',
       '4xl': '2.25rem',
        '5xl': '2.7rem',
        '6xl': '4rem',
       '7xl': '5rem',
    },
      extend: {
      colors:{
        colors:{
          "color1":"#0a090a",
          "color2":"#010001",
          "color3":"#8685ff",
        },
      }
    },
  },
  plugins: [],
}

