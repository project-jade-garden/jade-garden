// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/collapsible/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Collapsible**
 * @description An interactive component which expands/collapses a content.
 * @see [source](https://kobalte.dev/docs/core/components/collapsible#anatomy)
 */
export const slots = ["content", "trigger"] as const;

/**
 * **Collapsible**
 * @description An interactive component which expands/collapses a content.
 * @see [source](https://kobalte.dev/docs/core/components/collapsible#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Collapsible**
 * @description An interactive component which expands/collapses a content.
 * @see [source](https://kobalte.dev/docs/core/components/collapsible#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
