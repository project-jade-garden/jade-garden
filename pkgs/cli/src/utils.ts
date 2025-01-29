import { resolve } from "node:path";
import { camelCase, pascalCase } from "es-toolkit";
import color from "picocolors";
import type { Prompts } from "./prompts.js";

export const twUtils = {
  clsx: "clsx",
  tm: "tailwind-merge",
  tv: "tailwind-variants"
} as const;

export const usrPath = (path: string) => resolve(process.cwd(), path);

export const printErr = (msg: string) => color.bold(color.bgBlack(color.red(`❌ [ERR]: ${msg}`)));

export const templateWrapper = (
  name: string,
  file: {
    imports?: string;
    markup: string;
  },
  { lang, ui, util }: Prompts
) => {
  const { imports, markup } = file;
  const componentName = pascalCase(name);
  const isTs = lang === "ts";

  const componentImport = `import { ${componentName} as Ark${componentName} } from "@ark-${ui}/${name}";`;
  const typedImport = isTs ? `import type { Slots } from "@spark-css/${name}";` : "";
  const utilImport = `import { ${util === "tm" ? "twMerge" : util} } from "${twUtils[util]}";`;
  const stylesImport = `import { ${camelCase(name)}Styles } from "./styles.${lang}";\n`;

  const setImportsAndStyles = (imports?: string) => {
    if (!imports) return stylesImport;

    return `
      ${imports}
      ${stylesImport}
    `;
  };

  switch (ui) {
    case "vue":
      return `
      <script setup ${isTs ? `lang="${lang}">` : ">"}
        ${componentImport}
        ${typedImport}
        ${utilImport}
        ${setImportsAndStyles(imports)}
        ${isTs ? "const props = defineProps<{ styles: Record<Slots, string[]>; }>();" : ""}
      </script>

      <template>
        ${markup}
      </template>
      `;
    default:
      return `
      ${componentImport}
      ${typedImport}
      ${utilImport}
      ${setImportsAndStyles(imports)}
      ${isTs ? `export type ${componentName}Props = { styles: Record<Slots, string[]>; };` : ""}
      export const ${componentName} = (props${lang === "ts" ? `: ${componentName}Props` : ""}) => {
        return(
          ${markup}
        );
      };
      `;
  }
};
