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
      },
      data:{

      }
    },
    screens: {
      xs: '570px',
      sm:"756",
      md: '912px',
      lg: '976px',
      xl: '1440px',
      // sm: '480px',
      // md: '768px',
      // lg: '976px',
      // xl: '1440px',
    },
  },
  plugins: [],
}

