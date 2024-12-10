/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Adjust to match your file structure
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
