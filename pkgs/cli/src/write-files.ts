import { cp, exists, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import * as p from "@clack/prompts";
import degit from "degit";
import { pascalCase } from "es-toolkit";
import type { Prompts } from "./prompts.js";
import { printErr, usrPath } from "./utils.js";

const API_URL = "AGS1130/spark-css/themes/src";

export const writeFiles = async (opts: Prompts) => {
  const { lang, path, theme, tw, ui, util } = opts;
  const clonedPath = usrPath(path); // ~/path/to/components

  // * Check if `clonedPath` is empty or non-existent
  try {
    const dirExists = await exists(clonedPath);
    if (dirExists) {
      const rmDir = await p.confirm({
        message:
          "There is an existing directory in the path you want to install your components. Remove the directory?",
        initialValue: true
      });

      if (!rmDir) throw new Error("Directory exists");

      await rm(clonedPath, { recursive: true, force: true }); // ! Remove existing directory
    }
  } catch {
    p.cancel(printErr("Directory needs to be empty."));
    process.exit(0);
  }

  // * Clone theme and force to project
  try {
    const emitter = degit(`${API_URL}/${theme}`, { force: true });
    await emitter.clone(clonedPath);
  } catch {
    p.cancel(printErr("There was an issue getting the theme."));
    process.exit(0);
  }

  // * Set up project from cloned theme
  try {
    const clonedThemeDir = `${clonedPath}/${lang}`; // ~/path/to/components/{js,ts}
    await rm(`${clonedPath}/${lang !== "js" ? "js" : "ts"}`, { recursive: true, force: true }); // ! Remove unused language theme directory

    // * Move files in language directory up and into their own directories
    const files = await readdir(clonedThemeDir);
    for (const file of files) {
      const componentName = file.slice(0, -3); // Removes `.js` or `.ts` file extension

      if (componentName === "index") {
        // ~/path/to/components/{js,ts}/index.{js,ts} ->  ~/path/to/components/index.{js,ts}
        await cp(`${clonedThemeDir}/${file}`, `${clonedPath}/${file}`);
      } else {
        const componentDir = `${clonedPath}/${componentName}`; // ~/path/to/components/{componentName}
        const componentExport = ui === "vue" ? `{ default as ${pascalCase(componentName)} }` : "*";
        const ext = ui === "react" || ui === "solid" ? `${lang}x` : ui;

        // mkdir ~/path/to/components/{componentName}
        await mkdir(componentDir);

        // cp ~/path/to/components/{js,ts}/{file} ~/path/to/components/{componentName}/styles.{js,ts}
        await cp(`${clonedThemeDir}/${file}`, `${componentDir}/styles.${lang}`);

        // TODO: Write JS framework templates to project

        // touch ~/path/to/components/index.{lang} && echo export {componentExport} from "./{componentName}.{ext}";
        await writeFile(`${componentDir}/index.${lang}`, `export ${componentExport} from "./${componentName}.${ext}"`);
      }
    }

    if (tw === "v4") await rm(`${clonedPath}/tailwind.config.cjs`); // ! Remove tailwind config
    await rm(clonedThemeDir, { recursive: true, force: true }); // ! Remove cloned theme directory
  } catch {
    p.cancel(printErr("There was an issue setting up the project."));
    process.exit(0);
  }
};
