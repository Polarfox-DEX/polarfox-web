module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#1C67FE',
          DEFAULT: '#001937'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
