// * https://github.com/radix-ui/primitives/blob/main/packages/react/switch/src/index.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Switch**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/switch#anatomy)
 */
export const slots = ["root", "thumb"] as const;

/**
 * **Switch**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/switch#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Switch**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/switch#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      state: "checked" | "unchecked";
      disabled: "";
    };
    thumb: {
      state: "checked" | "unchecked";
      disabled: "";
    };
  }
>;
