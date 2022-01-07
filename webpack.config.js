const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins: [ new CompressionPlugin ],
  mode: 'development',
  entry: './client/src/index.js',
  output: {
    path: path.resolve('./client/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
