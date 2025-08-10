// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/DateRangePicker/index.ts
import type { SVATraits } from "jade-garden";

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

/**
 * **Date Range Picker**
 * @description Facilitates the selection of date ranges through an input and calendar-based interface.
 * @see [source](https://reka-ui.com/docs/components/date-range-picker#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    heading: {
      disabled: "";
    };
    grid: {
      readonly: "";
      disabled: "";
    };
    cell: {
      disabled: "";
    };
    cellTrigger: {
      selected: "";
      value: "";
      disabled: "";
      unavailable: "";
      today: "";
      "outside-view": "";
      "outside-visible-view": "";
      "selection-start": "";
      "selection-end": "";
      highlighted: "";
      "highlighted-start": "";
      "highlighted-end": "";
      focused: "";
    };
    input: {
      disabled: "";
      invalid: "";
      placeholder: "";
    };
    calendar: {
      readonly: "";
      invalid: "";
    };
    field: {
      readonly: "";
      invalid: "";
    };
  }
>;
