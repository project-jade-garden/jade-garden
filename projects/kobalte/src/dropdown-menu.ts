// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/dropdown-menu/index.tsx

/**
 * **Dropdown Menu**
 * @description Displays a menu to the user —such as a set of actions or functions— triggered by a button.
 * @see [source](https://kobalte.dev/docs/core/components/dropdown-menu#anatomy)
 */
export const slots = [
  "root",
  "arrow",
  "checkboxItem",
  "content",
  "group",
  "groupLabel",
  "icon",
  "item",
  "itemDescription",
  "itemIndicator",
  "itemLabel",
  "radioGroup",
  "radioItem",
  "separator",
  "sub",
  "subContent",
  "subTrigger",
  "trigger"
] as const;

/**
 * **Dropdown Menu**
 * @description Displays a menu to the user —such as a set of actions or functions— triggered by a button.
 * @see [source](https://kobalte.dev/docs/core/components/dropdown-menu#anatomy)
 */
export type Slots = (typeof slots)[number];
