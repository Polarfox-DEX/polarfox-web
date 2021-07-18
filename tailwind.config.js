const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    container: {
      screens: {
        tablet: '100%',
        laptop: '100%',
        desktop: '1200px',
      },
      padding: {
        DEFAULT: '1.25rem',
        desktop: '0rem'
      }
    },
    colors: {
      blue: {
        light: '#1C67FE',
        DEFAULT: '#001937'
      },
      gray: {
        light: '#D8D8D8',
        DEFAULT: '#4D6481'
      },
      white: colors.white
    },
    extend: {
      fontFamily: {
        publicSans: ['Public Sans', ...defaultTheme.fontFamily.sans],
        switzer: ['Switzer', ...defaultTheme.fontFamily.sans],
        graphik: ['Graphik', ...defaultTheme.fontFamily.sans]
      },
      margin: {
        '22': '5.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
