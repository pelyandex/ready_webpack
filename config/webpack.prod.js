const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const getPlugins = () => {
  const plugins = [new CssMinimizerPlugin()];
  if (process.env.NODE_ANALYZE) {
    plugins.unshift(new BundleAnalyzerPlugin({ mode: "server" }));
  }

  return plugins;
};

module.exports = {
  mode: "production",
  stats: "errors-only",
  plugins: getPlugins(),
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js"
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    usedExports: false,
    splitChunks: {
      name: false,
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
};
