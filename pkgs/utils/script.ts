import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { Anatomy } from "@zag-js/anatomy";
import { camelCase } from "es-toolkit";

const skipFiles = [
  "index",

  // ! Files need to be manually written. Components are custom for Ark UI.
  // * https://github.com/search?q=repo%3Achakra-ui/ark%20path%3A.anatomy.ts&type=code
  "carousel",
  "checkbox",
  "color-picker",
  "date-picker",
  "field",
  "fieldset",
  "segment-group",
  "toggle"
];

const components = readdirSync(join(__dirname, "../core/src"));

const main = async () => {
  const outputPath = join(__dirname, "./tests");

  const slots: Record<string, string[]> = {};

  for (const component of components) {
    const c = component.slice(0, -3); // Removes `.ts`;
    if (skipFiles.includes(c)) continue;

    const camelName = camelCase(c);

    const anatomies = await import(`@zag-js/${c}`);
    const anatomy: Anatomy<string> = anatomies.anatomy;

    slots[camelName] = anatomy.keys();
  }

  writeFileSync(`${outputPath}/data/generated-slots.json`, JSON.stringify(slots));
};

await main();
