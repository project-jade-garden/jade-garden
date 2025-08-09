// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/dialog/exports.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Dialog**
 * @description A modal window presenting content or seeking user input without navigating away from the current context.
 * @see [source](https://www.bits-ui.com/docs/components/dialog#api-reference)
 */
export const slots = ["root", "title", "close", "content", "overlay", "trigger", "description"] as const;

/**
 * **Dialog**
 * @description A modal window presenting content or seeking user input without navigating away from the current context.
 * @see [source](https://www.bits-ui.com/docs/components/dialog#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Dialog**
 * @description A modal window presenting content or seeking user input without navigating away from the current context.
 * @see [source](https://www.bits-ui.com/docs/components/dialog#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  { root: {}; title: {}; close: {}; content: {}; overlay: {}; trigger: {}; description: {} }
>;
