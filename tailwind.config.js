/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "harits-blue-1": "#0C0D22",
        "harits-blue-2": "#19376D",
        "harits-blue-3": "#576CBC",
      },
    },
  },
  plugins: [],
}

