// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/select/exports.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Select**
 * @description Enables users to choose from a list of options presented in a dropdown.
 * @see [source](https://www.bits-ui.com/docs/components/select#api-reference)
 */
export const slots = [
  "root",
  "content",
  "contentStatic",
  "item",
  "group",
  "groupHeading",
  "trigger",
  "viewport",
  "scrollUpButton",
  "scrollDownButton"
] as const;

/**
 * **Select**
 * @description Enables users to choose from a list of options presented in a dropdown.
 * @see [source](https://www.bits-ui.com/docs/components/select#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Select**
 * @description Enables users to choose from a list of options presented in a dropdown.
 * @see [source](https://www.bits-ui.com/docs/components/select#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {};
    content: {};
    contentStatic: {};
    item: {};
    group: {};
    groupHeading: {};
    trigger: {};
    viewport: {};
    scrollUpButton: {};
    scrollDownButton: {};
  }
>;
