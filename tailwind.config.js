/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blur_bg_color: '#ffffff10'
      },

      backgroundImage: {
        'encodes': "url('/backgrounds/binary.jpg')",
        'hexcode': "url('/backgrounds/hex.png')",
        "gcalc":"url('/backgrounds/gcalc.webp')",
        'ravm':"url('/backgrounds/ravm.webp')"
      },

      aspectRatio:{
        'two_one': '2 / 1',
        'three_two': '3 / 2'
      },
      width:{
        128:'32rem'
      },

      transitionProperty: {
        'width': 'width',
        'height':'height'
      },
      
      padding:{
        text_field:'4px'
      }
    },
  },
  plugins: [],
}

