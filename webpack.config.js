var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: "eval",
  entry: {
    app: [
      "./main.js"
    ]
  },
  output: {
    path: "./",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        query: {
          presets: ['es2015', 'react']
        },
        exclude: [ path.resolve(__dirname, "node_modules") ]
      }
    ]
  }
};
