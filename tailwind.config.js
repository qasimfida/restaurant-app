/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#25262b',
        light: '#d6d6d6',
        'full-dark': '#1b1c21',
        primary: '#f13d5d',
        grey: '#a0a0a0',
        hr: '#37383d',
      },
      backgroundImage: {
        banner: "url('/banner.jpg')",
      },
    },
  },
  plugins: [],
};
