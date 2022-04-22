module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Bungee', 'cursive'],
      abel: ['Abel', 'san-serif'],
      boogaloo: ['Boogaloo', 'cursive'],
    },
    extend: {},
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
