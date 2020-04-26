"use strict"

const path = require("path")
const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const baseConfig = require("./base")
const defaultSettings = require("./defaults")
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = Object.assign({}, baseConfig, {
  entry: path.join(__dirname, "../client/app.js"),
  cache: false,
  devtool: "null",
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": "production",
      "process.env.DEV": process.env.DEV || false
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("./css/style.css"),
    new CleanWebpackPlugin()
  ],
  module: defaultSettings.getDefaultModules()
})

module.exports = config
