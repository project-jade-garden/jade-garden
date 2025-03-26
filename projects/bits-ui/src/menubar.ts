// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/menubar/exports.ts

/**
 * **Menubar**
 * @description Organizes and presents a collection of menu options or actions within a horizontal bar.
 * @see [source](https://www.bits-ui.com/docs/components/menubar#api-reference)
 */
export const slots = [
  "root",
  "menu",
  "content",
  "contentStatic",
  "trigger",
  "sub",
  "item",
  "group",
  "groupHeading",
  "arrow",
  "radioItem",
  "separator",
  "subContent",
  "subContentStatic",
  "subTrigger",
  "radioGroup",
  "checkboxItem"
] as const;

/**
 * **Menubar**
 * @description Organizes and presents a collection of menu options or actions within a horizontal bar.
 * @see [source](https://www.bits-ui.com/docs/components/menubar#api-reference)
 */
export type Slots = (typeof slots)[number];
