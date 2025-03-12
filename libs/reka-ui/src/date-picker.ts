// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/DatePicker/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Date Picker**
 * @description Facilitates the selection of dates through an input and calendar-based interface.
 * @see [source](https://reka-ui.com/docs/components/date-picker#anatomy)
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
  "cellTrigger",
  "input",
  "calendar",
  "field",
  "anchor",
  "arrow",
  "close",
  "trigger",
  "content"
] as const;

/**
 * **Date Picker**
 * @description Facilitates the selection of dates through an input and calendar-based interface.
 * @see [source](https://reka-ui.com/docs/components/date-picker#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
