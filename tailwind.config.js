/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out',
        shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
      },
    },
  },
  plugins: [],
};