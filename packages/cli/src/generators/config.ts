import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import type { ComponentMetaConfig, Config, CVAConfig, SVAConfig } from "../types";
import { generateComments, INFO, kebabCase, WARNING } from "../utils";

/* -----------------------------------------------------------------------------
 * Config
 * -----------------------------------------------------------------------------*/

const generateConfig = (params: {
  type: "cva" | "sva";
  componentMetaConfig: ComponentMetaConfig;
  styleConfig: CVAConfig | SVAConfig;
}): string => {
  const { componentMetaConfig, styleConfig, type } = params;
  const importStatement = `import { ${type} } from "../utils";`;
  const exportStatement = `export const ${styleConfig.name} = ${type}(${JSON.stringify(styleConfig, null, 2)});\n`;

  return `${importStatement}\n\n${generateComments({ rawConfig: componentMetaConfig, type: "config", isComponent: true })}${exportStatement}`;
};

export const writeConfigs = (options: Required<Config>, outDirPath: string): void => {
  const { components, configOutput, metaConfig, silent } = options;

  const dirs = [];

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

    // * The index file that will hold import statements (in js/ts "exportComponent" will hold a single export)
    let indexFile = "";
    const exportComponent: string[] = [];

    // * Exports for js/ts files
    let exportsFile = "";

    // * LEVEL - Dirctory
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
      let fileName = kebabCase(componentName);
      if (Object.hasOwn(configNames, componentName)) {
        const newFileName = `${fileName}-${configNames[componentName]}`;
        if (!silent) INFO.ConfigNameConflict(componentName, componentDir);

        // * This is ok since we are writing configs instead of CSS.
        styleConfig.name = newFileName;
        fileName = newFileName;
        configNames[componentName] += 1;
      } else {
        configNames[componentName] = 1;
      }

      // * The file paths to write to
      const outFile = `${outDirWrite}/${fileName}.${configOutput}`;

      // * Write individual css or js/ts files
      if ("slots" in styleConfig) {
        exportsFile += `export { ${componentName} } from "./${fileName}";\n`;
        indexFile += `import { ${componentName} } from "./${fileName}";\n`;
        writeFileSync(
          outFile,
          generateConfig({
            componentMetaConfig,
            styleConfig,
            type: "sva" as const
          })
        );
        exportComponent.push(componentName);
      } else if ("base" in styleConfig) {
        exportsFile += `export { ${componentName} } from "./${fileName}";\n`;
        indexFile += `import { ${componentName} } from "./${fileName}";\n`;
        writeFileSync(
          outFile,
          generateConfig({
            componentMetaConfig,
            styleConfig,
            type: "cva" as const
          })
        );
        exportComponent.push(componentName);
      } else if (!silent) {
        WARNING.NoBaseOrSlots(componentName, componentDir);
      }
    }

    // * Write "index" and "exports" file in `componentDir`
    if (indexFile) {
      writeFileSync(
        `${outDirWrite}/index.${configOutput}`,
        `${indexFile}\nexport const ${componentDir} = [\n  ${exportComponent.join(",\n  ")}\n];\n`
      );
      writeFileSync(`${outDirWrite}/exports.${configOutput}`, exportsFile);
      dirs.push(componentDir);
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
      `${generateComments({ rawConfig: metaConfig, type: "config" })}${dirs.reduce((state, dir) => {
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
