const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          800: '#2b2a33'
        },
        red: colors.rose
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
