const path = require("path");

const devServer = require("./devServer");
const plugins = require("./plugins");
const rules = require("./rules");
const { MODE, SRC, DIST, NODE_MODULES } = require("./constants");

module.exports = {
  mode: MODE,
  devtool: "eval",
  entry: {
    app: ["babel-polyfill", path.resolve(SRC, "index.js")]
  },
  output: {
    path: DIST,
    filename: "[name]-[hash].js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
    modules: [NODE_MODULES]
  },
  devServer,
  plugins,
  module: {
    rules
  }
};
