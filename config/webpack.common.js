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
              modifyVars: {
                "primary-color": "#00bb57",
                "info-color": "#ff9c44",
                "body-background": "#fff",
                "component-background": "#fff",
                "font-family": "Roboto",
                "code-family":
                  "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
                "heading-color": "var(--text-color-primary)",
                "text-color": "var(--text-color-primary)",
                "text-color-secondary": "fade(#000, 45%)",
                "heading-color-dark": "fade(#fff, 100%)",
                "text-color-dark": "fade(#fff, 85%)",
                "text-color-secondary-dark": "fade(#fff, 65%)",
                "font-size-base": "14px",
                "font-size-lg": "@font-size-base",
                "font-size-sm": "12px",
                "line-height-base": "1.5",
                "border-radius-base": "4px",
                "border-radius-sm": "2px",
                "border-color-base": "var(--grey-color-3)",

                // // Menu
                // // ---

                "menu-bg": "transparent",
                "menu-item-color": "var(--text-color-primary)",
                "menu-highlight-color": "var(--text-color-primary)",
                "menu-item-active-bg": "var(--grey-color-2)",
                "menu-inline-toplevel-item-height": "32px",
                "menu-item-height": "32px",

                // // Buttons
                "btn-font-weight": "400",
                "btn-border-radius-base": "6px",
                "btn-primary-color": "#fff",
                "btn-primary-bg": "var(--brand-color-normal)",
                "btn-default-color": "var(--brand-color-dark)",
                "btn-default-bg": "#fff",
                "btn-default-border": "#fff",
                // "btn-danger-color": "@error-color",
                // "btn-danger-bg": "@background-color-base",
                // "btn-danger-border": "@border-color-base",

                // // Collapse
                // // ---
                "collapse-header-padding": "12px 32px 11px 24px",
                // "collapse-header-bg":"var(--grey-color-3)",
                "collapse-header-bg": "#fff",
                "collapse-content-padding": "24px",
                "collapse-content-bg": "var(--grey-color-1)",

                // // Form
                // // ---
                // "label-required-color": "@highlight-color",
                // "label-color": "@heading-color",
                "form-item-margin-bottom": "0",
                "form-item-trailing-colon": "true",
                "form-vertical-label-padding": "0 0 8px",
                "form-vertical-label-margin": "0",

                // // Input
                // // ---
                "input-height-base": "32px",
                "input-height-lg": "40px",
                // "input-padding-horizontal": "@control-padding-horizontal - 1px",
                // "input-padding-horizontal-base": "@input-padding-horizontal",
                // "input-padding-horizontal-sm":
                //   "@control-padding-horizontal-sm - 1px",
                // "input-padding-horizontal-lg": "@input-padding-horizontal",
                "input-padding-vertical-base": "4px",
                "input-padding-vertical-sm": "1px",
                "input-padding-vertical-lg": "6px",
                "input-placeholder-color": "hsv(0, 0, 75%)",
                // "input-color": "@text-color",
                "input-bg": "#fff",
                // "input-addon-bg": "@background-color-light",
                // "input-hover-border-color": "@primary-color",
                "input-disabled-bg": "var(--disabled-field)",
                "input-outline-offset": "0 0",

                // // Tabs
                // // ---
                // "tabs-card-head-background": "@background-color-light",
                "tabs-card-height": "40px",
                // "tabs-card-active-color": "@primary-color",
                // "tabs-title-font-size": "@font-size-base",
                // "tabs-title-font-size-lg": "@font-size-lg",
                // "tabs-title-font-size-sm": "@font-size-base",
                "tabs-ink-bar-color": "var(--brand-color-orange)",
                "tabs-bar-margin": "0 0 16px 0",
                "tabs-horizontal-margin": "0 32px 0 0",
                "tabs-horizontal-padding": "12px 16px",
                "tabs-vertical-padding": "8px 24px",
                "tabs-vertical-margin": "0 0 16px 0",
                "tabs-scrolling-size": "32px",
                "tabs-highlight-color": "var(--text-color-primary)",
                "tabs-hover-color": "var(--text-color-primary)",
                // "tabs-active-color": "@primary-7",

                // // Tree
                // // ---
                "tree-title-height": "32px",
                "tree-child-padding": "31px",
                "tree-directory-selected-color": "#fff",
                "tree-directory-selected-bg": "var(--grey-color-2)",

                // // Modal
                // // --
                "modal-mask-bg": "rgba(0, 0, 0, 0.24)",

                // // Checkbox
                "checkbox-size": "18px",
                // "checkbox-color": "@primary-color",
                "checkbox-check-color": "#fff",

                // // Spin
                // // ---
                "spin-dot-size-sm": "20px",
                "spin-dot-size": "35px",
                "spin-dot-size-lg": "70px",

                // // Layout
                "layout-body-background": "#f0f2f5",
                "layout-header-background": "#001529",
                // "layout-footer-background": "@layout-body-background",
                "layout-header-height": "100%",
                "layout-header-padding": "10px 50px",
                "layout-footer-padding": "24px 50px",
                "layout-sider-background": "transparent",
                "layout-trigger-height": "48px",
                "layout-trigger-background": "#002140",
                "layout-trigger-color": "#fff",
                "layout-zero-trigger-width": "36px",
                "layout-zero-trigger-height": "42px",

                // // Layout light theme
                "layout-sider-background-light": "#fff",
                "layout-trigger-background-light": "#fff"
                // "layout-trigger-color-light": "@text-color"
              },
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
