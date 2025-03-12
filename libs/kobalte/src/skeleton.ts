// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/skeleton/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Skeleton**
 * @description Visually indicates content loading
 * @see [source](https://kobalte.dev/docs/core/components/skeleton#anatomy)
 */
export const slots = ["root"];

/**
 * **Skeleton**
 * @description Visually indicates content loading
 * @see [source](https://kobalte.dev/docs/core/components/skeleton#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Skeleton**
 * @description Visually indicates content loading
 * @see [source](https://kobalte.dev/docs/core/components/skeleton#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
