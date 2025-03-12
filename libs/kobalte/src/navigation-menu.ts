// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/navigation-menu/index.tsx
import type { ClassValue } from "tailwind-variants";

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

export type TVSlots = Record<Slots, ClassValue>;
