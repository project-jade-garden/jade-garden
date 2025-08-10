// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/DropdownMenu/index.ts
import type { SVATraits } from "jade-garden";

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
 * @see [source](https://reka-ui.com/docs/components/dropdown-menu#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    trigger: {
      state: "open" | "closed";
      disabled: "";
    };
    content: {
      state: "open" | "closed";
      side: "left" | "right" | "bottom" | "top";
      align: "start" | "end" | "center";
      orientation: "vertical" | "horizontal";
    };
    item: {
      orientation: "vertical" | "horizontal";
      highlighted: "";
      disabled: "";
    };
  }
>;
