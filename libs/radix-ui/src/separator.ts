// * https://github.com/radix-ui/primitives/blob/main/packages/react/separator/src/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Separator**
 * @description Visually or semantically separates content.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/separator#anatomy)
 */
export const slots = ["root"];

/**
 * **Separator**
 * @description Visually or semantically separates content.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/separator#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Separator**
 * @description Visually or semantically separates content.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/separator#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
