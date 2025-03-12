// * https://github.com/radix-ui/primitives/blob/main/packages/react/slider/src/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Slider**
 * @description An input where the user selects a value from within a given range.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/slider#anatomy)
 */
export const slots = ["range", "root", "thumb", "track"] as const;

/**
 * **Slider**
 * @description An input where the user selects a value from within a given range.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/slider#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
