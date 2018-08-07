const { NODE_MODULES, IMAGES, SRC } = require("./constants");

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: NODE_MODULES,
    loader: "babel-loader"
  },
  {
    test: /\.scss$/,
    use: [
      "style-loader",
      "css-loader?importLoaders=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
      "sass-loader"
    ],
    include: [SRC]
  },
  {
    test: /\.(png|gif|jpg|svg|otf|eot|ttf|woff|woff2)$/,
    include: [IMAGES],
    use: "url-loader?limit=20480&name=assets/[name]-[hash].[ext]"
  }
];
