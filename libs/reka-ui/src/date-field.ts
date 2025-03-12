// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/DateField/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Date Field**
 * @description Enables users to input specific dates within a designated field.
 * @see [source](https://reka-ui.com/docs/components/date-field#anatomy)
 */
export const slots = ["root", "input"] as const;

/**
 * **Date Field**
 * @description Enables users to input specific dates within a designated field.
 * @see [source](https://reka-ui.com/docs/components/date-field#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
