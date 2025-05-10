// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/number-input/number-input.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Number Input**
 * @description A field that allows user input of numeric values.
 * @see [source](https://ark-ui.com/docs/components/number-input#anatomy)
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
 * @see [source](https://ark-ui.com/docs/components/number-input#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Number Input**
 * @description A field that allows user input of numeric values.
 * @see [source](https://ark-ui.com/docs/components/number-input#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {};
    label: {};
    input: {};
    control: {};
    valueText: {};
    incrementTrigger: {};
    decrementTrigger: {};
    scrubber: {};
  }
>;
