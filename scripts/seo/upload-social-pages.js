const path = require("path");
const { spawnSync } = require("child_process");

const BUCKET = "chuckfresco";
const buildRoot = path.resolve(__dirname, "../../apps/chuckfresco.com/build");
const manifest = require(path.join(buildRoot, ".social-pages/manifest.json"));

manifest.forEach(({ route, key, file }) => {
  const result = spawnSync(
    "aws",
    [
      "s3api",
      "put-object",
      "--bucket",
      BUCKET,
      "--key",
      key,
      "--body",
      path.join(buildRoot, file),
      "--content-type",
      "text/html; charset=utf-8",
      "--cache-control",
      "public, max-age=300",
      "--acl",
      "public-read"
    ],
    { stdio: "inherit" }
  );

  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`Failed to upload crawler HTML for ${route}`);
  }
});

console.log(`Uploaded crawler metadata HTML for ${manifest.length} routes.`);
