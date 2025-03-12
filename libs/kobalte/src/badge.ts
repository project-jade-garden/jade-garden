// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/badge/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Badge**
 * @description A Badge component is used to display small pieces of information or status indicators.
 * @see [source](https://kobalte.dev/docs/core/components/badge#anatomy)
 */
export const slots = ["root"];

/**
 * **Badge**
 * @description A Badge component is used to display small pieces of information or status indicators.
 * @see [source](https://kobalte.dev/docs/core/components/badge#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
