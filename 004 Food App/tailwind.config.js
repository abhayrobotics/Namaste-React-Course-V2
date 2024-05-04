/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main-color":"var(--main-color)",
        "second-color":"var(--second-color)"
      }
    },
  },
  plugins: [],
}

