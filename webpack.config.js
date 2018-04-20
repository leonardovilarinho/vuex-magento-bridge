const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new UglifyJsPlugin({
      test: /\.js($|\?)/i
    })
  ],
  module: {
    rules: [
    	{
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve('src')],
        exclude: [path.resolve('node_modules')]
      }
    ]
  }
}