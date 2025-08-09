// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/dropdown-menu/exports.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Dropdown Menu**
 * @description Displays a menu of items that users can select from when triggered.
 * @see [source](https://www.bits-ui.com/docs/components/dropdown-menu#api-reference)
 */
export const slots = [
  "root",
  "sub",
  "item",
  "group",
  "groupHeading",
  "arrow",
  "content",
  "contentStatic",
  "trigger",
  "radioItem",
  "separator",
  "radioGroup",
  "subContent",
  "subContentStatic",
  "subTrigger",
  "checkboxItem"
] as const;

/**
 * **Dropdown Menu**
 * @description Displays a menu of items that users can select from when triggered.
 * @see [source](https://www.bits-ui.com/docs/components/dropdown-menu#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Dropdown Menu**
 * @description Displays a menu of items that users can select from when triggered.
 * @see [source](https://www.bits-ui.com/docs/components/dropdown-menu#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {};
    sub: {};
    item: {};
    group: {};
    groupHeading: {};
    arrow: {};
    content: {};
    contentStatic: {};
    trigger: {};
    radioItem: {};
    separator: {};
    radioGroup: {};
    subContent: {};
    subContentStatic: {};
    subTrigger: {};
    checkboxItem: {};
  }
>;
