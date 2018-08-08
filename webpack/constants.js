const path = require("path");

const ROOT = path.resolve(__dirname, "../");
module.exports = {
  SRC: path.resolve(ROOT, "src"),
  ASSETS: path.resolve(ROOT, "src", "assets"),
  DIST: path.resolve(ROOT, "dist"),
  NODE_MODULES: path.resolve(ROOT, "node_modules"),
  TEMPLATE: path.resolve(ROOT, "src", "index.html"),
  FAVICON: path.resolve(ROOT, "src", "assets", "favicon.ico"),
  HTML_TITLE: "React Sass Skeleton",
  MODE: "development"
};
