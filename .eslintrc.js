const { configure, presets } = require("eslint-kit");

module.exports = configure({
  presets: [
    presets.imports({
      sort: {
        newline: true,
        groups: [
          ["^\\u0000"],
          ["^\\w"],
          ["^@"],
          ["^"],
          ["^\\."],
          [".module.css$"]
        ]
      },
      alias: {
        root: "./src",
        jsconfig: "jsconfig.json"
      }
    }),
    presets.typescript(),
    presets.prettier(),
    presets.node(),
    presets.react({
      version: "detect",
      // (optional) Allows using JSX without importing `React`
      newJSXTransform: true
    })
  ],
  extend: {
    rules: {
      "@typescript-eslint/no-empty-interface": "off"
    }
  }
});
