// import { describe, expect, test } from "bun:test";
// import type { VitePlugin } from "unplugin";
// import jpg from "../src/vite";
// import { button } from "./fixtures/jade-garden/create/cva";
// import { alert } from "./fixtures/jade-garden/create/sva";
// import { build, getPath, toArray } from "./utils/build-utils";

// describe("vite", async () => {
//   const plugins = toArray(
//     jpg({ entry: getPath("./fixtures/tailwindcss/app.css"), components: { cva: [button], sva: [alert] } })
//   ).map((plugin): VitePlugin => ({ ...plugin, enforce: "pre" }));

//   await build.vite({
//     clearScreen: false,
//     // @ts-expect-error: Type 'Plugin<any>[]' is not assignable to type 'PluginOption'.
//     plugins: [plugins],
//     build: {
//       lib: {
//         entry: getPath("./fixtures/tailwindcss/index.js"),
//         name: "TestLib"
//       },
//       outDir: getPath("./dist"),
//       write: false
//     }
//   });
// });
