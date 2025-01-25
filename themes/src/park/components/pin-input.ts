// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/pin-input.ts
import {
  type Slots,
  // createDocs,
  createSlots
} from "@spark-css/core/pin-input";

/**
 * **Pin Input**
 * @description For pin or verification codes with auto-focus transfer and masking options.
 *
 * @returns
 * ```js
 * {
 *   base: "parkPinInput",
 *   root: "parkPinInput__root",
 *   label: "parkPinInput__label",
 *   input: "parkPinInput__input",
 *   control: "parkPinInput__control"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/pin-input#anatomy)
 */
export const pinInputSlots = createSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// createDocs("anatomy", pinInputSlots);

/**
 * **Pin Input**
 * @description For pin or verification codes with auto-focus transfer and masking options.
 *
 * @example
 * ```css
 * .parkPinInput { }
 *
 * .parkPinInput__root {
 *   (@)apply flex gap-1.5 flex-col;
 * }
 *
 * .parkPinInput__label {
 *   (@)apply text-fg-default font-medium;
 * }
 *
 * .parkPinInput__input {
 *   (@)apply px-0 text-center;
 * }
 *
 * .parkPinInput__control {
 *   (@)apply flex gap-2;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/pin-input#anatomy)
 */
export const pinInputStyledSlots = {
  base: "parkPinInput",
  root: [
    "parkPinInput__root",

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-1.5",
    "flex-col"
  ],
  label: [
    "parkPinInput__label",

    // Typography
    "text-fg-default",
    "font-medium"
  ],
  input: [
    "parkPinInput__input",

    // Spacing
    "px-0",

    // Typography
    "text-center"
  ],
  control: [
    "parkPinInput__control",

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-2"
  ]
} as const satisfies Record<Slots, string | string[]>;

// * Uncomment after styling slots
// createDocs("styled", pinInputStyledSlots);
