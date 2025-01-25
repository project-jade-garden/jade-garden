import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { Anatomy } from "@spark-css/utils";
import { camelCase, kebabCase, pascalCase, startCase } from "es-toolkit";

const components = readdirSync(join(__dirname, "./src"));

/**
 * Static descriptions for generating JSDocs.
 * Taken from Ark UI docs.
 */
const descriptions = {
  accordion: "A collapsible component for displaying content in a vertical stack.",
  avatar: "A graphical representation of the user, often used in profile sections.",
  carousel: "A slideshow component that cycles through elements.",
  checkbox: "A control element that allows for multiple selections within a set.",
  clipboard: "A component to copy text to the clipboard.",
  collapsible: "An interactive component that can be expanded or collapsed.",
  "color-picker": "A component that allows users to select a color from a color picker.",
  combobox: "A single input field that combines the functionality of a select and input.",
  "date-picker": "A component that allows users to select a date from a calendar.",
  dialog: "A modal window that appears on top of the main content.",
  editable: "A component that allows users to edit text in place.",
  field: "Provides a flexible container for form inputs, labels, and helper text.",
  fieldset: "A set of form controls optionally grouped under a common name.",
  "file-upload": "A component that is used to upload multiple files.",
  "hover-card": "A card that appears when a user hovers over an element.",
  menu: "A list of options that appears when a user interacts with a button.",
  "number-input": "A field that allows user input of numeric values.",
  pagination: "A navigation component that allows users to browse through pages.",
  "pin-input": "For pin or verification codes with auto-focus transfer and masking options.",
  popover: "An overlay that displays additional information or options when triggered.",
  progress: [
    "**Circular** - An element that shows either determinate or indeterminate progress.",
    "**Linear** - An element that shows either determinate or indeterminate progress."
  ],
  "qr-code": "A component that generates a QR code based on the provided data.",
  "radio-group": "Allows single selection from multiple options.",
  "rating-group": "Allows users to rate items using a set of icons.",
  "segment-group": "Organizes and navigates between sections in a view.",
  select: "Displays a list of options for the user to pick from.",
  "signature-pad": "A component that allows users to draw a signature using a signature pad.",
  slider: "A control element that allows for a range of selections.",
  splitter: "A component that divides your interface into resizable sections.",
  steps: "Used to guide users through a series of steps in a process.",
  switch: "A control element that allows for a binary selection.",
  tabs: "Flexible navigation tool with various modes and features.",
  "tags-input": "A component that allows users to add tags to an input field.",
  timer: "Used to record the time elapsed from zero or since a specified target time.",
  toast: "A message that appears on the screen to provide feedback on an action.",
  "toggle-group": "A set of two-state buttons that can be toggled on or off.",
  toggle: "A two-state button that can be toggled on or off.",
  tooltip: "A label that provides information on hover or focus.",
  "tree-view": "A component that is used to show a tree hierarchy."
};

const skipFiles = [
  "index",

  // ! Files need to be manually written. Components are custom for Ark UI.
  // * https://github.com/search?q=repo%3Achakra-ui/ark%20path%3A.anatomy.ts&type=code
  "checkbox",
  "color-picker",
  "date-picker",
  "field",
  "fieldset",
  "progress", // ! Should not be skipped, but has two different pages (see `source` variable)
  "segment-group",
  "toggle",

  "utils"
];

const isComponentWithDescription = (c: string): c is keyof typeof descriptions => Object.keys(descriptions).includes(c);

const generateSlotsForTests = async () => {
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

  writeFileSync(`${outputPath}/data/zag-slots.json`, JSON.stringify(slots));
};

const generateSrcFiles = () => {
  const outputPath = join(__dirname, "./src");

  for (const component of components) {
    const c = component.slice(0, -3); // Removes `.ts`;
    const camelName = camelCase(c);
    const anatomyName = `${camelName}Anatomy`;

    if (skipFiles.includes(c) || !isComponentWithDescription(c)) {
      const fileContent = [
        'import { type CSArgs, type PrintType, type Slots as UtilSlots, createDocs as utilDocs, createSlots as utilSlots } from "@spark-css/utils";',
        "const component = {",
        `  name: "${startCase(c)}",`,
        `  description: ""`,
        "};",
        `const source = "https://ark-ui.com/vue/docs/components/${kebabCase(c)}#anatomy";\n`,
        "export type Slots = keyof ReturnType<typeof createSlots>;\n",
        `export const createSlots = (args?: CSArgs) => utilSlots("${c}", ${anatomyName}.keys(), args);\n`,
        "export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });\n"
      ].join("\n");

      console.warn(`Update file in ${outputPath}/${component}\n\x1b[33m${fileContent}\x1b[0m`);
      continue;
    }

    const description = Array.isArray(descriptions[c]) ? `["${descriptions[c].join('", "')}"]` : `"${descriptions[c]}"`;

    const fileContent = [
      'import { type CSArgs, type PrintType, type Slots as UtilSlots, createDocs as utilDocs, createSlots as utilSlots } from "@spark-css/utils";',
      `import { anatomy as ${anatomyName} } from "@zag-js/${c}";\n`,
      "const component = {",
      `  name: "${startCase(c)}",`,
      `  description: ${description}`,
      "};",
      `const source = "https://ark-ui.com/vue/docs/components/${kebabCase(c)}#anatomy";\n`,
      "export type Slots = keyof ReturnType<typeof createSlots>;\n",
      `export const createSlots = (args?: CSArgs) => utilSlots("${c}", ${anatomyName}.keys(), args);\n`,
      "export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });\n"
    ].join("\n");

    writeFileSync(`${outputPath}/${component}`, fileContent);
  }
};

const main = async () => {
  await generateSlotsForTests();
  generateSrcFiles();
};

await main();
