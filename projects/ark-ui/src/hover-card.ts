// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/hover-card/hover-card.anatomy.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Hover Card**
 * @description A card that appears when a user hovers over an element.
 * @see [source](https://ark-ui.com/docs/components/hover-card#anatomy)
 */
export const slots = ["arrow", "arrowTip", "trigger", "positioner", "content"] as const;

/**
 * **Hover Card**
 * @description A card that appears when a user hovers over an element.
 * @see [source](https://ark-ui.com/docs/components/hover-card#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Hover Card**
 * @description A card that appears when a user hovers over an element.
 * @see [source](https://ark-ui.com/docs/components/hover-card#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    trigger: {
      scope: "hover-card";
      part: "trigger";
      placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
      state: "open" | "closed";
    };
    content: {
      scope: "hover-card";
      part: "content";
      state: "open" | "closed";
      placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
    };
  }
>;
