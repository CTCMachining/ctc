/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',],
  theme: {
    extend: {
      ringColor: {
        'default': '#93c5fd', // default focus ring color
        'error': '#f87171', // custom error focus ring color
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

