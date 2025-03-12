// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/label/exports.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Label**
 * @description Identifies or describes associated UI elements.
 * @see [source](https://www.bits-ui.com/docs/components/label#api-reference)
 */
export const slots = ["root"];

/**
 * **Label**
 * @description Identifies or describes associated UI elements.
 * @see [source](https://www.bits-ui.com/docs/components/label#api-reference)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
