// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/slider/exports.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Slider**
 * @description Allows users to select a value from a continuous range by sliding a handle.
 * @see [source](https://www.bits-ui.com/docs/components/slider#api-reference)
 */
export const slots = ["root", "range", "thumb", "tick"] as const;

/**
 * **Slider**
 * @description Allows users to select a value from a continuous range by sliding a handle.
 * @see [source](https://www.bits-ui.com/docs/components/slider#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Slider**
 * @description Allows users to select a value from a continuous range by sliding a handle.
 * @see [source](https://www.bits-ui.com/docs/components/slider#api-reference)
 */
export type TVSlots = Record<Slots, ClassValue>;
