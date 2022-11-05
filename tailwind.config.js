/** @type {import('tailwindcss').Config} */

const { rgbToHex } = require('@mui/material');
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "heading-image": "url(/body5.jpg)",
        "night-sky": "url(/nightsky.jpg)",
      },
      colors: {
        about_section:'rgb(0, 0, .5)',
        stone: colors.warmGray,
        sky: colors.lightBlue,
        neutral: colors.trueGray,
        gray: colors.coolGray,
        slate: colors.blueGray,
        red: colors.red,
        lime: colors.lime,
        cyan: colors.cyan,
        emerald: colors.emerald,
        indigo: colors.indigo,
        fuchsia: colors.fuchsia,
        violet: colors.violet,
        zinc: colors.zinc,
        pink: colors.pink,
        rose: colors.rose,
      },
    },
  },
  plugins: [],
};
