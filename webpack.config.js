const { resolveTsAliases } = require("resolve-ts-aliases");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const { DefinePlugin } = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { ContextReplacementPlugin } = require("webpack");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const path = require("path");

const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";
const isAnalyze = process.env.NODE_ENV === "analyze";
const isSemiBuild = process.env.NODE_ENV === "semi-build";

const getPlugins = () => {
  let plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/public/index.html")
    }),
    new DefinePlugin({
      __DEV__: isDev
    })
  ];

  if (isDev) {
    plugins = plugins.concat([
      new CaseSensitivePathsPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new ReactRefreshWebpackPlugin()
    ]);
  }

  if (isProd || isAnalyze || isSemiBuild) {
    plugins = plugins.concat([
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        ignoreOrder: true
      }),
      new CssMinimizerPlugin(),
      new ContextReplacementPlugin(/moment[/\\]locale$/, /en/)
    ]);
  }

  if (isAnalyze) {
    plugins.unshift(new BundleAnalyzerPlugin({ mode: "server" }));
  }

  return plugins;
};

const getModules = () => {
  const rules = [
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false
      }
    },
    {
      test: /\.[jt]sx?$/,
      exclude: /node_modules/,
      use: ["babel-loader"]
    },

    {
      test: /\.(woff(2)?|eot|ttf|otf|png|jpg|jpeg|gif|webp)$/,
      type: "asset/resource"
    },
    {
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    },
    {
      test: /\.module\.css$/,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "[path][local]"
            }
          }
        },
        "postcss-loader"
      ]
    },
    {
      test: /\.(css|less)$/,
      sideEffects: true,
      exclude: /\.module\.css$/,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            importLoaders: 2
          }
        },
        "postcss-loader",
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }
      ]
    }
  ];
  return { rules };
};

const getOutput = () => {
  const output = {
    clean: true,
    path: path.resolve(__dirname, "./dist"),
    pathinfo: false
  };

  if (isProd || isSemiBuild) {
    output.filename = "[name].[contenthash].js";
    output.chunkFilename = "[name].[contenthash].js";
  } else {
    output.filename = "[name].js";
  }
  return output;
};

const getOptimizations = () => {
  const optimization = {
    innerGraph: true,
    sideEffects: true,
    usedExports: true
  };

  if (isDev || isAnalyze || isSemiBuild) {
    optimization.chunkIds = "named";
  }
  if (isSemiBuild) {
    optimization.minimize = false;
  }

  return optimization;
};

const getDevtools = () => {
  return isDev || isSemiBuild ? "source-map" : undefined;
};

const getMode = () => (isDev ? "development" : "production");

module.exports = {
  entry: "./src/index.tsx",
  mode: getMode(),
  devtool: getDevtools(),
  module: getModules(),
  plugins: getPlugins(),
  output: getOutput(),
  optimization: getOptimizations(),
  resolve: {
    extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
    fallback: {
      path: require.resolve("path-browserify"),
      url: require.resolve("url")
    },
    alias: resolveTsAliases(path.resolve(__dirname, "./tsconfig.json"))
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
