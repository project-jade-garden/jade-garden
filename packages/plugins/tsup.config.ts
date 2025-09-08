import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts", "./src/rollup.ts", "./src/rspack.ts", "./src/vite.ts", "./src/webpack.ts"],
  format: ["cjs", "esm"],
  target: "es2022",
  minify: true,
  clean: true,
  dts: true
});
