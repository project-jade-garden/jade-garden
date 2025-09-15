// * For minor version, plugin will not include the commented out packages
// * Install when there is a better understanding of how the Tailwind compiler works
// import { optimize } from "@tailwindcss/node";
// import { compile } from "tailwindcss";
import { existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import type { UnpluginFactory } from "unplugin";
import { createFilter } from "unplugin-utils";
import { writeConfigs, writeStylesheets } from "./generators";
import type { Options } from "./types";

// * Taken from: https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/src/test-utils/run.ts
// const compileCss = async (css: string, candidates: string[] = [], options: Parameters<typeof compile>[1] = {}) => {
//   const { build } = await compile(css, options);
//   return optimize(build(candidates)).trim();
// };

export const factory: UnpluginFactory<Options | undefined, false> = (rawOptions) => {
  const options = {
    clean: rawOptions?.clean ?? false,
    components: rawOptions?.components ?? {},
    configOutput: rawOptions?.configOutput ?? "ts",
    createOptions: rawOptions?.createOptions ?? {},
    entry: rawOptions?.entry ?? process.cwd(),
    metaConfig: rawOptions?.metaConfig ?? {},
    outDir: rawOptions?.outDir ?? "jade-garden",
    silent: rawOptions?.silent ?? false
  } satisfies Required<Options>;
  const filter = createFilter(options.entry);

  return {
    name: "unplugin-jade-garden",
    enforce: "pre",

    transform(_, id) {
      if (!filter(id)) return;

      if (typeof options.components !== "object" || Array.isArray(options.components)) {
        if (!options.silent) {
          console.warn(`\x1b[33m[WARN]: "components" must be a object containing components.\x1b[0m`);
        }
        return;
      }

      const { clean, configOutput, createOptions } = options;
      const fileFormat = createOptions.useStylesheet ? "css" : configOutput;

      // * Get output directory path
      const outDirPath = join(id, `../${options.outDir ?? "jade-garden"}`);

      // * Clean
      if (clean && existsSync(outDirPath)) rmSync(outDirPath, { recursive: true });

      // * Write
      if (fileFormat === "css") writeStylesheets(options, outDirPath);
      else writeConfigs(options, outDirPath);
    }
  };
};
