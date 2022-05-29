module.exports = {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: false,
    chunkIds: "named"
  },
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js"
  }
};
