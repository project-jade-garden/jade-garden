// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/range-calendar/exports.ts

/**
 * **Range Calendar**
 * @description Presents a calendar view tailored for selecting date ranges.
 * @see [source](https://www.bits-ui.com/docs/components/range-calendar#api-reference)
 */
export const slots = [
  "root",
  "day",
  "cell",
  "grid",
  "gridBody",
  "gridHead",
  "headCell",
  "gridRow",
  "header",
  "heading",
  "nextButton",
  "prevButton"
] as const;

/**
 * **Range Calendar**
 * @description Presents a calendar view tailored for selecting date ranges.
 * @see [source](https://www.bits-ui.com/docs/components/range-calendar#api-reference)
 */
export type Slots = (typeof slots)[number];
