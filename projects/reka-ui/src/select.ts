// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Select/index.ts

/**
 * **Select**
 * @description Displays a list of options for the user to pick from—triggered by a button.
 * @see [source](https://reka-ui.com/docs/components/select#anatomy)
 */
export const slots = [
  "root",
  "trigger",
  "portal",
  "content",
  "arrow",
  "separator",
  "itemIndicator",
  "label",
  "group",
  "item",
  "itemText",
  "viewport",
  "scrollUpButton",
  "scrollDownButton",
  "value",
  "icon"
] as const;

/**
 * **Select**
 * @description Displays a list of options for the user to pick from—triggered by a button.
 * @see [source](https://reka-ui.com/docs/components/select#anatomy)
 */
export type Slots = (typeof slots)[number];
