// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/alert/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Alert**
 * @description Display a brief, important message in a way that attracts the user's attention without interrupting the user's task.
 * @see [source](https://kobalte.dev/docs/core/components/alert#anatomy)
 */
export const slots = ["root"];

/**
 * **Alert**
 * @description Display a brief, important message in a way that attracts the user's attention without interrupting the user's task.
 * @see [source](https://kobalte.dev/docs/core/components/alert#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
