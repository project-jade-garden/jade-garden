// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/number-input/number-input.anatomy.ts

/**
 * **Number Input**
 * @description A field that allows user input of numeric values.
 * @see [source](https://ark-ui.com/vue/docs/components/number-input#anatomy)
 */
export const slots = [
  "root",
  "label",
  "input",
  "control",
  "valueText",
  "incrementTrigger",
  "decrementTrigger",
  "scrubber"
] as const;

/**
 * **Number Input**
 * @description A field that allows user input of numeric values.
 * @see [source](https://ark-ui.com/vue/docs/components/number-input#anatomy)
 */
export type Slots = (typeof slots)[number];
