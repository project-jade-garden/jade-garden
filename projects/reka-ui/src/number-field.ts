// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/NumberField/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Number Field**
 * @description A number field allows a user to enter a number and increment or decrement the value using stepper buttons.
 * @see [source](https://reka-ui.com/docs/components/number-field#anatomy)
 */
export const slots = ["root", "input", "increment", "decrement"] as const;

/**
 * **Number Field**
 * @description A number field allows a user to enter a number and increment or decrement the value using stepper buttons.
 * @see [source](https://reka-ui.com/docs/components/number-field#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Number Field**
 * @description A number field allows a user to enter a number and increment or decrement the value using stepper buttons.
 * @see [source](https://reka-ui.com/docs/components/number-field#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      disabled: "";
    };
    input: {
      disabled: "";
    };
    increment: {
      pressed: "";
      disabled: "";
    };
    decrement: {
      pressed: "";
      disabled: "";
    };
  }
>;
