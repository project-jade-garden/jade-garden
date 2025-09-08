// * For minor version, plugin will not include the commented out packages
// * Install when there is a better understanding of how the Tailwind compiler works
// import { optimize } from "@tailwindcss/node";
// import { compile } from "tailwindcss";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { isEqual, kebabCase } from "es-toolkit";
import type { UnpluginFactory } from "unplugin";
import { createFilter } from "unplugin-utils";
import { generateCVAStyles } from "./generators/cva";
import { generateSVAStyles } from "./generators/sva";
import type { CVA, Options, StyleConfigs, SVA } from "./types";

// * Taken from: https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/src/test-utils/run.ts
// const compileCss = async (css: string, candidates: string[] = [], options: Parameters<typeof compile>[1] = {}) => {
//   const { build } = await compile(css, options);
//   return optimize(build(candidates)).trim();
// };

const buildCache = new Map<string, CVA | SVA>();

export const factory: UnpluginFactory<Options | undefined, false> = (rawOptions) => {
  const options = {
    build: rawOptions?.build ?? {},
    styleConfigs: rawOptions?.styleConfigs ?? {},
    entry: rawOptions?.entry ?? "",
    classNameConfig: rawOptions?.classNameConfig ?? {}
  } satisfies Required<Options>;
  const filter = createFilter(options.entry);
  const cache = options.build.cache ?? true;
  const clean = options.build.clean ?? false;
  // const compile = options.build.compile ?? false;
  const maxDepth = options.build.maxDepth ?? 5;

  // let tailwindImport = "";

  const walkConfigs = (
    root: StyleConfigs,
    fn: (args: { depth: number; isArray: boolean; path: string[]; value: (CVA | SVA)[] | StyleConfigs }) => void
  ): void => {
    const walk = (obj: StyleConfigs, depth = 0, path: string[] = []) => {
      // * Add one to walk
      depth += 1;

      if (depth >= maxDepth) {
        throw new Error(
          `\nThe "styleConfigs" prop exceeds the max depth of ${maxDepth}.\nUpdate the "maxDepth" property, if necessary.`
        );
      }

      for (const key of Object.keys(obj)) {
        const value = obj[key];

        if (typeof value === "object" && !Array.isArray(value)) {
          fn({ depth, isArray: false, path: [...path, ...[key]], value });

          // * Continue walk
          walk(value, depth, [...path, ...[key]]);
        } else if (Array.isArray(value)) {
          fn({ depth, isArray: true, path: [...path, ...[key]], value });
        } else {
          throw new Error(`\nThe "styleConfigs" prop at ${path.join(".")} contains an invalid value:\n${typeof value}`);
        }
      }
    };

    walk(root);
  };

  return {
    name: "unplugin-jade-garden",
    enforce: "pre",

    transform(_, id) {
      if (!filter(id)) return;

      // * Warn if "compile" is true and code does not include "@theme", and set default import
      // if (options.compile && !_.includes("@theme")) {
      //   console.warn(`\n\x1b[33m[WARN]: "entry" file does not contain a theme; setting to default theme.\x1b[0m`);
      //   tailwindImport = '@import "tailwindcss";';
      // }

      if (typeof options.styleConfigs !== "object" || Array.isArray(options.styleConfigs)) {
        throw new Error(`\nThe "styleConfigs" prop must be objects containing arrays of CVA and SVA configurations.`);
      }

      const outDir = join(id, `../${options.build.outDir ?? "jade-garden"}`);

      if (clean && existsSync(outDir)) {
        rmSync(outDir, { recursive: true });
      }

      walkConfigs(options.styleConfigs, ({ isArray, path, value }) => {
        if (isArray) {
          const configsArr = value as (CVA | SVA)[];
          const dir = `${outDir}/${path.join("/")}`;

          if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

          const objKeys = path.join(".");

          const configNames: Record<string, number> = {};
          let indexFile = "";
          for (const config of configsArr) {
            const name = config.name;

            if (!name) {
              console.warn(`\x1b[33m[WARN]: The config in "${objKeys}" requires a "name" property.\x1b[0m`);
              console.info(`\x1b[36mConfig:\n${JSON.stringify(config, null, "\t")}\x1b[0m`);
              continue;
            }

            // * Resolve name conflicts
            const fileName = kebabCase(name);
            if (Object.hasOwn(configNames, name)) {
              // const newFileName = `${fileName}-${configNames[fileName]}`;
              console.warn(
                `\x1b[33m[WARN]: Duplicate "name" property detected. Rename ${name} to output CSS file.\x1b[0m`
              );
              console.info(`\x1b[36mConfig:\n${JSON.stringify(config, null, "\t")}\x1b[0m`);

              // fileName = newFileName;
              configNames[name] += 1;

              // ! While we can rename the output files and CSS,
              // ! it will cause a bug due to `getClasses` being unaware of the changes.
              continue;
            } else {
              configNames[name] = 1;
            }

            const outputPath = `${dir}/${fileName}.css`;

            if (
              cache &&
              existsSync(outputPath) &&
              buildCache.has(outputPath) &&
              isEqual(buildCache.get(outputPath), config)
            ) {
              continue;
            }

            if ("base" in config) {
              if (cache) buildCache.set(outputPath, config);

              indexFile += `@import "./${fileName}.css";\n`;
              writeFileSync(outputPath, generateCVAStyles(config, options.classNameConfig));
            } else if ("slots" in config) {
              if (cache) buildCache.set(outputPath, config);

              indexFile += `@import "./${fileName}.css";\n`;
              writeFileSync(outputPath, generateSVAStyles(config, options.classNameConfig));
            } else {
              console.warn(
                `\x1b[33m[WARN]: The config in "${objKeys}" requires a "base" property for cva or a "slots" property for sva.\x1b[0m`
              );
              console.info(`\x1b[36mConfig:\n${JSON.stringify(config, null, "\t")}\x1b[0m`);
            }

            /**
             * TODO - Figure out how the Tailwind compiler works (intake, when it throws, etc.)
             *
             * *NOTE*
             * Sample code was taken from [this test](https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/src/index.test.ts#L288)
             */
            // if (options.compile) {
            //   const styles = await compileCss(
            //     String.raw`
            //     ${tailwindImport}

            //     ${fileToWrite}
            //     `
            //   );
            // }
          }

          writeFileSync(`${dir}/index.css`, indexFile);
        }
      });
    }
  };
};
