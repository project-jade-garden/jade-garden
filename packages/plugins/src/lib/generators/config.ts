import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { kebabCase } from "es-toolkit/string";
import type { MetaConfig as ComponentMetaConfig, CVAConfig, SVAConfig } from "jade-garden";
import type { Options } from "../types";
import { sharedComment } from "./utils";

/* -----------------------------------------------------------------------------
 * Config
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

  return sharedComment({ metaConfig, firstComment: "/**\n", lastComment: " */\n" });
};

const generateConfig = (params: {
  type: "cva" | "sva";
  componentMetaConfig: ComponentMetaConfig;
  styleConfig: CVAConfig<any> | SVAConfig<any, any, any>;
}): string => {
  const { componentMetaConfig, styleConfig, type } = params;
  const importStatement = `import { ${type} } from "../utils";`;
  const exportStatement = `export const ${styleConfig.name} = ${type}(${JSON.stringify(styleConfig, null, 2)});\n`;

  return `${importStatement}\n\n${generateComment(componentMetaConfig, true)}${exportStatement}`;
};

export const writeConfigs = (options: Required<Options>, outDirPath: string): void => {
  const { components, configOutput, metaConfig, silent } = options;

  const dirs = [];

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

    // * The index file that will hold import statements (in js/ts "exportComponent" will hold a single export)
    let indexFile = "";
    const exportComponent: string[] = [];

    // * Exports for js/ts files
    let exportsFile = "";

    // * LEVEL - Dirctory
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
      const outFile = `${outDirWrite}/${fileName}.${configOutput}`;

      // * Write individual css or js/ts files
      if ("slots" in styleConfig) {
        exportsFile += `export { ${name} } from "./${fileName}";\n`;
        indexFile += `import { ${name} } from "./${fileName}";\n`;
        writeFileSync(
          outFile,
          generateConfig({
            componentMetaConfig,
            styleConfig,
            type: "sva" as const
          })
        );
        exportComponent.push(name);
      } else if ("base" in styleConfig) {
        exportsFile += `export { ${name} } from "./${fileName}";\n`;
        indexFile += `import { ${name} } from "./${fileName}";\n`;
        writeFileSync(
          outFile,
          generateConfig({
            componentMetaConfig,
            styleConfig,
            type: "cva" as const
          })
        );
        exportComponent.push(name);
      } else if (!silent) {
        console.warn(
          `\x1b[33m[WARN]: The style configuration in "${dir}[${name}]" requires a "base" and/or "slots" property.\x1b[0m`
        );
      }
    }

    // * Write "index" and "exports" file in `dir`
    if (indexFile) {
      writeFileSync(
        `${outDirWrite}/index.${configOutput}`,
        `${indexFile}\nexport const ${dir} = [\n  ${exportComponent.join(",\n  ")}\n];\n`
      );
      writeFileSync(`${outDirWrite}/exports.${configOutput}`, exportsFile);
      dirs.push(dir);
    }
    // * Clean directory if no files were output
    else {
      rmSync(outDirWrite, { recursive: true });
    }
  }

  // * Write files in root
  if (dirs.length > 0) {
    // * Write "index" file
    writeFileSync(
      `${outDirPath}/index.${configOutput}`,
      `${generateComment(metaConfig)}${dirs.reduce((state, dir) => {
        state += `import { ${dir} } from "./${dir}";\n`;
        return state;
      }, "")}
// For convenience, this exports all \`components\` for use in \`unplugin-jade-garden\`.
export const jgComponents = {
  ${dirs.join(",\n ")}
};

// Uncomment the code below if you want to export \`components\` individually.
${dirs.reduce((state, dir) => {
  state += `// export * from "./${dir}/exports";\n`;
  return state;
}, "")}
`
    );

    // * Write "utils" file
    writeFileSync(
      `${outDirPath}/utils.${configOutput}`,
      `/* -----------------------------------------------------------------------------
 * Jade Garden 🌿
 *
 * \`cva\` and \`sva\` functions are exported by default.
 * Uncomment the code below if your class names require modifications.
 * -----------------------------------------------------------------------------*/
export { cva, sva } from "jade-garden";

// import { createCVA, createSVA } from "jade-garden";

// export const cva = createCVA();
// export const sva = createSVA();
`
    );
  }
};
