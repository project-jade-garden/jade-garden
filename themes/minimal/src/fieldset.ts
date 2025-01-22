import {
  type FieldsetSlots,
  // createFieldsetDocs,
  createFieldsetSlots
} from "@spark-css/core";

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
// createFieldsetDocs("anatomy", fieldsetSlots);

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
// createFieldsetDocs("styled", fieldsetStyledSlots);
