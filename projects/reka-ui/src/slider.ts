// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Slider/index.ts

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
