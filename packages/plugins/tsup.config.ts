import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "./src/helpers/index.ts",
    "./src/index.ts",
    "./src/plugins/rollup.ts",
    "./src/plugins/rspack.ts",
    "./src/plugins/vite.ts",
    "./src/plugins/webpack.ts"
  ],
  format: ["cjs", "esm"],
  target: "es2022",
  minify: true,
  clean: true,
  dts: true
});
