/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
       'primary': '#FAFAFA',
       'secondary': '#C7EEFF',
       'lblue': '#0077C0',
       'darkblue': '#1D242B',
     })
  },
  plugins: [],
}

