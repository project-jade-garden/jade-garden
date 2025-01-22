import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: {
        anatomy: resolve(__dirname, "src/anatomy.ts"),
        "create-docs": resolve(__dirname, "src/create-docs.ts"),
        "create-slots": resolve(__dirname, "src/create-slots.ts"),
        index: resolve(__dirname, "src/index.ts")
      },
      formats: ["cjs", "es"]
    }
  },
  plugins: [
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.json")
    })
  ]
});
