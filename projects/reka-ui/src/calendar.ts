// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Calendar/index.ts
import type { SVATraits } from "jade-garden";

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

/**
 * **Calendar**
 * @description Displays dates and days of the week, facilitating date-related interactions.
 * @see [source](https://reka-ui.com/docs/components/calendar#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {};
    header: {};
    heading: {};
    grid: {};
    cell: {};
    headCell: {};
    next: {};
    prev: {};
    gridHead: {};
    gridBody: {};
    gridRow: {};
    cellTrigger: {};
  }
>;
