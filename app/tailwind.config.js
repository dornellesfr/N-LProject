/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.{js,jsx}',
    'node_modules/flowbite-react/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('./node_modules/flowbite/plugin')],
};
