// * For minor version, plugin will not include the commented out packages
// * Install when there is a better understanding of how the Tailwind compiler works
// import { optimize } from "@tailwindcss/node";
// import { compile } from "tailwindcss";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { kebabCase } from "es-toolkit";
import type { UnpluginFactory } from "unplugin";
import { createFilter } from "unplugin-utils";
import { generateCVAConfig, generateCVAStylesheet, generateSVAConfig, generateSVAStylesheet } from "./generators";
import type { Options } from "./types";

// * Taken from: https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/src/test-utils/run.ts
// const compileCss = async (css: string, candidates: string[] = [], options: Parameters<typeof compile>[1] = {}) => {
//   const { build } = await compile(css, options);
//   return optimize(build(candidates)).trim();
// };

export const factory: UnpluginFactory<Options | undefined, false> = (rawOptions) => {
  const options = {
    clean: rawOptions?.clean ?? false,
    configOutput: rawOptions?.configOutput ?? "ts",
    createOptions: rawOptions?.createOptions ?? {},
    entry: rawOptions?.entry ?? process.cwd(),
    outDir: rawOptions?.outDir ?? "jade-garden",
    styleConfigs: rawOptions?.styleConfigs ?? {}
  } satisfies Required<Options>;
  const filter = createFilter(options.entry);

  return {
    name: "unplugin-jade-garden",
    enforce: "pre",

    transform(_, id) {
      if (!filter(id)) return;

      if (typeof options.styleConfigs !== "object" || Array.isArray(options.styleConfigs)) {
        throw new Error(`\n"styleConfigs" must be a object containing style configurations.`);
      }

      const { clean, configOutput, createOptions, styleConfigs } = options;
      const fileFormat = createOptions.useStylesheet ? "css" : configOutput;

      // * Get output directory path
      const outDirPath = join(id, `../${options.outDir ?? "jade-garden"}`);

      // * Clean
      if (clean && existsSync(outDirPath)) rmSync(outDirPath, { recursive: true });

      // * Write
      // let tailwindImport = "";

      // * Warn if "compile" is true and code does not include "@theme", and set default import
      // if (options.css.compile && !_.includes("@theme")) {
      //   console.warn(`\n\x1b[33m[WARN]: "entry" file does not contain a theme; setting to default theme.\x1b[0m`);
      //   tailwindImport = '@import "tailwindcss";';
      // }

      let writtenDirs = "";

      for (const key of Object.keys(styleConfigs)) {
        const configsArr = styleConfigs[key];

        // * Dirctory to write to
        const outDirWrite = `${outDirPath}/${key}`;

        // * `mkdir` if it doesn't exist
        if (!existsSync(outDirWrite)) mkdirSync(outDirWrite, { recursive: true });

        const configNames: Record<string, number> = {};

        // * The index file that will hold the css imports or js/ts exports
        let indexFile = "";

        for (const { styleConfig } of configsArr) {
          const { name } = styleConfig;

          if (!name) {
            console.warn(
              `\x1b[33m[WARN]: A style configuration in ${key} requires a "name" property to output file.\x1b[0m`
            );
            continue;
          }

          // * Resolve name conflicts
          const fileName = kebabCase(name);
          if (Object.hasOwn(configNames, name)) {
            // const newFileName = `${fileName}-${configNames[fileName]}`;
            console.warn(
              `\x1b[33m[WARN]: Duplicate "name" property detected. Rename "${name}" in "${key}[${name}]" to output file.\x1b[0m`
            );

            // fileName = newFileName;
            configNames[name] += 1;

            // ! While we can rename the output files and CSS, it will cause a bug due to seperate invocation from plugin to markup.
            continue;
          } else {
            configNames[name] = 1;
          }

          // * The file paths to write to
          const outFile = `${outDirWrite}/${fileName}.${fileFormat}`;

          // * Write individual css or js/ts files
          if ("base" in styleConfig) {
            if (fileFormat === "css") {
              indexFile += `@import "./${fileName}.css";\n`;
              writeFileSync(outFile, generateCVAStylesheet(styleConfig, createOptions));
            } else {
              indexFile += `export * from "./${fileName}";\n`;
              writeFileSync(outFile, generateCVAConfig(styleConfig));
            }
          } else if ("slots" in styleConfig) {
            if (fileFormat === "css") {
              indexFile += `@import "./${fileName}.css";\n`;
              writeFileSync(outFile, generateSVAStylesheet(styleConfig, createOptions));
            } else {
              indexFile += `export * from "./${fileName}";\n`;
              writeFileSync(outFile, generateSVAConfig(styleConfig));
            }
          } else {
            console.warn(
              `\x1b[33m[WARN]: The style configuration in "${key}[${name}]" requires a "base" and/or "slots" property.\x1b[0m`
            );
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
        if (indexFile) {
          writeFileSync(`${outDirWrite}/index.${fileFormat}`, indexFile);
          writtenDirs += fileFormat === "css" ? `@import "./${key}/index.css";\n` : `export * from "./${key}";\n`;
        }
        // * Clean directory if no files were output
        else {
          rmSync(outDirWrite, { recursive: true });
        }
      }

      // * Write root imports/exports
      if (writtenDirs) writeFileSync(`${outDirPath}/index.${fileFormat}`, writtenDirs);

      // * Write util file
      if (writtenDirs && fileFormat !== "css") {
        writeFileSync(
          `${outDirPath}/utils.${fileFormat}`,
          `/* -----------------------------------------------------------------------------
 * Jade Garden 🌿
 * -----------------------------------------------------------------------------*/
import { createCVA, createSVA } from "jade-garden";

export const cva = createCVA();
export const sva = createSVA();
`
        );
      }
    }
  };
};
