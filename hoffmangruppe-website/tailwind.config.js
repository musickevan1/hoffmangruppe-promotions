/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'hoff-blue': {
          DEFAULT: '#5E9BAE',
          100: '#E6F0F3',
          200: '#C0D9E1',
          300: '#9AC2CF',
          400: '#74ABBD',
          500: '#5E9BAE',
          600: '#6B9CBA',
          700: '#4A7E8E',
          800: '#37616E',
          900: '#24434E'
        },
        black: '#030000',
        silver: '#C0C0C0',
        white: '#FFFFFF'
      },
      backgroundImage: {
        'hoff-gradient': 'linear-gradient(90deg, #5E9BAE 0%, #6B9CBA 100%)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
