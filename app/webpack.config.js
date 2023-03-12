const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: 'src/assets/*',
      },
    ],
  },
};
