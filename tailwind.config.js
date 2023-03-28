/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': 'rgba(15, 15, 15, 1)',
        'border': 'rgba(255,255,255,0.1)',
        'shadow': 'rgba(25, 25, 25, 1)',
        'background': 'rgb(20,20,20)'
      },
      fontFamily: {
        'logo': '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"; ',
        'main': "'M PLUS Rounded 1c', sans-serif"
      },
      fontWeight: {
        'bio' : '600'
      },
      boxShadow:{
        'test': 'inset -5px 3px 19px 15px rgba(0,0,0,0.72) '
      }
    },
  },
  plugins: [],
}