// * https://github.com/radix-ui/primitives/blob/main/packages/react/dropdown-menu/src/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Dropdown Menu**
 * @description Displays a menu to the user—such as a set of actions or functions—triggered by a button.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#anatomy)
 */
export const slots = [
  "arrow",
  "checkboxItem",
  "content",
  "group",
  "item",
  "itemIndicator",
  "label",
  "radioGroup",
  "radioItem",
  "root",
  "separator",
  "sub",
  "subContent",
  "subTrigger",
  "trigger"
] as const;

/**
 * **Dropdown Menu**
 * @description Displays a menu to the user—such as a set of actions or functions—triggered by a button.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
