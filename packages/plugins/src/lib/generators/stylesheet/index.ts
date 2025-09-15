import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import type { Options } from "../../types";
import { kebabCase, sharedComment } from "../utils";
import { generateCVAStylesheet } from "./cva";
import { generateSVAStylesheet } from "./sva";

/* -----------------------------------------------------------------------------
 * Stylesheet
 * -----------------------------------------------------------------------------*/

const generateComment = (rawConfig: Record<string, string | boolean | undefined>, isComponent = false): string => {
  const metaConfig = {
    deprecated: isComponent ? (rawConfig?.deprecated ?? undefined) : undefined,
    description: rawConfig?.description ?? undefined,
    license: !isComponent ? (rawConfig?.license ?? undefined) : undefined,
    name: rawConfig?.name ?? undefined,
    see: rawConfig?.see ?? undefined,
    version: !isComponent ? (rawConfig?.version ?? undefined) : undefined
  };

  return sharedComment({
    metaConfig,
    firstComment: "/* -----------------------------------------------------------------------------\n",
    lastComment: " * -----------------------------------------------------------------------------*/\n"
  });
};

export const writeStylesheets = (options: Required<Options>, outDirPath: string): void => {
  const { components, createOptions, metaConfig, silent } = options;

  // * Write
  // let tailwindImport = "";

  // * Warn if "compile" is true and code does not include "@theme", and set default import
  // if (options.css.compile && !_.includes("@theme")) {
  //   if (!silent) {
  //     console.warn(`\n\x1b[33m[WARN]: "entry" file does not contain a theme; setting to default theme.\x1b[0m`);
  //   }
  //   tailwindImport = '@import "tailwindcss";';
  // }

  let writtenDirs = "";

  // * LEVEL - Root
  for (const dir of Object.keys(components)) {
    if (dir === "index" || dir === "utils") {
      if (!silent) {
        console.warn(`\x1b[33m[WARN]: Key "${dir}" in "components" is a reserved keyword.\x1b[0m`);
      }
      continue;
    }

    const configsArr = components[dir];

    if (!Array.isArray(configsArr)) {
      if (!silent) {
        console.warn(`\x1b[33m[WARN]: The value in "components.${dir}" is not an array.\x1b[0m`);
      }
      continue;
    }

    // * Dirctory to write to
    const outDirWrite = `${outDirPath}/${dir}`;

    // * `mkdir` if it doesn't exist
    if (!existsSync(outDirWrite)) mkdirSync(outDirWrite, { recursive: true });

    const configNames: Record<string, number> = {};

    // * The index file that will hold import statements
    let indexFile = "";

    // * LEVEL - Directory
    for (const { metaConfig: componentMetaConfig, styleConfig } of configsArr) {
      const { name } = styleConfig;

      if (!name) {
        if (!silent) {
          console.warn(
            `\x1b[33m[WARN]: A style configuration in ${dir} requires a "name" property to output file.\x1b[0m`
          );
        }
        continue;
      } else if (name === "exports" || name === "index") {
        if (!silent) {
          console.warn(`\x1b[33m[WARN]: "${name}" in "components.${dir}" is a reserved keyword.\x1b[0m`);
        }
        continue;
      }

      // * Resolve name conflicts
      const fileName = kebabCase(name);
      if (Object.hasOwn(configNames, name)) {
        // const newFileName = `${fileName}-${configNames[fileName]}`;
        if (!silent) {
          console.warn(
            `\x1b[33m[WARN]: Duplicate "name" property detected. Rename "${name}" in "${dir}[${name}]" to output file.\x1b[0m`
          );
        }

        // fileName = newFileName;
        configNames[name] += 1;

        // ! While we can rename the output files and CSS, it will cause a bug due to seperate invocation from plugin to markup.
        continue;
      } else {
        configNames[name] = 1;
      }

      // * The file paths to write to
      const outFile = `${outDirWrite}/${fileName}.css`;

      // * Write individual css or js/ts files
      if ("slots" in styleConfig) {
        indexFile += `@import "./${fileName}.css";\n`;
        writeFileSync(
          outFile,
          `${generateComment(componentMetaConfig, true)}${generateSVAStylesheet(styleConfig, createOptions)}`
        );
      } else if ("base" in styleConfig) {
        indexFile += `@import "./${fileName}.css";\n`;
        writeFileSync(
          outFile,
          `${generateComment(componentMetaConfig, true)}${generateCVAStylesheet(styleConfig, createOptions)}`
        );
      } else if (!silent) {
        console.warn(
          `\x1b[33m[WARN]: The style configuration in "${dir}[${name}]" requires a "base" and/or "slots" property.\x1b[0m`
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

    // * Write "index" file in `dir`
    if (indexFile) {
      writeFileSync(`${outDirWrite}/index.css`, indexFile);
      writtenDirs += `@import "./${dir}/index.css";\n`;
    }
    // * Clean directory if no files were output
    else {
      rmSync(outDirWrite, { recursive: true });
    }
  }

  // * Write "index" file in root
  if (writtenDirs) {
    writeFileSync(`${outDirPath}/index.css`, `${generateComment(metaConfig)}${writtenDirs}`);
  }
};
