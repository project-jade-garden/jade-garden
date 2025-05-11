// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/AlertDialog/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Alert Dialog**
 * @description A modal dialog that interrupts the user with important content and expects a response.
 * @see [source](https://reka-ui.com/docs/components/alert-dialog#anatomy)
 */
export const slots = [
  "root",
  "trigger",
  "portal",
  "content",
  "overlay",
  "cancel",
  "title",
  "description",
  "action"
] as const;

/**
 * **Alert Dialog**
 * @description A modal dialog that interrupts the user with important content and expects a response.
 * @see [source](https://reka-ui.com/docs/components/alert-dialog#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Alert Dialog**
 * @description A modal dialog that interrupts the user with important content and expects a response.
 * @see [source](https://reka-ui.com/docs/components/alert-dialog#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    trigger: {
      state: "open" | "closed";
    };
    content: {
      state: "open" | "closed";
    };
    overlay: {
      state: "open" | "closed";
    };
  }
>;
