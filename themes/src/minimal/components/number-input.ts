import {
  type Slots,
  // createDocs,
  createSlots
} from "@spark-css/core/number-input";

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
export const numberInputSlots = createSlots({});

// * Uncomment before styling slots
// createDocs("anatomy", numberInputSlots);

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
export const numberInputStyledSlots = {
  base: "number-input",
  root: "number-input__root",
  label: "number-input__label",
  input: "number-input__input",
  control: "number-input__control",
  valueText: "number-input__value-text",
  incrementTrigger: "number-input__increment-trigger",
  decrementTrigger: "number-input__decrement-trigger",
  scrubber: "number-input__scrubber"
} as const satisfies Record<Slots, string | string[]>;

// * Uncomment after styling slots
// createDocs("styled", numberInputStyledSlots);
