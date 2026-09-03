import { copyFileSync, existsSync, writeFileSync } from "node:fs";

if (!existsSync("out")) {
  throw new Error("Static export output directory `out/` was not found.");
}

writeFileSync("out/.nojekyll", "\n");

if (existsSync("out/opengraph-image")) {
  copyFileSync("out/opengraph-image", "out/opengraph-image.png");
}

if (existsSync("out/404/index.html") && !existsSync("out/404.html")) {
  copyFileSync("out/404/index.html", "out/404.html");
}
