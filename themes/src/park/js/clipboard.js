// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/clipboard.ts
import { createSlots } from "@spark-css/core/clipboard";
/**
 * **Clipboard**
 * @description A component to copy text to the clipboard.
 *
 * @returns
 * ```js
 * {
 *   base: "parkClipboard",
 *   root: "parkClipboard__root",
 *   control: "parkClipboard__control",
 *   trigger: "parkClipboard__trigger",
 *   indicator: "parkClipboard__indicator",
 *   input: "parkClipboard__input",
 *   label: "parkClipboard__label"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/clipboard#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });
/**
 * @typedef { import("@spark-css/core/clipboard").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: [
    slots.root,
    // Layout
    "flex",
    // Flexbox & Grid
    "flex-col",
    "gap-1.5"
  ],
  control: [
    slots.control,
    // Layout
    "flex",
    // Flexbox & Grid
    "gap-3"
  ],
  trigger: slots.trigger,
  indicator: slots.indicator,
  input: slots.input,
  label: slots.label
};
/**
 * **Clipboard**
 * @description A component to copy text to the clipboard.
 *
 * @example
 * ```css
 * .parkClipboard { }
 *
 * .parkClipboard__root {
 *   (@)apply flex flex-col gap-1.5;
 * }
 *
 * .parkClipboard__control {
 *   (@)apply flex gap-3;
 * }
 *
 * .parkClipboard__trigger { }
 *
 * .parkClipboard__indicator { }
 *
 * .parkClipboard__input { }
 *
 * .parkClipboard__label { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/clipboard#anatomy)
 */
export const clipboardStyles = styledSlots;
