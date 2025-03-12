// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/date-picker/date-picker.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Date Picker**
 * @description A component that allows users to select a date from a calendar.
 * @see [source](https://ark-ui.com/vue/docs/components/date-picker#anatomy)
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
 * @see [source](https://ark-ui.com/vue/docs/components/date-picker#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Date Picker**
 * @description A component that allows users to select a date from a calendar.
 * @see [source](https://ark-ui.com/vue/docs/components/date-picker#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
