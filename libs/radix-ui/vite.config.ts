import { copyFileSync } from "node:fs";
import { globbySync } from "globby";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: globbySync("src/*.ts"),
      formats: ["cjs", "es"]
    },
    target: "es2022"
  },
  logLevel: "warn",
  plugins: [
    dts({
      afterBuild: () => {
        globbySync("dist/**.d.ts").map((file) => {
          copyFileSync(file, file.replace(/\.d\.ts$/, ".d.cts"));
        });
      }
    })
  ],
  resolve: {
    conditions: ["source"]
  }
});
