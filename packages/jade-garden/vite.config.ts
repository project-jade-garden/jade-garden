import { copyFileSync } from "node:fs";
import { globbySync } from "globby";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: ["./src/class-utils.ts", "./src/cva.ts", "./src/index.ts", "./src/sva.ts"],
      formats: ["cjs", "es"]
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("es-toolkit") || id.includes("clsx") || id.includes("src/utils.ts")) {
            return "utils";
          }
        }
      }
    },
    target: "es2022"
  },
  logLevel: "warn",
  plugins: [
    dts({
      afterBuild: () => {
        const files = globbySync("dist/**.d.ts");
        for (const file of files) {
          copyFileSync(file, file.replace(/\.d\.ts$/, ".d.cts"));
        }
      }
    })
  ],
  resolve: {
    conditions: ["source"]
  }
});
