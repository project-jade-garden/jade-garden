// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/pin-input.ts
import { type Slots, createSlots } from "@spark-css/core/pin-input";

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
const slots = createSlots({ prefix: "park", caseConvention: "camel" });

/**
 * @typedef {import("@spark-css/core/pin-input").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: slots.base,
  root: [
    slots.root,

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-1.5",
    "flex-col"
  ],
  label: [
    slots.label,

    // Typography
    "text-fg-default",
    "font-medium"
  ],
  input: [
    slots.input,

    // Spacing
    "px-0",

    // Typography
    "text-center"
  ],
  control: [
    slots.control,

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-2"
  ]
} satisfies Record<Slots, string | string[]>;

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
export const pinInput = styledSlots;
