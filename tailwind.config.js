/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'light-blue': '#3EE9E5',
      'dark-blue': '#093F68',
      'gray': '#777F98',
      'white': '#FFFFFF',
      'neutral-blue': '#080C20',
      'error': '#FF2965',
    },
    fontSize: {
      'h1': ['48px', {
        lineHeight: '56px',
        fontWeight: '800',
      }],
      'h2': ['40px', {
        fontWeight: '800',
      }],
      'h3': ['32px', {
        fontWeight: '800',
      }],
      'sub-heading': ['18px', {
        fontWeight: '800',
        lineHeight: '25px',
      }],
      'p': ['15px', {
        fontWeight: '500',
        lineHeight: '25px',
      }],
    extend: {
      fontFamily: {
        'sans': ["Manrope"],
      },
    },
  },
  plugins: [],
}
}
