var debug = process.env.NODE_ENV !== "production";
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname + "/",
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/main.js",
  resolve: {
    modulesDirectories: ['node_modules', path.resolve('.', 'node_modules')]
  },
  output: {
		filename: "index.min.js",
		path: __dirname + "/build",
		publicPath: "/build/"
	},
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ["transform-decorators-legacy"]
        }
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract("style-loader","css-loader")
      }
    ]
  },
  plugins: debug ?
   [
     new ExtractTextPlugin("styles.css")
   ] :
   [
     new webpack.DefinePlugin({
       "process.env": {
         NODE_ENV: JSON.stringify("production")
      }
     }),
     new ExtractTextPlugin("styles.css"),
     new webpack.optimize.DedupePlugin(),
     new webpack.optimize.OccurenceOrderPlugin(),
     new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
  ]
}
