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

export const componentWrapper = (
  name: string,
  jam: {
    js: { imports?: string; script: string };
    markup: string;
    props: string;
  },
  { lang, ui, util }: Prompts
) => {
  const { js, markup, props } = jam;
  const componentName = pascalCase(name);
  const isTs = lang === "ts";

  switch (ui) {
    case "vue":
      return `
      <script setup ${isTs ? `lang="${lang}">` : ">"}
        import { ${componentName} as Ark${componentName} } from "@ark-${ui}/${name}";
        import { ${util === "tm" ? "twMerge" : util} } from "${twUtils[util]}";
        import { ${camelCase(name)}Styles } from "./styles.${lang}";
        ${js.imports ?? ""}
        ${
          isTs
            ? `
          const props = defineProps<{
            ${props}
          }>();
          `
            : ""
        }
        ${js.script}
      </script>

      <template>
        ${markup}
      </template>
      `;
    default:
      return `
      import { ${componentName} as Ark${componentName} } from "@ark-${ui}/${name}";
      import { ${util === "tm" ? "twMerge" : util} } from "${twUtils[util]}";
      import { ${camelCase(name)}Styles } from "./styles.${lang}";
      ${js.imports ?? ""}
      ${
        isTs
          ? `
          export type ${pascalCase(name)}Props = {
            ${props}
          };
        `
          : ""
      }
      export const ${pascalCase(name)} = (props${lang === "ts" ? `: ${pascalCase(name)}Props` : ""}) => {
        ${js.script}

        return(
          ${markup}
        );
      };
      `;
  }
};
