import { type PinInputSlots, createPinInputSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Pin Input**
 * @description For pin or verification codes with auto-focus transfer and masking options.
 *
 * @returns
 * ```js
 * {
 *   base: "pin-input",
 *   root: "pin-input__root",
 *   label: "pin-input__label",
 *   input: "pin-input__input",
 *   control: "pin-input__control"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/pin-input#anatomy)
 */
export const pinInputSlots = createPinInputSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("pin-input", pinInputSlots));

/**
 * **Pin Input**
 * @description For pin or verification codes with auto-focus transfer and masking options.
 *
 * @example
 * ```css
 * .pin-input { }
 *
 * .pin-input__root { }
 *
 * .pin-input__label { }
 *
 * .pin-input__input { }
 *
 * .pin-input__control { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/pin-input#anatomy)
 */
export const pinInputStyledSlots = {
  base: "pin-input",
  root: "pin-input__root",
  label: "pin-input__label",
  input: "pin-input__input",
  control: "pin-input__control"
} as const satisfies Record<PinInputSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("pin-input", pinInputStyledSlots));
