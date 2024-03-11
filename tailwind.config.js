/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        crimson: {
          100: 'rgb(220,20,60)',
          200: 'rgb(202,18,55)',
          300: 'rgb(184,17,50)',
          400: 'rgb(166,15,45)',
          500: 'rgb(148,13,40)',
          600: 'rgb(130,12,35)',
          700: 'rgb(112,10,31)',
          800: 'rgb(94,9,26)',
          900: 'rgb(76,7,21)'
        }
      },
      fontFamily: {
        'Rubik': ['Rubik']
      },
      keyframes: {
        toBottom: {
          '0%, 16.66%': {transform: 'translateY(-0px)'},
          '16.66%, 33.33%': {transform: 'translateY(-96px)'},
          '33.33%, 50%': {transform: 'translateY(-96px)'},
          '50%, 66.66%': {transform: 'translateY(-192px)'},
          '66.66%, 83.33%': {transform: 'translateY(-192px)'},
          '83.33%, 100%': {transform: 'translateY(-288px)'}
        }
      },
      animation: {
        'toBottom': 'toBottom ease 8s infinite 1s'
      }
    },
  },
  plugins: [],
}