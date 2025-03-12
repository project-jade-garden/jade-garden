// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/color-field/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Color Field**
 * @description Allows users to enter and adjust a hex color value.
 * @see [source](https://kobalte.dev/docs/core/components/color-field#anatomy)
 */
export const slots = ["description", "errorMessage", "input", "label"] as const;

/**
 * **Color Field**
 * @description Allows users to enter and adjust a hex color value.
 * @see [source](https://kobalte.dev/docs/core/components/color-field#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Color Field**
 * @description Allows users to enter and adjust a hex color value.
 * @see [source](https://kobalte.dev/docs/core/components/color-field#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
