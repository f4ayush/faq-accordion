/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('./src/assets/images/bg-pattern-desktop.svg')",
        'mobile': "url('./src/assets/images/bg-pattern-mobile.svg')",
        'illustration-box-desktop': "url('./src/assets/images/illustration-box-desktop.svg')",
        'illustration-box-mobile': "url('./src/assets/images/illustration-box-mobile.svg')",
        'woman-desktop': "url('./src/assets/images/illustration-woman-online-desktop.svg')",
        'woman-mobile': "url('./src/assets/images/illustration-woman-online-mobile.svg')",
      },
      colors: {
        'soft-violet': 'hsl(273, 75%, 66%)',
        'soft-blue': 'hsl(240, 73%, 65%)',
        "soft-red": 'hsl(14, 88%, 65%)',
        "gray-blue": 'hsl(240, 5%, 91%)',
        "dark-blue": 'hsl(238, 29%, 16%)'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      fontFamily:{
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

