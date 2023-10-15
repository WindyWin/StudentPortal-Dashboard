/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html'
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        "24": "repeat(24, minmax(0, 1fr))"
      },
      gridColumnEnd:{
        "25": "25"
      },
      backgroundColor: {
        "nav": "linear-gradient(0deg, #925FE2 80.26%, rgba(146, 95, 226, 0.00) 143.39%, #E2D4F7 143.39%)"
      }
    },
  },
  plugins: [],
}

