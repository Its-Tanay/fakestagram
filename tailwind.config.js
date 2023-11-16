/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'mobile': '320px',
        'tablet': '640px',
        'laptop': '1024px',
        '480px': '480px',
      }
    },
  },
  plugins: [],
}