// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/color-wheel/index.tsx
import type { ClassValue } from "tailwind-variants";

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

export type TVSlots = Record<Slots, ClassValue>;
