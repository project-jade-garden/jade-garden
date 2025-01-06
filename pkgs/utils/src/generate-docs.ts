// * File does not output in the final build of a Spark CSS theme, unless exports are imported.
import { kebabCase, startCase } from "es-toolkit";

/**
 * Static descriptions for generating JSDocs.
 * Taken from Ark UI docs.
 */
export const descriptions = {
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
  progress:
    "**Circular** - An element that shows either determinate or indeterminate progress. **Linear** - An element that shows either determinate or indeterminate progress.",
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

export type DK = keyof typeof descriptions;

export const prependingDoc = (name: DK) => `* **${startCase(name)}**\n * @description ${descriptions[name]}\n`;

export const appendingDoc = (name: DK) =>
  `* @see [source](https://ark-ui.com/vue/docs/components/${kebabCase(name)}#anatomy)\n */`;

export const generateSlotsDocs = (name: DK, slots: Record<string, string | string[]>) => {
  const s = Object.entries(slots);

  const docs = `* @returns\n * \`\`\`js\n * {\n${s.reduce((prev, [k, v], i) => {
    const valueIsArray = Array.isArray(v);
    const result = valueIsArray ? v.join(" ") : v;

    return `${prev} *   ${k}: "${result}"${i !== s.length - 1 ? "," : ""}\n`;
  }, "")} * }\n * \`\`\`\n *\n`;

  return `\x1b[33m/**\n ${prependingDoc(name)} *\n ${docs} ${appendingDoc(name)}\n\x1b[0m`;
};

export const generateStyledSlotsDocs = (name: DK, slots: Record<string, string | string[]>) => {
  const s = Object.entries(slots);

  const docs = `* @example\n * \`\`\`css\n${s.reduce((prev, [_, v], i) => {
    const valueIsArray = Array.isArray(v);
    const selector = valueIsArray ? v.shift() : v;
    const result = valueIsArray ? v.join(" ") : "";

    // ! Cannot use `@apply`
    // * JSDoc cannot escape `@` symbols: https://github.com/jsdoc/jsdoc/issues/821
    return `${prev} * .${selector} {${result.length !== 0 ? `\n *   (@)apply ${result};\n * }` : " }"}\n${i === s.length - 1 ? "" : " *\n"}`;
  }, "")} * \`\`\`\n *\n`;

  return `\x1b[34m/**\n ${prependingDoc(name)} *\n ${docs} ${appendingDoc(name)}\n\x1b[0m`;
};
