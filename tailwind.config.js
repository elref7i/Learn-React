/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,css,ts,tsx}', './index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
};
