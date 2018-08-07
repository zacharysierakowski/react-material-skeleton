const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { MODE, TEMPLATE, HTML_TITLE, FAVICON } = require("./constants");

module.exports = [
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(MODE)
  }),
  new HtmlWebpackPlugin({
    title: HTML_TITLE,
    template: TEMPLATE,
    favicon: FAVICON
  })
];
