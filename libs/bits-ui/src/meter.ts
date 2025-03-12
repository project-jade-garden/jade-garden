// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/meter/exports.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Meter**
 * @description Display real-time measurements within a defined range.
 * @see [source](https://www.bits-ui.com/docs/components/#api-reference)
 */
export const slots = ["root"];

/**
 * **Meter**
 * @description Display real-time measurements within a defined range.
 * @see [source](https://www.bits-ui.com/docs/components/#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Meter**
 * @description Display real-time measurements within a defined range.
 * @see [source](https://www.bits-ui.com/docs/components/#api-reference)
 */
export type TVSlots = Record<Slots, ClassValue>;
