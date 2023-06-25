/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","src/script.js"],
  theme: {
    extend: {
      fontFamily: {
        'dancing' : ['Dancing Script'],
        'kaushan' : ['Kaushan Script'] ,
        'indie' : ['Indie Flower'],
        'merrie' : ['Merriweather'],
        'roboto' : ['Roboto'],
    }
    },
  },
  plugins: [],
}

