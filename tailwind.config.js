/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '88': '22rem',
        '104': '26rem'
      },
      width: {

      },
      colors: {
        primaryDark: '#282c34'
      },
      fontFamily: {

      },
      borderRadius: {
        borderCustom: '0 700px 700px 0'
      },
    }
  },
  darkMode: 'class',
  plugins: [],
}

