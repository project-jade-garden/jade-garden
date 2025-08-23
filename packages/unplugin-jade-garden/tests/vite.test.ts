import { describe, expect, test } from "bun:test";
import type { VitePlugin } from "unplugin";
import jadeGardenPlugin from "../src/plugins/vite";
import { buttonConfig } from "./fixtures/jade-garden/cva";
import { alertConfig } from "./fixtures/jade-garden/sva";
import { build, getPath, toArray } from "./utils/build-utils";

describe.skip("vite", async () => {
  const plugins = toArray(
    jadeGardenPlugin({
      entry: getPath("./fixtures/tailwindcss/app.css"),
      components: {
        cva: [buttonConfig],
        sva: [alertConfig]
      }
    })
  ).map((plugin): VitePlugin => ({ ...plugin, enforce: "pre" }));

  await build.vite({
    clearScreen: false,
    plugins: [plugins],
    build: {
      lib: {
        entry: getPath("./fixtures/tailwindcss/index.js"),
        name: "TestLib"
      },
      outDir: getPath("./dist"),
      write: false
    }
  });
});
