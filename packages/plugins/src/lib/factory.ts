// * For minor version, plugin will not include the commented out packages
// * Install when there is a better understanding of how the Tailwind compiler works
// import { optimize } from "@tailwindcss/node";
// import { compile } from "tailwindcss";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { kebabCase } from "es-toolkit";
import type { UnpluginFactory } from "unplugin";
import { createFilter } from "unplugin-utils";
import { generateCVAStyles } from "./generators/cva";
import { generateSVAStyles } from "./generators/sva";
import type { CVA, Options, StyleConfigs, SVA, WalkFn } from "./types";

// * Taken from: https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/src/test-utils/run.ts
// const compileCss = async (css: string, candidates: string[] = [], options: Parameters<typeof compile>[1] = {}) => {
//   const { build } = await compile(css, options);
//   return optimize(build(candidates)).trim();
// };

const walkConfigs = (root: StyleConfigs, maxDepth: number, fn: WalkFn): void => {
  const walk = (obj: StyleConfigs, depth = 0, path: string[] = []) => {
    // * Add one to walk
    depth += 1;

    if (depth >= maxDepth) {
      throw new Error(
        `\nThe "styleConfigs" prop exceeds the max depth of ${maxDepth}.\nUpdate the "maxDepth" property.`
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

export const factory: UnpluginFactory<Options | undefined, false> = (rawOptions) => {
  const options = {
    build: rawOptions?.build ?? {},
    css: rawOptions?.css ?? {},
    eject: rawOptions?.eject ?? {}
  } satisfies Required<Options>;
  const filter = createFilter(options.build.entry);

  return {
    name: "unplugin-jade-garden",
    enforce: "pre",

    transform(_, id) {
      if (!filter(id)) return;

      if (typeof options.build.styleConfigs !== "object" || Array.isArray(options.build.styleConfigs)) {
        throw new Error(`\n"styleConfigs" must be objects containing arrays of CVA and SVA configurations.`);
      }

      const { clean, maxDepth = 5, styleConfigs } = options.build;

      // * CSS setup
      const cssOutDir = join(id, `../${options.css.outDir ?? "jade-garden"}`);
      const cssWrite = options.css.write ?? true;

      // * Eject setup
      const ejectOutDir = join(id, `../${options.eject.outDir ?? "jade-garden/ts"}`);
      const ejectWrite = options.eject.write ?? false;

      // * Clean
      if (clean) {
        if (existsSync(cssOutDir)) rmSync(cssOutDir, { recursive: true });
        if (existsSync(ejectOutDir)) rmSync(ejectOutDir, { recursive: true });
      }

      // * Write
      if (cssWrite || ejectWrite) {
        const classNameOptions = options.css.classNameOptions ?? {};
        const fileFormat = options.eject.fileFormat ?? "ts";

        // let tailwindImport = "";

        // * Warn if "compile" is true and code does not include "@theme", and set default import
        // if (options.css.compile && !_.includes("@theme")) {
        //   console.warn(`\n\x1b[33m[WARN]: "entry" file does not contain a theme; setting to default theme.\x1b[0m`);
        //   tailwindImport = '@import "tailwindcss";';
        // }

        walkConfigs(styleConfigs, maxDepth, ({ isArray, path, value }) => {
          if (isArray) {
            const configsArr = value as (CVA | SVA)[];

            // * Dirctories to write to
            const cssWriteDir = `${cssOutDir}/${path.join("/")}`;
            const ejectWriteDir = `${ejectOutDir}/${path.join("/")}`;

            // * `mkdir` if it doesn't exist
            if (cssWrite && !existsSync(cssWriteDir)) mkdirSync(cssWriteDir, { recursive: true });
            if (ejectWrite && !existsSync(ejectWriteDir)) mkdirSync(ejectWriteDir, { recursive: true });

            const objKeys = path.join(".");

            const configNames: Record<string, number> = {};

            // * The index files that will hold the css imports or js/ts exports
            let cssIndexFile = "";
            let ejectIndexFile = "";

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

              // * The file paths to write to
              const cssOutputPath = `${cssWriteDir}/${fileName}.css`;
              const ejectOutputPath = `${ejectWriteDir}/${fileName}.${fileFormat}`;

              // * Write individual css or js/ts files
              if ("base" in config) {
                if (cssWrite) {
                  cssIndexFile += `@import "./${fileName}.css";\n`;
                  writeFileSync(cssOutputPath, generateCVAStyles(config, classNameOptions));
                }

                if (ejectWrite) {
                  ejectIndexFile += `export * from "./${fileName}";\n`;
                  writeFileSync(
                    ejectOutputPath,
                    `import { defineCVA } from "jade-garden/cva"\n\nexport const ${config.name} = defineCVA(${JSON.stringify(config, null, 2)});\n`
                  );
                }
              } else if ("slots" in config) {
                if (cssWrite) {
                  cssIndexFile += `@import "./${fileName}.css";\n`;
                  writeFileSync(cssOutputPath, generateSVAStyles(config, classNameOptions));
                }

                if (ejectWrite) {
                  ejectIndexFile += `export * from "./${fileName}";\n`;
                  writeFileSync(
                    ejectOutputPath,
                    `import { defineSVA } from "jade-garden/sva"\n\nexport const ${config.name} = defineSVA(${JSON.stringify(Object.keys(config.slots))})(${JSON.stringify(config, null, 2)});\n`
                  );
                }
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

            // * Write index files
            if (cssWrite) writeFileSync(`${cssWriteDir}/index.css`, cssIndexFile);
            if (ejectWrite) writeFileSync(`${ejectWriteDir}/index.${fileFormat}`, ejectIndexFile);
          }
        });
      }
    }
  };
};
