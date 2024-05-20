/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      colors: {
        'primary': '#B73BBE',
        'secondary': '#FCF5FE',
        'primary-900': '#7B2E8B',
        'eminence-200': '#F4D6F8',
        'eminence-700': '#992E9D',
        'woodsmoke-200': '#CFD0D2',
        'woodsmoke-900': '#3B3B3E',
        'woodsmoke-800': '#434347',
        'web-orange-500':'#FFA50B',
        'web-orange-700': '#BB5302',
        'web-orange-300': '#FFF4C5',
        'custom-gradient': 'linear-gradient(180deg, #B73BBE 0%, #992E9D 93.51%)'
      },
      boxShadow: {
        'custom-shadow': '0px 8px 24px -10px #992E9D80',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.custom-gradient': {
          background: 'linear-gradient(180deg, #B73BBE 0%, #992E9D 93.51%)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

