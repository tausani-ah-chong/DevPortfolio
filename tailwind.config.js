module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        cgrey: '#333333'
      },
      width: {
        c: '630px'
      },
      screens: {
        xl: '1285px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
    // require('@tailwindcss/forms')
  ]
}
