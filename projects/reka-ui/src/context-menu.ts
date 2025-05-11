// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/ContextMenu/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Context Menu**
 * @description Displays a menu located at the pointer, triggered by a right-click or a long-press.
 * @see [source](https://reka-ui.com/docs/components/context-menu#anatomy)
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
 * **Context Menu**
 * @description Displays a menu located at the pointer, triggered by a right-click or a long-press.
 * @see [source](https://reka-ui.com/docs/components/context-menu#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Context Menu**
 * @description Displays a menu located at the pointer, triggered by a right-click or a long-press.
 * @see [source](https://reka-ui.com/docs/components/context-menu#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    trigger: {
      state: "open" | "closed";
    };
    content: {
      state: "open" | "closed";
      side: "left" | "right" | "bottom" | "top";
      align: "start" | "end" | "center";
    };
    item: {
      highlighted: "";
      disabled: "";
    };
  }
>;
