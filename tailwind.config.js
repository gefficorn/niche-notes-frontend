const tailwindtemplate = require('./tailwindtemplate');
const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./tailwindtemplate.js')
  ],
  content: ['./src/containers/**/*.{html,js,jsx}',
            './src/components/**/*.{html,js,jsx}',
            './src/*.{html,js,jsx}',
            './public/*.{html,js,jsx}'],
  theme: {
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        green: colors.green,
        blue: colors.blue,
        yellow: colors.yellow,
        red: colors.red,
    }
  },
  plugins: [require("@tailwindcss/forms"),
            require("@tailwindcss/aspect-ratio"),
            require("@tailwindcss/typography"),
            "@tailwindcss/forms/**"
            ],
            
}