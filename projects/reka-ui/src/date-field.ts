// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/DateField/index.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Date Field**
 * @description Enables users to input specific dates within a designated field.
 * @see [source](https://reka-ui.com/docs/components/date-field#anatomy)
 */
export const slots = ["root", "input"] as const;

/**
 * **Date Field**
 * @description Enables users to input specific dates within a designated field.
 * @see [source](https://reka-ui.com/docs/components/date-field#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Date Field**
 * @description Enables users to input specific dates within a designated field.
 * @see [source](https://reka-ui.com/docs/components/date-field#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      readonly: "";
      invalid: "";
    };
    input: {
      disabled: "";
      invalid: "";
      placeholder: "";
    };
  }
>;
