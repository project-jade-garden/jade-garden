// * https://github.com/radix-ui/primitives/blob/main/packages/react/dropdown-menu/src/index.ts
import type { SVATraits } from "jade-garden";

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

/**
 * **Dropdown Menu**
 * @description Displays a menu to the user—such as a set of actions or functions—triggered by a button.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
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
    trigger: {
      state: "open" | "closed";
      disabled: "";
    };
  }
>;
