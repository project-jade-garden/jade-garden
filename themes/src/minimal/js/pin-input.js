import { createSlots } from "@spark-css/core/pin-input";
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
const slots = createSlots({});
/**
 * @typedef {import("@spark-css/core/pin-input").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
    base: slots.base,
    root: slots.root,
    label: slots.label,
    input: slots.input,
    control: slots.control
};
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
export const pinInput = styledSlots;
