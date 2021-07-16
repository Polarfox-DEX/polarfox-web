const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1200px"
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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
