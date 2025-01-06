import { type FieldsetSlots, createFieldsetSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Fieldset**
 * @description A set of form controls optionally grouped under a common name.
 *
 * @returns
 * ```js
 * {
 *   base: "fieldset",
 *   root: "fieldset__root",
 *   errorText: "fieldset__error-text",
 *   helperText: "fieldset__helper-text",
 *   legend: "fieldset__legend"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/fieldset#anatomy)
 */
export const fieldsetSlots = createFieldsetSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("fieldset", fieldsetSlots));

/**
 * **Fieldset**
 * @description A set of form controls optionally grouped under a common name.
 *
 * @example
 * ```css
 * .fieldset { }
 *
 * .fieldset__root { }
 *
 * .fieldset__error-text { }
 *
 * .fieldset__helper-text { }
 *
 * .fieldset__legend { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/fieldset#anatomy)
 */
export const fieldsetStyledSlots = {
  base: "fieldset",
  root: "fieldset__root",
  errorText: "fieldset__error-text",
  helperText: "fieldset__helper-text",
  legend: "fieldset__legend"
} as const satisfies Record<FieldsetSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("fieldset", fieldsetStyledSlots));
