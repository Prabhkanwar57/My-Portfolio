/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enables dark mode toggle via class
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code', 'monospace'], // 👈 add this line
      },
    },
  },
  plugins: [],
}
