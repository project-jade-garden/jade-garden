// * https://github.com/radix-ui/primitives/blob/main/packages/react/checkbox/src/index.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Checkbox**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/checkbox#anatomy)
 */
export const slots = ["indicator", "root"] as const;

/**
 * **Checkbox**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/checkbox#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Checkbox**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/checkbox#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    indicator: {
      state: "checked" | "unchecked" | "indeterminate";
      disabled: "";
    };
    root: {
      state: "checked" | "unchecked" | "indeterminate";
      disabled: "";
    };
  }
>;
