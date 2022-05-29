const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const { resolveTsAliases } = require("resolve-ts-aliases");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

const isDev = process.env.NODE_ENV === "development";

const plugins = [
  new CaseSensitivePathsPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "../src/public/index.html")
  }),
  !isDev && new MiniCssExtractPlugin()
].filter(Boolean);

const modules = {
  rules: [
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
    },
    {
      test: /\.(png|jpg|jpeg|gif|webp)$/i,
      type: "asset/resource",
      use: [
        {
          loader: "image-webpack-loader",
          options: {
            bypassOnDebug: true,
            disable: true,

            mozjpeg: {
              progressive: true,
              quality: 85
            },
            optipng: {
              enabled: false
            },
            pngquant: {
              quality: [0.65, 0.9],
              speed: 4
            },
            gifsicle: {
              interlaced: false
            },
            webp: {
              quality: 75
            }
          }
        }
      ]
    },
    {
      test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
      type: "asset/resource"
    }
  ]
};

module.exports = {
  entry: ["./src/index.ts"],
  module: modules,
  plugins,
  output: {
    path: path.resolve(__dirname, "../root-dist"),
    clean: true
  },
  resolve: {
    extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
    alias: resolveTsAliases(path.resolve(__dirname, "../tsconfig.json"))
  }
};
