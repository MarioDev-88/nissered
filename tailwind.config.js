module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundImage:{
      'inicio-pattern':"url(https://firebasestorage.googleapis.com/v0/b/nisse-red.appspot.com/o/bg4.jpeg?alt=media&token=19be4064-e216-4206-a413-001dc4c8cef3)"
    },
    backgroundColor:{
      'navbar':'#1E1E1E'
    },
    colors: {
      'gris': '#FFFFFF',
      'rosa': '#cb0708'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
