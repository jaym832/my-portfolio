const { spawnSync } = require("child_process");
const path = require("path");

const command = process.argv[2];

if (!command) {
  console.error("Usage: node scripts/react-scripts-compat.js <start|build>");
  process.exit(1);
}

const env = { ...process.env };
const majorNodeVersion = Number(process.versions.node.split(".")[0]);

if (majorNodeVersion >= 17 && !env.NODE_OPTIONS?.includes("--openssl-legacy-provider")) {
  env.NODE_OPTIONS = [env.NODE_OPTIONS, "--openssl-legacy-provider"].filter(Boolean).join(" ");
}

const reactScriptsBin = path.join(
  __dirname,
  "..",
  "node_modules",
  "react-scripts",
  "bin",
  "react-scripts.js"
);

const result = spawnSync(process.execPath, [reactScriptsBin, command], {
  env,
  stdio: "inherit",
});

process.exit(result.status || 0);
