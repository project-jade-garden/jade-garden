// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/slider/index.tsx

/**
 * **Slider**
 * @description An input where the user selects a value from within a given range.
 * @see [source](https://kobalte.dev/docs/core/components/slider#anatomy)
 */
export const slots = [
  "root",
  "description",
  "errorMessage",
  "fill",
  "input",
  "label",
  "thumb",
  "track",
  "valueLabel"
] as const;

/**
 * **Slider**
 * @description An input where the user selects a value from within a given range.
 * @see [source](https://kobalte.dev/docs/core/components/slider#anatomy)
 */
export type Slots = (typeof slots)[number];
