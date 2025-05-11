// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Toggle/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Toggle**
 * @description A two-state button that can be either on or off.
 * @see [source](https://reka-ui.com/docs/components/toggle#anatomy)
 */
export const slots = ["root"] as const;

/**
 * **Toggle**
 * @description A two-state button that can be either on or off.
 * @see [source](https://reka-ui.com/docs/components/toggle#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Toggle**
 * @description A two-state button that can be either on or off.
 * @see [source](https://reka-ui.com/docs/components/toggle#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      state: "on" | "off";
      disabled: "";
    };
  }
>;
