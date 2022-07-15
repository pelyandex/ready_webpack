module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic"
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        version: "7.0.0-beta.0"
      }
    ],
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true
      },
      "antd"
    ],
    [
      "import",
      {
        libraryName: "lodash",
        libraryDirectory: "",
        camel2DashComponentName: false
      }
    ]
  ],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    },
    development: {
      plugins: ["react-refresh/babel"]
    }
  }
};
