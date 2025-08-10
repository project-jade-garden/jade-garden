// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/alert-dialog/index.tsx
import type { SVATraits } from "jade-garden";

/**
 * **Alert Dialog**
 * @description A modal dialog that interrupts the user's workflow to communicate an important message and acquire a response.
 * @see [source](https://kobalte.dev/docs/core/components/alert-dialog#anatomy)
 */
export const slots = ["closeButton", "content", "description", "overlay", "title", "trigger"] as const;

/**
 * **Alert Dialog**
 * @description A modal dialog that interrupts the user's workflow to communicate an important message and acquire a response.
 * @see [source](https://kobalte.dev/docs/core/components/alert-dialog#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Alert Dialog**
 * @description A modal dialog that interrupts the user's workflow to communicate an important message and acquire a response.
 * @see [source](https://kobalte.dev/docs/core/components/alert-dialog#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  { closeButton: {}; content: {}; description: {}; overlay: {}; title: {}; trigger: {} }
>;
