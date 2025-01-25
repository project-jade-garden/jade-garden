// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/date-picker.ts
import { createSlots } from "@spark-css/core/date-picker";
/**
 * **Date Picker**
 * @description A component that allows users to select a date from a calendar.
 *
 * @returns
 * ```js
 * {
 *   base: "parkDatePicker",
 *   root: "parkDatePicker__root",
 *   label: "parkDatePicker__label",
 *   clearTrigger: "parkDatePicker__clearTrigger",
 *   content: "parkDatePicker__content",
 *   control: "parkDatePicker__control",
 *   input: "parkDatePicker__input",
 *   monthSelect: "parkDatePicker__monthSelect",
 *   nextTrigger: "parkDatePicker__nextTrigger",
 *   positioner: "parkDatePicker__positioner",
 *   prevTrigger: "parkDatePicker__prevTrigger",
 *   rangeText: "parkDatePicker__rangeText",
 *   table: "parkDatePicker__table",
 *   tableBody: "parkDatePicker__tableBody",
 *   tableCell: "parkDatePicker__tableCell",
 *   tableCellTrigger: "parkDatePicker__tableCellTrigger",
 *   tableHead: "parkDatePicker__tableHead",
 *   tableHeader: "parkDatePicker__tableHeader",
 *   tableRow: "parkDatePicker__tableRow",
 *   trigger: "parkDatePicker__trigger",
 *   viewTrigger: "parkDatePicker__viewTrigger",
 *   viewControl: "parkDatePicker__viewControl",
 *   yearSelect: "parkDatePicker__yearSelect",
 *   presetTrigger: "parkDatePicker__presetTrigger",
 *   view: "parkDatePicker__view"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/date-picker#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });
/**
 * @typedef {import("@spark-css/core/date-picker").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
    base: slots.base,
    root: [
        slots.root,
        // Layout
        "flex",
        // Flexbox & Grid
        "gap-1.5",
        "flex-col"
    ],
    label: [
        slots.label,
        // Typography
        "text-sm",
        "font-medium"
    ],
    clearTrigger: slots.clearTrigger,
    content: [
        slots.content,
        // Spacing
        "p-4",
        // Sizing
        "w-[344px]",
        // Backgrounds
        "bg-bg-default",
        // Borders
        "rounded-l3",
        // Effects
        "shadow-lg",
        // Layout
        "flex",
        "[&:is([hidden])]:hidden",
        "z-[--z-index-dropdown]",
        // Flexbox & Grid
        "gap-3",
        "flex-col",
        // Transitions & Animation
        "[&:is([open],_[data-open],_[data-state=open])]:animate-fade-in",
        "[&:is([closed],_[data-closed],_[data-state=closed])]:animate-fade-out"
    ],
    control: [
        slots.control,
        // Layout
        "flex",
        // Flexbox & Grid
        "gap-2",
        "flex-row"
    ],
    input: slots.input,
    monthSelect: slots.monthSelect,
    nextTrigger: slots.nextTrigger,
    positioner: slots.positioner,
    prevTrigger: slots.prevTrigger,
    rangeText: slots.rangeText,
    table: [
        slots.table,
        // Spacing
        "-m-1",
        // Sizing
        "w-full",
        // Borders
        "border-separate",
        "border-spacing-1"
    ],
    tableBody: slots.tableBody,
    tableCell: [
        slots.tableCell,
        // Flexbox & Grid
        "text-center"
    ],
    tableCellTrigger: [
        slots.tableCellTrigger,
        // Spacing
        "[&:is([data-today])]:before:mt-6",
        // Sizing
        "w-full",
        // Backgrounds
        "data-[in-range]:bg-bg-muted",
        // Layout
        "[&:is([data-today])]:before:absolute",
        // Typography
        "[&:is([data-today])]:before:text-[--colors-color-palette-default]",
        "[&:is([aria-selected=true],_[data-selected])]:before:text-color-palette-fg",
        "[&:is([data-today])]:before:content-['-']"
    ],
    tableHead: slots.tableHead,
    tableHeader: [
        slots.tableHeader,
        // Sizing
        "h-10",
        // Typography
        "text-fg-muted",
        "text-sm",
        "font-semibold"
    ],
    tableRow: slots.tableRow,
    trigger: slots.trigger,
    viewTrigger: slots.viewTrigger,
    viewControl: [
        slots.viewControl,
        // Layout
        "flex",
        // Flexbox & Grid
        "gap-2",
        "justify-between"
    ],
    yearSelect: slots.yearSelect,
    presetTrigger: slots.presetTrigger,
    view: [
        slots.view,
        // Layout
        "flex",
        "[&:is([hidden])]:hidden",
        // Flexbox & Grid
        "gap-3",
        "flex-col"
    ]
};
/**
 * **Date Picker**
 * @description A component that allows users to select a date from a calendar.
 *
 * @example
 * ```css
 * .parkDatePicker { }
 *
 * .parkDatePicker__root {
 *   (@)apply flex gap-1.5 flex-col;
 * }
 *
 * .parkDatePicker__label {
 *   (@)apply text-sm font-medium;
 * }
 *
 * .parkDatePicker__clearTrigger { }
 *
 * .parkDatePicker__content {
 *   (@)apply p-4 w-[344px] bg-bg-default rounded-l3 shadow-lg flex [&:is([hidden])]:hidden z-[--z-index-dropdown] gap-3 flex-col [&:is([open],_[data-open],_[data-state=open])]:animate-fade-in [&:is([closed],_[data-closed],_[data-state=closed])]:animate-fade-out;
 * }
 *
 * .parkDatePicker__control {
 *   (@)apply flex gap-2 flex-row;
 * }
 *
 * .parkDatePicker__input { }
 *
 * .parkDatePicker__monthSelect { }
 *
 * .parkDatePicker__nextTrigger { }
 *
 * .parkDatePicker__positioner { }
 *
 * .parkDatePicker__prevTrigger { }
 *
 * .parkDatePicker__rangeText { }
 *
 * .parkDatePicker__table {
 *   (@)apply -m-1 w-full border-separate border-spacing-1;
 * }
 *
 * .parkDatePicker__tableBody { }
 *
 * .parkDatePicker__tableCell {
 *   (@)apply text-center;
 * }
 *
 * .parkDatePicker__tableCellTrigger {
 *   (@)apply [&:is([data-today])]:before:mt-6 w-full data-[in-range]:bg-bg-muted [&:is([data-today])]:before:absolute [&:is([data-today])]:before:text-[--colors-color-palette-default] [&:is([aria-selected=true],_[data-selected])]:before:text-color-palette-fg [&:is([data-today])]:before:content-['-'];
 * }
 *
 * .parkDatePicker__tableHead { }
 *
 * .parkDatePicker__tableHeader {
 *   (@)apply h-10 text-fg-muted text-sm font-semibold;
 * }
 *
 * .parkDatePicker__tableRow { }
 *
 * .parkDatePicker__trigger { }
 *
 * .parkDatePicker__viewTrigger { }
 *
 * .parkDatePicker__viewControl {
 *   (@)apply flex gap-2 justify-between;
 * }
 *
 * .parkDatePicker__yearSelect { }
 *
 * .parkDatePicker__presetTrigger { }
 *
 * .parkDatePicker__view {
 *   (@)apply flex [&:is([hidden])]:hidden gap-3 flex-col;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/date-picker#anatomy)
 */
export const datePicker = styledSlots;
