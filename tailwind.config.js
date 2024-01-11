/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',],
  darkMode: 'media',
  theme: {
    extend: {
      ringColor: {
        'default': '#93c5fd', // default focus ring color
        'error': '#f87171', // custom error focus ring color
      },
      colors: {
        primary: '#F57C00',
        primarylight: '#FF9800',
        primarydark: '#E65100',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

