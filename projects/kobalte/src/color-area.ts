// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/color-area/index.tsx

/**
 * **Color Area**
 * @description Allows users to adjust two channels of an RGB, HSL, or HSB color value against a two-dimensional gradient background.
 * @see [source](https://kobalte.dev/docs/core/components/color-area#anatomy)
 */
export const slots = [
  "root",
  "description",
  "errorMessage",
  "label",
  "background",
  "thumb",
  "hiddenInputX",
  "hiddenInputY"
] as const;

/**
 * **Color Area**
 * @description Allows users to adjust two channels of an RGB, HSL, or HSB color value against a two-dimensional gradient background.
 * @see [source](https://kobalte.dev/docs/core/components/color-area#anatomy)
 */
export type Slots = (typeof slots)[number];
