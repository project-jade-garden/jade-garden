// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/menubar/index.tsx
import type { SVATraits } from "jade-garden/types";

/**
 * **Menubar**
 * @description A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
 * @see [source](https://kobalte.dev/docs/core/components/menubar#anatomy)
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
  "menu",
  "separator",
  "sub",
  "subContent",
  "subTrigger",
  "trigger"
] as const;

/**
 * **Menubar**
 * @description A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
 * @see [source](https://kobalte.dev/docs/core/components/menubar#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Menubar**
 * @description A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
 * @see [source](https://kobalte.dev/docs/core/components/menubar#api-reference)
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
    menu: {};
    separator: {};
    sub: {};
    subContent: {};
    subTrigger: {};
    trigger: {};
  }
>;
