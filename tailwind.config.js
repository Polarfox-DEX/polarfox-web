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
        gray: "#142B47",
        DEFAULT: '#001937'
      },
      gray: {
        light: '#D8D8D8',
        mid: '#E1E8F1',
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
      opacity: {
        '12': '0.12'
      },
      spacing: {
        '5.5': '1.375rem'
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
