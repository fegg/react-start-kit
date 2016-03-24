var path = require('path');

module.exports = {
  entry: './public/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist'),
    publicPath: '/dist'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
}