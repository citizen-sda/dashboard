module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8E2DE2',
        secondary: '#263238',
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require('daisyui')],
};
