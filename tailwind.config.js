/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'white': '#F5F3F4',
        'black': '#0B090A',
        'reddish': '#E5383B',
        'bluish': '#669BBC',
        'darkGray': '#161A1D',
        'darkReddish': '#A4161A',
        'darkBluish': '#003049'
      }
    },
  },
  plugins: [],
};
