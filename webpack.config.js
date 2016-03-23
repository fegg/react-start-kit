var path = require('path');

module.exports = {
  entry: './public/app.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}