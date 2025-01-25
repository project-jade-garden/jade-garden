import { type Slots, createSlots } from "@spark-css/core/date-picker";

/**
 * **Date Picker**
 * @description A component that allows users to select a date from a calendar.
 *
 * @returns
 * ```js
 * {
 *   base: "date-picker",
 *   root: "date-picker__root",
 *   label: "date-picker__label",
 *   clearTrigger: "date-picker__clear-trigger",
 *   content: "date-picker__content",
 *   control: "date-picker__control",
 *   input: "date-picker__input",
 *   monthSelect: "date-picker__month-select",
 *   nextTrigger: "date-picker__next-trigger",
 *   positioner: "date-picker__positioner",
 *   prevTrigger: "date-picker__prev-trigger",
 *   rangeText: "date-picker__range-text",
 *   table: "date-picker__table",
 *   tableBody: "date-picker__table-body",
 *   tableCell: "date-picker__table-cell",
 *   tableCellTrigger: "date-picker__table-cell-trigger",
 *   tableHead: "date-picker__table-head",
 *   tableHeader: "date-picker__table-header",
 *   tableRow: "date-picker__table-row",
 *   trigger: "date-picker__trigger",
 *   viewTrigger: "date-picker__view-trigger",
 *   viewControl: "date-picker__view-control",
 *   yearSelect: "date-picker__year-select",
 *   presetTrigger: "date-picker__preset-trigger",
 *   view: "date-picker__view"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/date-picker#anatomy)
 */
const slots = createSlots({});

/**
 * @typedef {import("@spark-css/core/date-picker").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: slots.base,
  root: slots.root,
  label: slots.label,
  clearTrigger: slots.clearTrigger,
  content: slots.content,
  control: slots.control,
  input: slots.input,
  monthSelect: slots.monthSelect,
  nextTrigger: slots.nextTrigger,
  positioner: slots.positioner,
  prevTrigger: slots.prevTrigger,
  rangeText: slots.rangeText,
  table: slots.table,
  tableBody: slots.tableBody,
  tableCell: slots.tableCell,
  tableCellTrigger: slots.tableCellTrigger,
  tableHead: slots.tableHead,
  tableHeader: slots.tableHeader,
  tableRow: slots.tableRow,
  trigger: slots.trigger,
  viewTrigger: slots.viewTrigger,
  viewControl: slots.viewControl,
  yearSelect: slots.yearSelect,
  presetTrigger: slots.presetTrigger,
  view: slots.view
} satisfies Record<Slots, string | string[]>;

/**
 * **Date Picker**
 * @description A component that allows users to select a date from a calendar.
 *
 * @example
 * ```css
 * .date-picker { }
 *
 * .date-picker__root { }
 *
 * .date-picker__label { }
 *
 * .date-picker__clear-trigger { }
 *
 * .date-picker__content { }
 *
 * .date-picker__control { }
 *
 * .date-picker__input { }
 *
 * .date-picker__month-select { }
 *
 * .date-picker__next-trigger { }
 *
 * .date-picker__positioner { }
 *
 * .date-picker__prev-trigger { }
 *
 * .date-picker__range-text { }
 *
 * .date-picker__table { }
 *
 * .date-picker__table-body { }
 *
 * .date-picker__table-cell { }
 *
 * .date-picker__table-cell-trigger { }
 *
 * .date-picker__table-head { }
 *
 * .date-picker__table-header { }
 *
 * .date-picker__table-row { }
 *
 * .date-picker__trigger { }
 *
 * .date-picker__view-trigger { }
 *
 * .date-picker__view-control { }
 *
 * .date-picker__year-select { }
 *
 * .date-picker__preset-trigger { }
 *
 * .date-picker__view { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/date-picker#anatomy)
 */
export const datePicker = styledSlots;
