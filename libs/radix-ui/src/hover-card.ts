// * https://github.com/radix-ui/primitives/blob/main/packages/react/hover-card/src/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Hover Card**
 * @description For sighted users to preview content available behind a link.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/hover-card#anatomy)
 */
export const slots = ["arrow", "content", "root", "trigger"] as const;

/**
 * **Hover Card**
 * @description For sighted users to preview content available behind a link.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/hover-card#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
