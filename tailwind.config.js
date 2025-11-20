/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
          primary: "#EDE6FF",
          secondary: "#39374F",
          ternary: "#6065C0",
          quaternary: "#FDFDFF",  
      },
    },
  },
  plugins: [],
}

