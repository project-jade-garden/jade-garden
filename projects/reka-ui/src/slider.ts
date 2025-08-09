// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Slider/index.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Slider**
 * @description An input where the user selects a value from within a given range.
 * @see [source](https://reka-ui.com/docs/components/slider#anatomy)
 */
export const slots = ["root", "thumb", "track", "range"] as const;

/**
 * **Slider**
 * @description An input where the user selects a value from within a given range.
 * @see [source](https://reka-ui.com/docs/components/slider#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Slider**
 * @description An input where the user selects a value from within a given range.
 * @see [source](https://reka-ui.com/docs/components/slider#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      disabled: "";
      orientation: "vertical" | "horizontal";
    };
    thumb: {
      disabled: "";
      orientation: "vertical" | "horizontal";
    };
    track: {
      disabled: "";
      orientation: "vertical" | "horizontal";
    };
    range: {
      disabled: "";
      orientation: "vertical" | "horizontal";
    };
  }
>;
