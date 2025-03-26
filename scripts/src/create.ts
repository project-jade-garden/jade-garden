import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { kebabCase, pascalCase, startCase } from "es-toolkit";

const TARGET = "reka-ui";

const __dirname = join(dirname(fileURLToPath(import.meta.url)), "..", "..", "projects", TARGET);

const main = async () => {
  const { components }: { components: { [key: string]: string | string[] } } = await import(
    `${__dirname}/tests/data.ts`
  );
  const srcDir = `${__dirname}/src`;

  if (existsSync(srcDir)) {
    rmSync(srcDir, { recursive: true, force: true });
  }

  mkdirSync(srcDir);

  for (const component of Object.keys(components)) {
    const slots = components[component];

    const ghSrc = `// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/${pascalCase(component)}/index.ts`;
    const jsDoc = `\n\n/**\n * **${startCase(component)}**\n * @description\n * @see [source](https://reka-ui.com/docs/components/${kebabCase(component)}#anatomy)\n */\n`;
    writeFileSync(
      `${srcDir}/${kebabCase(component)}.ts`,
      `${ghSrc}${jsDoc}export const slots = ${JSON.stringify(slots)} as const;${jsDoc}(typeof slots)[number]\n`
    );
  }

  writeFileSync(`${srcDir}/index.ts`, "");
};

// ! Uncomment only when creating a new project and AFTER setting up a tests/data.ts with a `components` export.
// await main();
