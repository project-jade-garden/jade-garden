// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/DateRangeField/index.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Date Range Field**
 * @description Allows users to input a range of dates within a designated field.
 * @see [source](https://reka-ui.com/docs/components/date-range-field#anatomy)
 */
export const slots = ["root", "input"] as const;

/**
 * **Date Range Field**
 * @description Allows users to input a range of dates within a designated field.
 * @see [source](https://reka-ui.com/docs/components/date-range-field#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Date Range Field**
 * @description Allows users to input a range of dates within a designated field.
 * @see [source](https://reka-ui.com/docs/components/date-range-field#api-reference)
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
