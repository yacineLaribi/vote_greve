/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"], // Matches .html and .js in public and subdirectories
  theme: {
    extend: {
      colors: {
        main: 'rgb(0,128,0)', // main-color
        second: '#141718',   // second-color
        bg: '#3959FF12',     // bg-color
      },
    },
  },
  plugins: [],
};
