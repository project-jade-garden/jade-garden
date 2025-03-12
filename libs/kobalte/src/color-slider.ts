// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/color-slider/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Color Slider**
 * @description Adjusts an individual channel of a color value.
 * @see [source](https://kobalte.dev/docs/core/components/color-slider#anatomy)
 */
export const slots = ["root", "description", "errorMessage", "input", "label", "thumb", "track", "valueLabel"] as const;

/**
 * **Color Slider**
 * @description Adjusts an individual channel of a color value.
 * @see [source](https://kobalte.dev/docs/core/components/color-slider#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
