// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/date-range-picker/exports.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Date Range Picker**
 * @description Facilitates the selection of date ranges through an input and calendar-based interface.
 * @see [source](https://www.bits-ui.com/docs/components/date-range-picker#api-reference)
 */
export const slots = [
  "root",
  "calendar",
  "trigger",
  "content",
  "arrow",
  "close",
  "input",
  "label",
  "segment",
  "gridBody",
  "gridHead",
  "gridRow",
  "grid",
  "headCell",
  "header",
  "heading",
  "nextButton",
  "prevButton",
  "cell",
  "day"
] as const;

/**
 * **Date Range Picker**
 * @description Facilitates the selection of date ranges through an input and calendar-based interface.
 * @see [source](https://www.bits-ui.com/docs/components/date-range-picker#api-reference)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
