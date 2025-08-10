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
    root: {
      scope: "number-input";
      part: "root";
      disabled: "";
      focus: "";
      invalid: "";
    };
    label: {
      scope: "number-input";
      part: "label";
      disabled: "";
      focus: "";
      invalid: "";
    };
    input: {
      scope: "number-input";
      part: "input";
      invalid: "";
    };
    control: {
      scope: "number-input";
      part: "control";
      focus: "";
      disabled: "";
      invalid: "";
    };
    valueText: {
      scope: "number-input";
      part: "value-text";
      disabled: "";
      invalid: "";
      focus: "";
    };
    incrementTrigger: {
      scope: "number-input";
      part: "increment-trigger";
      disabled: "";
    };
    decrementTrigger: {
      scope: "number-input";
      part: "decrement-trigger";
      disabled: "";
    };
    scrubber: {
      scope: "number-input";
      part: "scrubber";
      disabled: "";
    };
  }
>;
