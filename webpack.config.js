const { merge } = require("webpack-merge");

const commonConfig = require("./config/webpack.common");

module.exports = () => {
  const env = process.env.NODE_ENV;
  console.log(env);
  switch (env) {
    case "development":
      return merge(commonConfig, require("./config/webpack.dev"));
    case "production":
      return merge(commonConfig, require("./config/webpack.prod"));
    case "semi-build":
      return merge(commonConfig, require("./config/webpack.semi"));
    default:
      throw new Error("No matching configuration was found!");
  }
};
