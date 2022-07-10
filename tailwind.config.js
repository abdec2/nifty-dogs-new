const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Alfa': ['Alfa Slab One', ...defaultTheme.fontFamily.sans],
        'Barlow': ['Barlow', ...defaultTheme.fontFamily.sans],
        'Grace': ['Covered By Your Grace', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}