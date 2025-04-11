import { existsSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "tsdown";

const __dirname = join(dirname(fileURLToPath(import.meta.url)));

export default defineConfig({
  entry: [
    // "./src/esbuild.ts",
    "./src/index.ts",
    "./src/rollup.ts",
    "./src/rspack.ts",
    "./src/vite.ts",
    "./src/webpack.ts"
  ],
  format: ["cjs", "es"],
  target: "es2022",
  onSuccess: () => {
    const outputDir = `${__dirname}/jade-garden`;

    if (existsSync(outputDir)) {
      rmSync(outputDir, { recursive: true, force: true });
    }
  },
  minify: true,
  clean: true,
  dts: true
});
