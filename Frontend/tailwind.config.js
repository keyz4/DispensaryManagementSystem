/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'proGreen' : '#059dac',
        'proGray' : '#7a7a7a',
        'proIndigo' : '#062cac',
        'proBlack' : '#181818',
        'proWhite' : '#f9f9f9',
        'proViolet' : '#4f57bc',
        'proGray2' : '#797979',
      }
    },
  },
  plugins: [],
}