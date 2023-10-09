/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0C134F',
        'secondary': '#1D267D',
        'tertiary': '#D4ADFC',
        'fouth': ''
      },
      textColor: {
        'primary': '#ffffff',
        'secondary': '#e0e0e0',
        'tertiary': '#b3b3b3',
        'unique': '#0C134F'
      }
    },
  },
  plugins: [],
}