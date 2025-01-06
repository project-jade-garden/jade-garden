import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { type DK, appendingDoc, descriptions, prependingDoc } from "@spark-css/utils";
import type { createAnatomy } from "@zag-js/anatomy";
import { camelCase, pascalCase } from "es-toolkit";

// ! Files need to be manually written. Components are custom for Ark UI.
// * https://github.com/search?q=repo%3Achakra-ui/ark%20path%3A.anatomy.ts&type=code
const skipFiles = [
  "carousel",
  "checkbox",
  "color-picker",
  "date-picker",
  "field",
  "fieldset",
  "segment-group",
  "toggle"
];

const components = readdirSync(join(__dirname, "./src"));

const isComponentWithDescription = (c: string): c is DK => Object.keys(descriptions).includes(c);

const generateSrcFiles = () => {
  const outputPath = join(__dirname, "./src");

  for (const component of components) {
    const c = component.slice(0, -3); // Removes `.ts`;
    if (skipFiles.includes(c) || !isComponentWithDescription(c)) continue;

    const camelName = camelCase(c);
    const pascalName = pascalCase(c);
    const anatomyName = `${camelName}Anatomy`;

    const jsDoc = `/**\n ${prependingDoc(c)} ${appendingDoc(c)}`;

    const fileContent = [
      'import { type GSProps, generateSlots } from "@spark-css/utils";',
      `import { anatomy as ${anatomyName} } from "@zag-js/${c}";\n`,
      jsDoc,
      `export const create${pascalName}Slots = (props?: GSProps) => generateSlots("${c}", ${anatomyName}.keys(), props);\n`,
      jsDoc,
      `export type ${pascalName}Slots = keyof ReturnType<typeof create${pascalName}Slots>;\n`
    ].join("\n");

    writeFileSync(`${outputPath}/${component}`, fileContent);
  }
};

const generateSlotsForTests = async () => {
  const outputPath = join(__dirname, "./tests");

  const slots: Record<string, string[]> = {};

  for (const component of components) {
    const c = component.slice(0, -3); // Removes `.ts`;
    if (skipFiles.includes(c)) continue;

    const camelName = camelCase(c);

    const anatomies = await import(`@zag-js/${c}`);
    const anatomy: ReturnType<typeof createAnatomy> = anatomies.anatomy;

    slots[camelName] = anatomy.keys();
  }

  writeFileSync(`${outputPath}/data/generated-slots.json`, JSON.stringify(slots));
};

const main = async () => {
  generateSrcFiles();
  await generateSlotsForTests();
};

await main();
