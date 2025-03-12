// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Calendar/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Calendar**
 * @description Displays dates and days of the week, facilitating date-related interactions.
 * @see [source](https://reka-ui.com/docs/components/calendar#anatomy)
 */
export const slots = [
  "root",
  "header",
  "heading",
  "grid",
  "cell",
  "headCell",
  "next",
  "prev",
  "gridHead",
  "gridBody",
  "gridRow",
  "cellTrigger"
] as const;

/**
 * **Calendar**
 * @description Displays dates and days of the week, facilitating date-related interactions.
 * @see [source](https://reka-ui.com/docs/components/calendar#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
