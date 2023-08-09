/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner": "url('../public/assets/banner.jpg')",
      },
      colors: {
        hoverColor: "#ffaa17",
        darkRed: "#ea0638",
      },
      padding : {
        "bt-10": "100%",
      },

      margin:{
        "diet":"100%",
      },

    },
  },
  plugins: [],
}
