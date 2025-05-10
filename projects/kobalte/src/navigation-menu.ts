// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/navigation-menu/index.tsx
import type { SVATraits } from "jade-garden";

/**
 * **Navigation Menu**
 * @description A collection of links for navigating websites.
 * @see [source](https://kobalte.dev/docs/core/components/navigation-menu#anatomy)
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
  "trigger",
  "viewport"
] as const;

/**
 * **Navigation Menu**
 * @description A collection of links for navigating websites.
 * @see [source](https://kobalte.dev/docs/core/components/navigation-menu#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Navigation Menu**
 * @description A collection of links for navigating websites.
 * @see [source](https://kobalte.dev/docs/core/components/navigation-menu#api-reference)
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
    viewport: {};
  }
>;
