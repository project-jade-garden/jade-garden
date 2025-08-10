// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/dialog/dialog.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Dialog**
 * @description A modal window that appears on top of the main content.
 * @see [source](https://ark-ui.com/docs/components/dialog#anatomy)
 */
export const slots = ["trigger", "backdrop", "positioner", "content", "title", "description", "closeTrigger"] as const;

/**
 * **Dialog**
 * @description A modal window that appears on top of the main content.
 * @see [source](https://ark-ui.com/docs/components/dialog#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Dialog**
 * @description A modal window that appears on top of the main content.
 * @see [source](https://ark-ui.com/docs/components/dialog#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    trigger: {
      scope: "dialog";
      part: "trigger";
      state: "open" | "closed";
    };
    backdrop: {
      scope: "dialog";
      part: "backdrop";
      state: "open" | "closed";
    };
    content: {
      scope: "dialog";
      part: "content";
      state: "open" | "closed";
    };
  }
>;
