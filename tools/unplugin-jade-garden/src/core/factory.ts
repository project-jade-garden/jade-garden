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
import type { CVA, Options, SVA } from "./types";

// * Taken from: https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/src/test-utils/run.ts
// const compileCss = async (css: string, candidates: string[] = [], options: Parameters<typeof compile>[1] = {}) => {
//   const { build } = await compile(css, options);
//   return optimize(build(candidates)).trim();
// };

export const factory: UnpluginFactory<Options | undefined, false> = (rawOptions) => {
  const options = {
    entry: rawOptions?.entry ?? "",
    // compile: rawOptions?.compile ?? false,
    components: rawOptions?.components ?? {
      cva: [],
      sva: []
    }
  };
  const filter = createFilter(options.entry);

  // let tailwindImport = "";
  const transformedFiles = new Map<string, string>();

  const writeFiles = (props: { components: CVA[] | SVA[]; id: string; type: "cva" | "sva" }) => {
    const { components, id, type } = props;
    const dir = join(id, `../components/${type}`);

    if (existsSync(dir)) rmSync(dir, { force: true, recursive: true });

    mkdirSync(dir, { recursive: true });

    let count = 0;
    let indexFile = "";
    for (const methods of components) {
      const name = methods.config.name;

      if (!name) {
        console.warn(`\x1b[33m[WARN]: ${type} does not have "name" in config.\x1b[0m`);
        console.info(`\x1b[36mConfig:\n${JSON.stringify(methods.config, null, "\t")}\x1b[0m`);
        continue;
      }

      const fileName = `${kebabCase(name)}.css`;
      const fileToWrite = type === "cva" ? generateCVAStyles(methods as CVA) : generateSVAStyles(methods as SVA);

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

      count++;
      indexFile += `@import "./${fileName}";\n`;
      writeFileSync(`${dir}/${fileName}`, fileToWrite);
    }

    writeFileSync(`${dir}/index.css`, indexFile);
    console.info(`\n\x1b[36m${type}: ${count} files written\x1b[0m`);
  };

  return {
    name: "unplugin-jade-garden",
    enforce: "pre",

    transform(_, id) {
      if (!filter(id)) return;

      // * Warn if "compile" is true and code does not include "@theme", and set default import
      // if (options.compile && !code.includes("@theme")) {
      //   console.warn(`\n\x1b[33m[WARN]: "entry" file does not contain a theme; setting to default theme.\x1b[0m`);
      //   tailwindImport = '@import "tailwindcss";';
      // }

      const tComponents = typeof options.components;

      // * Exit early if "components" are not an object
      if (tComponents !== "object" || Array.isArray(options.components)) {
        console.warn(`\n\x1b[33m[WARN]: The "components" prop must be an object.\x1b[0m`);
        console.info(`\n\x1b[36mReceived: ${tComponents === "object" ? "array" : tComponents}\x1b[0m`);
        return;
      }

      const { cva, sva } = options.components;

      // * Exit early if "cva" and "sva" are undefined or not arrays
      if ((!cva || !Array.isArray(cva)) && (!sva || !Array.isArray(sva))) {
        console.warn(`\n\x1b[33m[WARN]: "components.cva" and "components.sva" props must be arrays.\x1b[0m`);
        console.info("\n\x1b[36mcva: 0 files written\x1b[0m\n\x1b[36msva: 0 files written\x1b[0m");
        return;
      }

      // * Write files
      if (cva?.length) writeFiles({ components: cva, id, type: "cva" });
      if (sva?.length) writeFiles({ components: sva, id, type: "sva" });
    }
  };
};
