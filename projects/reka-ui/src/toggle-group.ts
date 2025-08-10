// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/ToggleGroup/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on or off.
 * @see [source](https://reka-ui.com/docs/components/toggle-group#anatomy)
 */
export const slots = ["root", "item"] as const;

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on or off.
 * @see [source](https://reka-ui.com/docs/components/toggle-group#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on or off.
 * @see [source](https://reka-ui.com/docs/components/toggle-group#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      orientation: "vertical" | "horizontal";
    };
    item: {
      state: "on" | "off";
      disabled: "";
      orientation: "vertical" | "horizontal";
    };
  }
>;
