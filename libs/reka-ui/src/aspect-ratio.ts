// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/AspectRatio/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Aspect Ratio**
 * @description Displays content within a desired ratio.
 * @see [source](https://reka-ui.com/docs/components/aspect-ratio#anatomy)
 */
export const slots = ["root"];

/**
 * **Aspect Ratio**
 * @description Displays content within a desired ratio.
 * @see [source](https://reka-ui.com/docs/components/aspect-ratio#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
