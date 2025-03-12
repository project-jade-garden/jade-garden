// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/progress/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Progress**
 * @description Show either determinate or indeterminate progress of an operation over time.
 * @see [source](https://kobalte.dev/docs/core/components/progress#anatomy)
 */
export const slots = ["fill", "label", "track", "valueLabel"] as const;

/**
 * **Progress**
 * @description Show either determinate or indeterminate progress of an operation over time.
 * @see [source](https://kobalte.dev/docs/core/components/progress#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
