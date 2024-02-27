const tailwindtemplate = require('./tailwindtemplate');
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./tailwindtemplate.js')
  ],
  content: ['./src/containers/**/*.{html,js}',
            './src/components/**/*.{html,js}',
            './src/*.{html,js}',
            './public/*.{html,js}'],
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
  },
  plugins: [require("@tailwindcss/forms"),
            require("@tailwindcss/aspect-ratio"),
            require("@tailwindcss/typography"),
            "@tailwindcss/forms/**"
            ],
            
}