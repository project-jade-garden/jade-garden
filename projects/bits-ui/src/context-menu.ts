// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/context-menu/exports.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Context Menu**
 * @description Displays options or actions relevant to a specific context or selected item, triggered by a right-click.
 * @see [source](https://www.bits-ui.com/docs/components/context-menu#api-reference)
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
 * **Context Menu**
 * @description Displays options or actions relevant to a specific context or selected item, triggered by a right-click.
 * @see [source](https://www.bits-ui.com/docs/components/context-menu#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Context Menu**
 * @description Displays options or actions relevant to a specific context or selected item, triggered by a right-click.
 * @see [source](https://www.bits-ui.com/docs/components/context-menu#api-reference)
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
