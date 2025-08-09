// * https://github.com/mui/base-ui/blob/master/packages/react/src/switch/index.parts.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Switch**
 * @description A control that indicates whether a setting is on or off.
 * @see [source](https://base-ui.com/react/components/switch#api-reference)
 */
export const slots = ["root", "thumb"] as const;

/**
 * **Switch**
 * @description A control that indicates whether a setting is on or off.
 * @see [source](https://base-ui.com/react/components/switch#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Switch**
 * @description A control that indicates whether a setting is on or off.
 * @see [source](https://base-ui.com/react/components/switch#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      checked: "";
      unchecked: "";
      disabled: "";
      readonly: "";
      required: "";
      valid: "";
      invalid: "";
      dirty: "";
      touched: "";
      filled: "";
      focused: "";
    };
    thumb: {
      checked: "";
      unchecked: "";
      disabled: "";
      readonly: "";
      required: "";
      valid: "";
      invalid: "";
      dirty: "";
      touched: "";
      filled: "";
      focused: "";
    };
  }
>;
