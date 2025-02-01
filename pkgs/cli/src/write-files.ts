import { cp, exists, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import * as p from "@clack/prompts";
import degit from "degit";
import { camelCase, pascalCase } from "es-toolkit";
import { type From, type ReplaceInFileConfig, type To, replaceInFile } from "replace-in-file";
import type { Prompts } from "./prompts.js";
import { printErr, usrPath } from "./utils.js";

const EXAMPLES_URL = "AGS1130/spark-css/examples/";
const THEMES_URL = "AGS1130/spark-css/themes/src";

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
    const emitter = degit(`${THEMES_URL}/${theme}`, { force: true });
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

        // touch ~/path/to/components/index.{lang} && echo export {componentExport} from "./{componentName}.{ext}";
        await writeFile(`${componentDir}/index.${lang}`, `export ${componentExport} from "./${componentName}.${ext}"`);

        // * Clone `examples` for JS framework and force to project
        const cloneExampleDir = `${EXAMPLES_URL}/${ui}/src/${componentName}`;
        const clonedExampleFile = `${componentDir}/${componentName}.${ext}`;
        let exampleFile = "basic";

        // ! 'field' and 'progress' need exception handling
        if (componentName === "field") exampleFile = "input";
        else if (componentName === "progress") exampleFile = "circular/basic";

        const emitter = degit(`${cloneExampleDir}/${exampleFile}.${ext}`, {
          force: true
        });
        await emitter.clone(clonedExampleFile);

        // ! Must update JS framework files
        interface Config extends Omit<ReplaceInFileConfig, "from" | "to"> {
          from: From[];
          to: To[];
        }
        const config: Config = {
          files: clonedExampleFile,
          from: [
            'import { minimal, park, shadcn } from "@spark-css/themes";',
            'import { type Theme, getTheme } from "../utils";',
            `import { ${pascalCase(componentName)} }`,
            `${pascalCase(componentName)}.`
          ],
          to: [
            `import { ${camelCase(componentName)}Styles ${util === "tv" ? "as styledSlots " : ""}} from "./styles.${lang}";`,
            "",
            `import { ${pascalCase(componentName)} as Ark }`,
            "Ark."
          ]
        };

        switch (ui) {
          case "vue": {
            // remove define props
            config.from.push("const props = defineProps<Theme>();");
            config.to.push("");

            break;
          }
          case "solid":
          case "react": {
            // remove props
            config.from.push("{ theme }: { theme: Theme }");
            config.to.push("");

            // rename export component
            config.from.push("export const Basic");
            config.to.push(`export const ${pascalCase(componentName)}`);

            break;
          }
        }

        switch (util) {
          case "tv": {
            // include the import of the `util`
            config.from.push('import { clsx } from "clsx";');
            config.to.push('import { tv } from "tailwind-variants";');

            // replace styledSlots with tv util
            config.from.push(/getTheme\((\n|.)*?\);/g);
            config.to.push(`tv({ slots: ${camelCase(componentName)}Styles });`);

            // replace class names with the appropriate `util`
            config.from.push(/clsx\(/g);
            config.to.push((match: string) => `${match.slice(5, -1)}()`);
            config.from.push(/styledSlots\./g);
            config.to.push("styledSlots().");

            break;
          }
          case "tm": {
            // include the import of the `util`
            config.from.push('import { clsx } from "clsx";');
            config.to.push('import { twMerge } from "tailwind-merge";');

            // remove styledSlots
            config.from.push(/const styledSlots =(\n|.)*?\);/g);
            config.to.push("");

            // replace class names with the appropriate `util`
            config.from.push(/clsx\(/g);
            config.to.push("twMerge(");

            break;
          }

          case "clsx": {
            // remove styledSlots
            config.from.push(/const styledSlots =(\n|.)*?\);/g);
            config.to.push("");

            break;
          }
        }
        // @ts-expect-error: overload issue with overriding `from` and `to` types
        replaceInFile(config);
      }
    }

    if (tw === "v4") await rm(`${clonedPath}/tailwind.config.cjs`); // ! Remove tailwind config
    await rm(clonedThemeDir, { recursive: true, force: true }); // ! Remove cloned theme directory
  } catch {
    p.cancel(printErr("There was an issue setting up the project."));
    process.exit(0);
  }
};
