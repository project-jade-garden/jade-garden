// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/color-wheel/index.tsx
import type { SVATraits } from "jade-garden";

/**
 * **Color Wheel**
 * @description Allows users to adjust the hue of an HSL or HSB color value on a circular track.
 * @see [source](https://kobalte.dev/docs/core/components/color-wheel#anatomy)
 */
export const slots = ["root", "description", "errorMessage", "input", "label", "thumb", "track", "valueLabel"] as const;

/**
 * **Color Wheel**
 * @description Allows users to adjust the hue of an HSL or HSB color value on a circular track.
 * @see [source](https://kobalte.dev/docs/core/components/color-wheel#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Color Wheel**
 * @description Allows users to adjust the hue of an HSL or HSB color value on a circular track.
 * @see [source](https://kobalte.dev/docs/core/components/color-wheel#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  { root: {}; description: {}; errorMessage: {}; input: {}; label: {}; thumb: {}; track: {}; valueLabel: {} }
>;
