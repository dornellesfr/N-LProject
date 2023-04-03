/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.{js,jsx}',
    'node_modules/flowbite-react/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'whatsapp-green': '#42e960',
        primary: '#00339C',
        secondary: '#de0707',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('./node_modules/flowbite/plugin')],
};
