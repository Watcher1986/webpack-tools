const path = require('path');

module.exports = {
  entry: './src/profile/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
  },
};
