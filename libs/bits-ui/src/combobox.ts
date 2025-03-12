// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/combobox/exports.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Combobox**
 * @description Enables users to pick from a list of options displayed in a dropdown.
 * @see [source](https://www.bits-ui.com/docs/components/combobox#api-reference)
 */
export const slots = [
  "root",
  "input",
  "separator",
  "arrow",
  "trigger",
  "content",
  "contentStatic",
  "item",
  "group",
  "groupHeading",
  "viewport",
  "scrollDownButton",
  "scrollUpButton"
] as const;

/**
 * **Combobox**
 * @description Enables users to pick from a list of options displayed in a dropdown.
 * @see [source](https://www.bits-ui.com/docs/components/combobox#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Combobox**
 * @description Enables users to pick from a list of options displayed in a dropdown.
 * @see [source](https://www.bits-ui.com/docs/components/combobox#api-reference)
 */
export type TVSlots = Record<Slots, ClassValue>;
