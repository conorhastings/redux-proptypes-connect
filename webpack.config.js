var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname),
  devtool: 'source-map',
  entry: {
        app: "./src/app.js"
    },
  output: {
    path: path.join(__dirname) + '/public',
    filename: "[name].js"
  },
  module: {
      loaders: [{
          test: /\.js?$/,
          loader: 'babel',
          query: {
            presets: ['react', 'es2015'],
            plugins: ['transform-object-rest-spread']
          },
          include: path.join(__dirname) + '/src'
      }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};