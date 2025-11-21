import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import type { ComponentMetaConfig, Config, CVAConfig, SVAConfig } from "../types";
import { camelCase, generateComments, INFO, kebabCase, WARNING } from "../utils";

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
  const exportStatement = `export const ${camelCase(styleConfig.name || "")} = ${type}(${JSON.stringify(styleConfig, null, 2)});\n`;
  const commentConfig = {
    deprecated: componentMetaConfig?.deprecated || undefined,
    description: componentMetaConfig?.description || undefined,
    name: componentMetaConfig?.name || undefined,
    see: componentMetaConfig?.see || undefined
  };

  return `${importStatement}\n\n${generateComments(commentConfig)}${exportStatement}`;
};

export const writeConfigs = (options: Required<Config>, outDirPath: string): void => {
  const { styles, configOutput, metaConfig, silent } = options;

  const dirs = [];

  // * LEVEL - Root
  for (const componentDir of Object.keys(styles)) {
    if (componentDir === "index" || componentDir === "utils") {
      if (!silent) WARNING.ReservedDirKeyword(componentDir);
      continue;
    }

    const configsArr = styles[componentDir];

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
      const { name } = styleConfig;

      if (!name) {
        if (!silent) WARNING.NoName(componentDir);
        continue;
      } else if (name === "exports" || name === "index") {
        if (!silent) WARNING.ReservedNameKeyword(name, componentDir);
        continue;
      }

      let componentName = camelCase(name);

      // * Resolve name conflicts
      if (Object.hasOwn(configNames, componentName)) {
        const newFileName = `${componentName}-${configNames[componentName]}`;
        if (!silent) INFO.ConfigNameConflict(componentName, componentDir);

        // * This is ok since we are writing configs instead of CSS.
        styleConfig.name = newFileName;
        configNames[componentName] += 1;
        componentName = camelCase(newFileName);
      } else {
        configNames[componentName] = 1;
      }
      const fileName = kebabCase(componentName);

      // * The file paths to write to
      const outFile = `${outDirWrite}/${fileName}.${configOutput}`;
      const modulePort = `{ ${componentName} } from "./${fileName}";\n`;

      // * Write individual css or js/ts files
      if ("base" in styleConfig || "slots" in styleConfig) {
        exportsFile += `export ${modulePort}`;
        indexFile += `import ${modulePort}`;
        writeFileSync(
          outFile,
          generateConfig({
            componentMetaConfig,
            styleConfig,
            type: "slots" in styleConfig ? "sva" : "cva"
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
        `${indexFile}\nexport const ${camelCase(componentDir)} = [\n  ${exportComponent.join(",\n  ")}\n];\n`
      );
      writeFileSync(`${outDirWrite}/exports.${configOutput}`, exportsFile);
      dirs.push(camelCase(componentDir));
    }
    // * Clean directory if no files were output
    else {
      rmSync(outDirWrite, { recursive: true });
    }
  }

  // * Write files in root
  if (dirs.length > 0) {
    const commentConfig = {
      description: metaConfig?.description || undefined,
      license: metaConfig?.license || undefined,
      name: metaConfig?.name || undefined,
      see: metaConfig?.see || undefined,
      version: metaConfig?.version || undefined
    };

    // * Write "index" file
    writeFileSync(
      `${outDirPath}/index.${configOutput}`,
      `${generateComments(commentConfig)}${dirs.reduce((state, dir) => {
        state += `import { ${dir} } from "./${kebabCase(dir)}";\n`;
        return state;
      }, "")}
// For convenience, this exports all \`styles\`.
export const styles = {
  ${dirs.join(",\n  ")}
};

// Uncomment the code below if you want to export \`styles\` individually.
${dirs.reduce((state, dir) => {
  state += `// export * from "./${kebabCase(dir)}/exports";\n`;
  return state;
}, "")}`
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
  // * Clean directory if no files were output
  else {
    if (existsSync(outDirPath)) rmSync(outDirPath, { recursive: true });
  }
};
