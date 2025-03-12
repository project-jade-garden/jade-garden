// * https://github.com/radix-ui/primitives/blob/main/packages/react/aspect-ratio/src/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Aspect Ratio**
 * @description Displays content within a desired ratio.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/aspect-ratio#anatomy)
 */
export const slots = ["root"];

/**
 * **Aspect Ratio**
 * @description Displays content within a desired ratio.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/aspect-ratio#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Aspect Ratio**
 * @description Displays content within a desired ratio.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/aspect-ratio#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
