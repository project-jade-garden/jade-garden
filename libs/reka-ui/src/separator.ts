// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Separator/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Separator**
 * @description Visually or semantically separates content.
 * @see [source](https://reka-ui.com/docs/components/separator#anatomy)
 */
export const slots = ["root"];

/**
 * **Separator**
 * @description Visually or semantically separates content.
 * @see [source](https://reka-ui.com/docs/components/separator#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
