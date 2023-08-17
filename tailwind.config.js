/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightCream: '#F9F6F0',
        terraCotta: '#CC6A4F',
        sageGreen: '#90A390',
        rustOrange: '#D6693E',
        deepGreen: '#28604F',
        darkCharcoal: '#333333',
      },
    },
  },
  plugins: [],
};
