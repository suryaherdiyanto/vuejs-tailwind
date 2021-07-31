module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': [ '"Poppins"', '"Open Sans"', '"Roboto"', 'sans-serif']
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      borderColor: ['before', 'after', 'group-focus', 'group-hover'],
      borderWidth: ['before', 'after', 'group-focus'],
      position: ['before', 'after'],
      width: ['before', 'after'],
      height: ['before', 'after'],
      transform: ['before']
    },
  },
  plugins: [],
}
