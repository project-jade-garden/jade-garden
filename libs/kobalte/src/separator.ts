// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/separator/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Separator**
 * @description Visually or semantically separates content.
 * @see [source](https://kobalte.dev/docs/core/components/separator#anatomy)
 */
export const slots = ["root"];

/**
 * **Separator**
 * @description Visually or semantically separates content.
 * @see [source](https://kobalte.dev/docs/core/components/separator#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
