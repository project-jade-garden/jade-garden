import { type Slots, createSlots } from "@spark-css/core/number-input";

/**
 * **Number Input**
 * @description A field that allows user input of numeric values.
 *
 * @returns
 * ```js
 * {
 *   base: "number-input",
 *   root: "number-input__root",
 *   label: "number-input__label",
 *   input: "number-input__input",
 *   control: "number-input__control",
 *   valueText: "number-input__value-text",
 *   incrementTrigger: "number-input__increment-trigger",
 *   decrementTrigger: "number-input__decrement-trigger",
 *   scrubber: "number-input__scrubber"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/number-input#anatomy)
 */
const slots = createSlots({});

/**
 * @typedef { import("@spark-css/core/number-input").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: slots.root,
  label: slots.label,
  input: slots.input,
  control: slots.control,
  valueText: slots.valueText,
  incrementTrigger: slots.incrementTrigger,
  decrementTrigger: slots.decrementTrigger,
  scrubber: slots.scrubber
} satisfies Record<Slots, string | string[]>;

/**
 * **Number Input**
 * @description A field that allows user input of numeric values.
 *
 * @example
 * ```css
 * .number-input { }
 *
 * .number-input__root { }
 *
 * .number-input__label { }
 *
 * .number-input__input { }
 *
 * .number-input__control { }
 *
 * .number-input__value-text { }
 *
 * .number-input__increment-trigger { }
 *
 * .number-input__decrement-trigger { }
 *
 * .number-input__scrubber { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/number-input#anatomy)
 */
export const numberInputStyles = styledSlots;
