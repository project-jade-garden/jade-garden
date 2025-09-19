import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { compile as compileCSS } from "tailwindcss";
import type { Config } from "../../types";
import { generateComments, kebabCase, WARNING } from "../../utils";
import { generateCVAStylesheet } from "./cva";
import { generateSVAStylesheet } from "./sva";

/* -----------------------------------------------------------------------------
 * Stylesheet
 * -----------------------------------------------------------------------------*/

export const writeStylesheets = async (options: Required<Config>, outDirPath: string): Promise<void> => {
  const { compile, components, createOptions, entry, metaConfig, silent } = options;

  let writtenDirs = "";

  // * LEVEL - Root
  for (const componentDir of Object.keys(components)) {
    if (componentDir === "index" || componentDir === "utils") {
      if (!silent) WARNING.ReservedDirKeyword(componentDir);
      continue;
    }

    const configsArr = components[componentDir];

    if (!configsArr || !Array.isArray(configsArr)) {
      if (!silent) WARNING.NotArray(componentDir);
      continue;
    }

    // * Dirctory to write to
    const outDirWrite = `${outDirPath}/${componentDir}`;

    // * `mkdir` if it doesn't exist
    if (!existsSync(outDirWrite)) mkdirSync(outDirWrite, { recursive: true });

    const configNames: Record<string, number> = {};

    // * The index file that will hold import statements
    let indexFile = "";

    // * LEVEL - Directory
    for (const { metaConfig: componentMetaConfig, styleConfig } of configsArr) {
      const { name: componentName } = styleConfig;

      if (!componentName) {
        if (!silent) WARNING.NoName(componentDir);
        continue;
      } else if (componentName === "exports" || componentName === "index") {
        if (!silent) WARNING.ReservedNameKeyword(componentName, componentDir);
        continue;
      }

      // * Resolve name conflicts
      const fileName = kebabCase(componentName);
      if (Object.hasOwn(configNames, componentName)) {
        if (!silent) WARNING.StyleNameConflict(componentName, componentDir);

        // ! While we can rename the output files and CSS, it will cause a bug due to seperate invocation from plugin to markup.
        configNames[componentName] += 1;
        continue;
      } else {
        configNames[componentName] = 1;
      }

      let fileToWrite = "";
      const outFile = `${outDirWrite}/${fileName}.css`;

      // * Prep stylesheet
      if ("slots" in styleConfig) {
        indexFile += `@import "./${fileName}.css";\n`;
        fileToWrite = generateSVAStylesheet(styleConfig, createOptions);
      } else if ("base" in styleConfig) {
        indexFile += `@import "./${fileName}.css";\n`;
        fileToWrite = generateCVAStylesheet(styleConfig, createOptions);
      } else if (!silent) {
        WARNING.NoBaseOrSlots(componentName, componentDir);
      }

      // * Write stylesheet
      if (fileToWrite) {
        const comments = generateComments({ rawConfig: componentMetaConfig, type: "stylesheet", isComponent: true });

        if (compile) {
          try {
            const tailwindFile = readFileSync(entry, { encoding: "utf-8" });
            const { build: buildStyles } = await compileCSS(`${tailwindFile}${fileToWrite}`);
            writeFileSync(outFile, `${comments}${buildStyles([])}`);
          } catch {
            // * Failed to generate with CSS; write with "@apply" directives
            writeFileSync(outFile, `${comments}${fileToWrite}`);
          }
        } else {
          writeFileSync(outFile, `${comments}${fileToWrite}`);
        }
      }
    }

    // * Write "index" file in `componentDir`
    if (indexFile) {
      writeFileSync(`${outDirWrite}/index.css`, indexFile);
      writtenDirs += `@import "./${componentDir}/index.css";\n`;
    }
    // * Clean directory if no files were output
    else {
      rmSync(outDirWrite, { recursive: true });
    }
  }

  // * Write "index" file in root
  if (writtenDirs) {
    writeFileSync(
      `${outDirPath}/index.css`,
      `${generateComments({ rawConfig: metaConfig, type: "stylesheet" })}${writtenDirs}`
    );
  }
};
