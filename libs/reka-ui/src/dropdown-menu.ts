// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/DropdownMenu/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Dropdown Menu**
 * @description Displays a menu to the user—such as a set of actions or functions—triggered by a button.
 * @see [source](https://reka-ui.com/docs/components/dropdown-menu#anatomy)
 */
export const slots = [
  "root",
  "trigger",
  "portal",
  "content",
  "arrow",
  "item",
  "group",
  "separator",
  "checkboxItem",
  "itemIndicator",
  "label",
  "radioGroup",
  "radioItem",
  "sub",
  "subContent",
  "subTrigger"
] as const;

/**
 * **Dropdown Menu**
 * @description Displays a menu to the user—such as a set of actions or functions—triggered by a button.
 * @see [source](https://reka-ui.com/docs/components/dropdown-menu#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Dropdown Menu**
 * @description Displays a menu to the user—such as a set of actions or functions—triggered by a button.
 * @see [source](https://reka-ui.com/docs/components/dropdown-menu#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
