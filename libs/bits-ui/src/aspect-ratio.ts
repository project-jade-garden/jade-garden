// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/aspect-ratio/exports.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Aspect Ratio**
 * @description Displays content while maintaining a specified aspect ratio, ensuring consistent visual proportions.
 * @see [source](https://www.bits-ui.com/docs/components/aspect-ratio#api-reference)
 */
export const slots = ["root"];

/**
 * **Aspect Ratio**
 * @description Displays content while maintaining a specified aspect ratio, ensuring consistent visual proportions.
 * @see [source](https://www.bits-ui.com/docs/components/aspect-ratio#api-reference)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
