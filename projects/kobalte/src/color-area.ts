// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/color-area/index.tsx
import type { SVATraits } from "jade-garden/types";

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

/**
 * **Color Area**
 * @description Allows users to adjust two channels of an RGB, HSL, or HSB color value against a two-dimensional gradient background.
 * @see [source](https://kobalte.dev/docs/core/components/color-area#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {};
    description: {};
    errorMessage: {};
    label: {};
    background: {};
    thumb: {};
    hiddenInputX: {};
    hiddenInputY: {};
  }
>;
