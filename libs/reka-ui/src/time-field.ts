// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/TimeField/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Time Field**
 * @description Enables users to input specific times within a designated field.
 * @see [source](https://reka-ui.com/docs/components/time-field#anatomy)
 */
export const slots = ["input", "root"] as const;

/**
 * **Time Field**
 * @description Enables users to input specific times within a designated field.
 * @see [source](https://reka-ui.com/docs/components/time-field#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
