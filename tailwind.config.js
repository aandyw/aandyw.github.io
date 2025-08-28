/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'normal': '300', // Make "normal" weight be 300 instead of 400
      },
      colors: {
        'accent-purple': {
          DEFAULT: '#a855f7',
          hover: '#9333ea'
        },
      },
    },
  },
  plugins: [],
}
