import { createSlots } from "@spark-css/core/fieldset";
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
const slots = createSlots({});
/**
 * @typedef {import("@spark-css/core/fieldset").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: slots.base,
  root: slots.root,
  errorText: slots.errorText,
  helperText: slots.helperText,
  legend: slots.legend
};
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
export const fieldset = styledSlots;
