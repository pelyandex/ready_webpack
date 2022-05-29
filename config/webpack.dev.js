const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const plugins = [new ForkTsCheckerWebpackPlugin()];

module.exports = {
  entry: ["react-hot-loader/patch"],
  mode: "development",
  devtool: "source-map",
  plugins,
  output: {
    filename: "[name].js"
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  optimization: {
    chunkIds: "named",
    usedExports: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    open: ["/"]
  }
};
