// Example preset
module.exports = {
    theme: {
      colors: {
        blue: {
          light: '#81AFDD',
          DEFAULT: '#042c54',
          dark: '#031B34',
        },
        gray: {
          darkest: '#040C18',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      extend: {
        flexGrow: {
          2: '2',
          3: '3',
        },
        zIndex: {
          60: '60',
          70: '70',
          80: '80',
          90: '90',
          100: '100',
        },
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }