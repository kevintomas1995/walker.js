/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
              elbwalker: {
                DEFAULT: '#01B5E2',
                50: '#01B5E2',
                100: '#01B5E2',
                200: '#01B5E2',
                300: '#01B5E2',
                400: '#01B5E2',
                500: '#01B5E2',
                600: '#01B5E2',
                700: '#015372',
              },
            },
    },
  },
  plugins: [],
}
