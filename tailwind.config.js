module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': [ 'Cabin', 'Lato', 'Nunito Sans', 'Open Sans', 'Roboto', 'sans-serif']
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    },
  },
  plugins: [],
}
