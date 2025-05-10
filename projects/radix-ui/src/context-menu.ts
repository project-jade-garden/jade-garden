// * https://github.com/radix-ui/primitives/blob/main/packages/react/context-menu/src/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Context Menu**
 * @description Displays a menu located at the pointer, triggered by a right click or a long press.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/context-menu#anatomy)
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
 * **Context Menu**
 * @description Displays a menu located at the pointer, triggered by a right click or a long press.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/context-menu#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Context Menu**
 * @description Displays a menu located at the pointer, triggered by a right click or a long press.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/context-menu#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    arrow: {};
    checkboxItem: {};
    content: {};
    group: {};
    item: {};
    itemIndicator: {};
    label: {};
    radioGroup: {};
    radioItem: {};
    root: {};
    separator: {};
    sub: {};
    subContent: {};
    subTrigger: {};
    trigger: {};
  }
>;
