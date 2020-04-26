"use strict"
const path = require("path")
const defaultSettings = require("./defaults")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  port: defaultSettings.port,
  debug: true,
  devtool: "eval",
  output: {
    path: path.join(__dirname, "/../public"),
    filename: "bundle.js",
    publicPath: `.${defaultSettings.publicPath}`
  },
  resolve: {
    modulesDirectories: [
      "client",
      "node_modules"
    ],
    extensions: ["", ".js", ".jsx"]
  },
  postcss: function () {
    return [
      require("precss"),
      require("autoprefixer")
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
