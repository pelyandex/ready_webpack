const spawn = require("cross-spawn");

(async () => {
  const params = ["webpack", "serve", "--progress"];
  params.unshift(`NODE_ENV=development`);
  spawn.sync("cross-env", params, { stdio: "inherit" });
})();
