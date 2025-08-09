// * https://github.com/radix-ui/primitives/blob/main/packages/react/form/src/index.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Form**
 * @description Collect information from your users using validation rules.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/form#anatomy)
 */
export const slots = ["control", "field", "label", "message", "root", "submit", "validityState"] as const;

/**
 * **Form**
 * @description Collect information from your users using validation rules.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/form#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Form**
 * @description Collect information from your users using validation rules.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/form#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    control: {
      invalid: "";
      valid: "";
    };
    field: {
      invalid: "";
      valid: "";
    };
    label: {
      invalid: "";
      valid: "";
    };
  }
>;
