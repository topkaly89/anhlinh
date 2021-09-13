module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'background': '#3f3f3f',
      'backgroundAction': '#383838'
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
