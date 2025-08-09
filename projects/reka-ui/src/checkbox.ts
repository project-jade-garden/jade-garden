// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Checkbox/index.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Checkbox**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://reka-ui.com/docs/components/checkbox#anatomy)
 */
export const slots = ["groupRoot", "root", "indicator"] as const;

/**
 * **Checkbox**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://reka-ui.com/docs/components/checkbox#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Checkbox**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://reka-ui.com/docs/components/checkbox#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      state: "checked" | "unchecked" | "indeterminate";
      disabled: "";
    };
    indicator: {
      state: "checked" | "unchecked" | "indeterminate";
      disabled: "";
    };
  }
>;
