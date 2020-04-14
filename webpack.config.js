const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const RemovePlugin = require("remove-files-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./example/src/index.js",
  output: {
    path: path.resolve(__dirname, "./example"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./example/src/_template.html",
      filename: "index.html",
    }),
  ],
};
