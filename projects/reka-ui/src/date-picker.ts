// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/DatePicker/index.ts
import type { SVATraits } from "jade-garden";

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

/**
 * **Date Picker**
 * @description Facilitates the selection of dates through an input and calendar-based interface.
 * @see [source](https://reka-ui.com/docs/components/date-picker#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    grid: {
      disabled: "";
      readonly: "";
    };
    cell: {
      disabled: "";
    };
    cellTrigger: {
      selected: "";
      value: "The ISO string value of the date.";
      disabled: "";
      unavailable: "";
      today: "";
      "outside-view": "";
      "outside-visible-view": "";
      focused: "";
    };
    input: {
      disabled: "";
      invalid: "";
      placeholder: "";
    };
    calendar: {
      disabled: "";
      readonly: "";
    };
    field: {
      readonly: "";
      invalid: "";
    };
  }
>;
