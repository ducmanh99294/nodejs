/** @type {import('tailwindcss').Config} */
export default {
  content: [".views/**/*.{ejs,htmlm,js}"],
  mod: [],
  theme: {
    extend: { fontFamily: {
      sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
    },
  },
  },
  plugins: [],
}

