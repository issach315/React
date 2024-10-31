/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5f6fff', // Your primary color
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill , minmax(200px ,1fr))'
      }
    },
  },
  plugins: [],
};
