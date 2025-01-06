import { type FieldSlots, createFieldSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

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
export const fieldSlots = createFieldSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("field", fieldSlots));

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
export const fieldStyledSlots = {
  base: "field",
  root: "field__root",
  errorText: "field__error-text",
  helperText: "field__helper-text",
  input: "field__input",
  label: "field__label",
  select: "field__select",
  textarea: "field__textarea",
  requiredIndicator: "field__required-indicator"
} as const satisfies Record<FieldSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("field", fieldStyledSlots));
