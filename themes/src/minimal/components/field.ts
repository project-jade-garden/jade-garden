import { type Slots, createSlots } from "@spark-css/core/field";

/**
 * **Field**
 * @description Provides a flexible container for form inputs, labels, and helper text.
 *
 * @returns
 * ```js
 * {
 *   base: "field",
 *   root: "field__root",
 *   errorText: "field__error-text",
 *   helperText: "field__helper-text",
 *   input: "field__input",
 *   label: "field__label",
 *   select: "field__select",
 *   textarea: "field__textarea",
 *   requiredIndicator: "field__required-indicator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/field#anatomy)
 */
const slots = createSlots({});

/**
 * @typedef {import("@spark-css/core/field").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: "field",
  root: "field__root",
  errorText: "field__error-text",
  helperText: "field__helper-text",
  input: "field__input",
  label: "field__label",
  select: "field__select",
  textarea: "field__textarea",
  requiredIndicator: "field__required-indicator"
} satisfies Record<Slots, string | string[]>;

/**
 * **Field**
 * @description Provides a flexible container for form inputs, labels, and helper text.
 *
 * @example
 * ```css
 * .field { }
 *
 * .field__root { }
 *
 * .field__error-text { }
 *
 * .field__helper-text { }
 *
 * .field__input { }
 *
 * .field__label { }
 *
 * .field__select { }
 *
 * .field__textarea { }
 *
 * .field__required-indicator { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/field#anatomy)
 */
export const field = styledSlots;
