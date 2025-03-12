// * https://github.com/radix-ui/primitives/blob/main/packages/react/scroll-area/src/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Scroll Area**
 * @description Augments native scroll functionality for custom, cross-browser styling.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/scroll-area#anatomy)
 */
export const slots = ["corner", "root", "scrollbar", "thumb", "viewport"] as const;

/**
 * **Scroll Area**
 * @description Augments native scroll functionality for custom, cross-browser styling.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/scroll-area#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Scroll Area**
 * @description Augments native scroll functionality for custom, cross-browser styling.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/scroll-area#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
