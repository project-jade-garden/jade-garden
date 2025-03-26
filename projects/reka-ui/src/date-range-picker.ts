// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/DateRangePicker/index.ts

/**
 * **Date Range Picker**
 * @description Facilitates the selection of date ranges through an input and calendar-based interface.
 * @see [source](https://reka-ui.com/docs/components/date-range-picker#anatomy)
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
 * **Date Range Picker**
 * @description Facilitates the selection of date ranges through an input and calendar-based interface.
 * @see [source](https://reka-ui.com/docs/components/date-range-picker#anatomy)
 */
export type Slots = (typeof slots)[number];
