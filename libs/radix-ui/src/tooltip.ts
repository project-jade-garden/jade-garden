// * https://github.com/radix-ui/primitives/blob/main/packages/react/tooltip/src/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Tooltip**
 * @description A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/tooltip#anatomy)
 */
export const slots = ["arrow", "content", "provider", "root", "trigger"] as const;

/**
 * **Tooltip**
 * @description A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/tooltip#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tooltip**
 * @description A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/tooltip#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
