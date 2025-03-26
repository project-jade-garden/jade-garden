// * https://github.com/radix-ui/primitives/blob/main/packages/react/select/src/index.ts

/**
 * **Select**
 * @description Displays a list of options for the user to pick from—triggered by a button.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/select#anatomy)
 */
export const slots = [
  "arrow",
  "content",
  "group",
  "icon",
  "item",
  "itemIndicator",
  "itemText",
  "label",
  "root",
  "scrollDownButton",
  "scrollUpButton",
  "separator",
  "trigger",
  "value",
  "viewport"
] as const;

/**
 * **Select**
 * @description Displays a list of options for the user to pick from—triggered by a button.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/select#anatomy)
 */
export type Slots = (typeof slots)[number];
