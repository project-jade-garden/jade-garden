// * https://github.com/radix-ui/primitives/blob/main/packages/react/label/src/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Label**
 * @description Renders an accessible label associated with controls.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/label#anatomy)
 */
export const slots = ["root"];

/**
 * **Label**
 * @description Renders an accessible label associated with controls.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/label#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Label**
 * @description Renders an accessible label associated with controls.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/label#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
