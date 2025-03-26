// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/command/exports.ts

/**
 * **Command**
 * @description A command menu component that can be used to search, filter, and select items.
 * @see [source](https://www.bits-ui.com/docs/components/command#api-reference)
 */
export const slots = [
  "root",
  "empty",
  "group",
  "groupHeading",
  "groupItems",
  "input",
  "item",
  "linkItem",
  "list",
  "viewport",
  "loading",
  "separator"
] as const;

/**
 * **Command**
 * @description A command menu component that can be used to search, filter, and select items.
 * @see [source](https://www.bits-ui.com/docs/components/command#api-reference)
 */
export type Slots = (typeof slots)[number];
