// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/date-picker/date-picker.anatomy.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Date Picker**
 * @description A component that allows users to select a date from a calendar.
 * @see [source](https://ark-ui.com/docs/components/date-picker#anatomy)
 */
export const slots = [
  "clearTrigger",
  "content",
  "control",
  "input",
  "label",
  "monthSelect",
  "nextTrigger",
  "positioner",
  "presetTrigger",
  "prevTrigger",
  "rangeText",
  "root",
  "table",
  "tableBody",
  "tableCell",
  "tableCellTrigger",
  "tableHead",
  "tableHeader",
  "tableRow",
  "trigger",
  "view",
  "viewControl",
  "viewTrigger",
  "yearSelect"
] as const;

/**
 * **Date Picker**
 * @description A component that allows users to select a date from a calendar.
 * @see [source](https://ark-ui.com/docs/components/date-picker#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Date Picker**
 * @description A component that allows users to select a date from a calendar.
 * @see [source](https://ark-ui.com/docs/components/date-picker#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    content: {
      scope: "date-picker";
      part: "content";
      state: "open" | "closed";
      placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
    };
    control: {
      scope: "date-picker";
      part: "control";
      disabled: "";
    };
    input: {
      scope: "date-picker";
      part: "input";
      index: "number";
      state: "open" | "closed";
    };
    label: {
      scope: "date-picker";
      part: "label";
      state: "open" | "closed";
      index: "number";
      disabled: "";
      readonly: "";
    };
    nextTrigger: {
      scope: "date-picker";
      part: "next-trigger";
      disabled: "";
    };
    prevTrigger: {
      scope: "date-picker";
      part: "prev-trigger";
      disabled: "";
    };
    root: {
      scope: "date-picker";
      part: "root";
      state: "open" | "closed";
      disabled: "";
      readonly: "";
    };
    table: {
      scope: "date-picker";
      part: "table";
      columns: "";
      view: "day" | "month" | "year";
    };
    tableBody: {
      scope: "date-picker";
      part: "table-body";
      view: "day" | "month" | "year";
      disabled: "";
    };
    tableHead: {
      scope: "date-picker";
      part: "table-head";
      view: "day" | "month" | "year";
      disabled: "";
    };
    tableHeader: {
      scope: "date-picker";
      part: "table-header";
      view: "day" | "month" | "year";
      disabled: "";
    };
    tableRow: {
      scope: "date-picker";
      part: "table-row";
      disabled: "";
      view: "day" | "month" | "year";
    };
    trigger: {
      scope: "date-picker";
      part: "trigger";
      placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
      state: "open" | "closed";
    };
    view: {
      scope: "date-picker";
      part: "view";
      view: "day" | "month" | "year";
    };
    viewControl: { scope: "date-picker"; part: "view-control"; view: "day" | "month" | "year" };
    viewTrigger: { scope: "date-picker"; part: "view-trigger"; view: "day" | "month" | "year" };
  }
>;
