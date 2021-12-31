// const { skewRelative } = require( "party-js/lib/systems/variation" );
const colors = require('tailwindcss/colors');
module.exports = {
  content: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
  mode: 'jit',
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
      },
    },
  },
  plugins: [],
};
