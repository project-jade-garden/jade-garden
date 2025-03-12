// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/slider/index.tsx
import type { ClassValue } from "tailwind-variants";

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

/**
 * **Slider**
 * @description An input where the user selects a value from within a given range.
 * @see [source](https://kobalte.dev/docs/core/components/slider#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
