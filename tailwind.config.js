/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "iowan-old-style": ["Iowan Old Style BT", "serif"],
      },
      colors: {
        "accent-purple": {
          DEFAULT: "#a855f7",
          hover: "#9333ea",
        },
      },
    },
  },
  plugins: [],
};
