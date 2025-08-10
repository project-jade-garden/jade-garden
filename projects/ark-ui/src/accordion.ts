// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/accordion/accordion.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Accordion**
 * @description A collapsible component for displaying content in a vertical stack.
 * @see [source](https://ark-ui.com/docs/components/accordion#anatomy)
 */
export const slots = ["root", "item", "itemTrigger", "itemContent", "itemIndicator"] as const;

/**
 * **Accordion**
 * @description A collapsible component for displaying content in a vertical stack.
 * @see [source](https://ark-ui.com/docs/components/accordion#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Accordion**
 * @description A collapsible component for displaying content in a vertical stack.
 * @see [source](https://ark-ui.com/docs/components/accordion#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      scope: "accordion";
      part: "root";
      orientation: "horizontal" | "vertical";
    };
    item: {
      scope: "accordion";
      part: "item";
      state: "open" | "closed";
      focus: "";
      disabled: "";
      orientation: "horizontal" | "vertical";
    };
    itemTrigger: {
      scope: "accordion";
      part: "item-trigger";
      orientation: "horizontal" | "vertical";
      state: "open" | "closed";
    };
    itemContent: {
      scope: "accordion";
      part: "item-content";
      state: "open" | "closed";
      disabled: "";
      focus: "";
      orientation: "horizontal" | "vertical";
    };
    itemIndicator: {
      scope: "accordion";
      part: "item-indicator";
      state: "open" | "closed";
      disabled: "";
      focus: "";
      orientation: "horizontal" | "vertical";
    };
  }
>;
