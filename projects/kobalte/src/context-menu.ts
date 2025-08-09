// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/context-menu/index.tsx
import type { SVATraits } from "jade-garden/types";

/**
 * **Context Menu**
 * @description Displays a menu located at the pointer, triggered by a right-click or a long-press.
 * @see [source](https://kobalte.dev/docs/core/components/context-menu#anatomy)
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
 * **Context Menu**
 * @description Displays a menu located at the pointer, triggered by a right-click or a long-press.
 * @see [source](https://kobalte.dev/docs/core/components/context-menu#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Context Menu**
 * @description Displays a menu located at the pointer, triggered by a right-click or a long-press.
 * @see [source](https://kobalte.dev/docs/core/components/context-menu#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {};
    arrow: {};
    checkboxItem: {};
    content: {};
    group: {};
    groupLabel: {};
    icon: {};
    item: {};
    itemDescription: {};
    itemIndicator: {};
    itemLabel: {};
    radioGroup: {};
    radioItem: {};
    separator: {};
    sub: {};
    subContent: {};
    subTrigger: {};
    trigger: {};
  }
>;
