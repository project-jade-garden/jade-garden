// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/segment-group/segment-group.anatomy.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Segment Group**
 * @description Organizes and navigates between sections in a view.
 * @see [source](https://ark-ui.com/docs/components/segment-group#anatomy)
 */
export const slots = ["root", "label", "item", "itemText", "itemControl", "indicator"] as const;

/**
 * **Segment Group**
 * @description Organizes and navigates between sections in a view.
 * @see [source](https://ark-ui.com/docs/components/segment-group#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Segment Group**
 * @description Organizes and navigates between sections in a view.
 * @see [source](https://ark-ui.com/docs/components/segment-group#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      scope: "segment-group";
      part: "root";
      orientation: "horizontal" | "vertical";
      disabled: "";
    };
    label: {
      scope: "segment-group";
      part: "label";
      orientation: "horizontal" | "vertical";
      disabled: "";
    };
    itemControl: {
      scope: "segment-group";
      part: "item-control";
      active: "";
    };
    indicator: {
      scope: "segment-group";
      part: "indicator";
      disabled: "";
      orientation: "horizontal" | "vertical";
    };
  }
>;
