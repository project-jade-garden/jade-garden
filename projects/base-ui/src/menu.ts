// * https://github.com/mui/base-ui/blob/master/packages/react/src/menu/index.parts.ts

/**
 * **Menu**
 * @description A list of actions in a dropdown, enhanced with keyboard navigation.
 * @see [source](https://base-ui.com/react/components/menu#api-reference)
 */
export const slots = [
  "arrow",
  "backdrop",
  "checkboxItem",
  "checkboxItemIndicator",
  "group",
  "groupLabel",
  "item",
  "popup",
  "positioner",
  "radioGroup",
  "radioItem",
  "radioItemIndicator",
  "root",
  "separator",
  "submenuTrigger",
  "trigger"
] as const;

/**
 * **Menu**
 * @description A list of actions in a dropdown, enhanced with keyboard navigation.
 * @see [source](https://base-ui.com/react/components/menu#api-reference)
 */
export type Slots = (typeof slots)[number];
