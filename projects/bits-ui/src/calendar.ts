// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/calendar/exports.ts
import type { SVATraits } from "jade-garden";

/**
 * **Calendar**
 * @description Displays dates and days of the week, facilitating date-related interactions.
 * @see [source](https://www.bits-ui.com/docs/components/calendar#api-reference)
 */
export const slots = [
  "root",
  "day",
  "grid",
  "gridBody",
  "cell",
  "gridHead",
  "headCell",
  "gridRow",
  "header",
  "heading",
  "nextButton",
  "prevButton"
] as const;

/**
 * **Calendar**
 * @description Displays dates and days of the week, facilitating date-related interactions.
 * @see [source](https://www.bits-ui.com/docs/components/calendar#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Calendar**
 * @description Displays dates and days of the week, facilitating date-related interactions.
 * @see [source](https://www.bits-ui.com/docs/components/calendar#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {};
    day: {};
    grid: {};
    gridBody: {};
    cell: {};
    gridHead: {};
    headCell: {};
    gridRow: {};
    header: {};
    heading: {};
    nextButton: {};
    prevButton: {};
  }
>;
