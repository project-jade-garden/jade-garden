// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/toast/toast.anatomy.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Toast**
 * @description A message that appears on the screen to provide feedback on an action.
 * @see [source](https://ark-ui.com/docs/components/toast#anatomy)
 */
export const slots = ["group", "root", "title", "description", "actionTrigger", "closeTrigger"] as const;

/**
 * **Toast**
 * @description A message that appears on the screen to provide feedback on an action.
 * @see [source](https://ark-ui.com/docs/components/toast#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Toast**
 * @description A message that appears on the screen to provide feedback on an action.
 * @see [source](https://ark-ui.com/docs/components/toast#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      scope: "toast";
      part: "root";
      state: "open" | "closed";
      type: "success" | "error" | "loading" | "info";
      placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
      align: "";
      side: "";
      mounted: "";
      paused: "";
      first: "";
      sibling: "";
      stack: "";
      overlap: "";
    };
  }
>;
