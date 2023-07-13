const Dotenv = require('dotenv-webpack');

module.exports = {
  // Các cài đặt khác của webpack

  plugins: [
    new Dotenv()
  ]
};
