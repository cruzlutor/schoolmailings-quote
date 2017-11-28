const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'postcss-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("build.css"),
  ],

  devServer: {
    disableHostCheck: true,
    publicPath: "/dist/",
    host: '0.0.0.0',
    compress: true,
    port: 9000
  }
};