// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/alert-dialog/exports.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Alert Dialog**
 * @description A modal window that alerts users with important information and awaits their acknowledgment or action.
 * @see [source](https://www.bits-ui.com/docs/components/alert-dialog#api-reference)
 */
export const slots = ["root", "title", "action", "cancel", "content", "overlay", "trigger", "description"] as const;

/**
 * **Alert Dialog**
 * @description A modal window that alerts users with important information and awaits their acknowledgment or action.
 * @see [source](https://www.bits-ui.com/docs/components/alert-dialog#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Alert Dialog**
 * @description A modal window that alerts users with important information and awaits their acknowledgment or action.
 * @see [source](https://www.bits-ui.com/docs/components/alert-dialog#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  { root: {}; title: {}; action: {}; cancel: {}; content: {}; overlay: {}; trigger: {}; description: {} }
>;
