// * https://github.com/radix-ui/primitives/blob/main/packages/react/alert-dialog/src/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Alert Dialog**
 * @description A modal dialog that interrupts the user with important content and expects a response.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/alert-dialog#anatomy)
 */
export const slots = ["action", "cancel", "content", "description", "overlay", "root", "title", "trigger"] as const;

/**
 * **Alert Dialog**
 * @description A modal dialog that interrupts the user with important content and expects a response.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/alert-dialog#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Alert Dialog**
 * @description A modal dialog that interrupts the user with important content and expects a response.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/alert-dialog#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    content: {
      state: "open" | "closed";
    };
    overlay: {
      state: "open" | "closed";
    };
    trigger: {
      state: "open" | "closed";
    };
  }
>;
