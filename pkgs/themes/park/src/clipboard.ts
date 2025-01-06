// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/clipboard.ts
import { type ClipboardSlots, createClipboardSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

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
export const clipboardSlots = createClipboardSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// console.log(generateSlotsDocs("clipboard", clipboardSlots));

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
export const clipboardStyledSlots = {
  base: "parkClipboard",
  root: [
    "parkClipboard__root",

    // Layout
    "flex",

    // Flexbox & Grid
    "flex-col",
    "gap-1.5"
  ],
  control: [
    "parkClipboard__control",

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-3"
  ],
  trigger: "parkClipboard__trigger",
  indicator: "parkClipboard__indicator",
  input: "parkClipboard__input",
  label: "parkClipboard__label"
} as const satisfies Record<ClipboardSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("clipboard", clipboardStyledSlots));
