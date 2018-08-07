const path = require("path");

const ROOT = path.resolve(__dirname, "../");
module.exports = {
  SRC: path.resolve(ROOT, "src"),
  IMAGES: path.resolve(ROOT, "src", "images"),
  DIST: path.resolve(ROOT, "dist"),
  NODE_MODULES: path.resolve(ROOT, "node_modules"),
  TEMPLATE: path.resolve(ROOT, "src", "html", "index.html"),
  FAVICON: path.resolve(ROOT, "src", "html", "favicon.ico"),
  HTML_TITLE: "React Material Skeleton",
  MODE: "development"
};
