// * https://github.com/mui/base-ui/blob/master/packages/react/src/tabs/index.parts.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Tabs**
 * @description A component for toggling between related panels on the same page.
 * @see [source](https://base-ui.com/react/components/tabs#api-reference)
 */
export const slots = ["indicator", "list", "panel", "root", "tab"] as const;

/**
 * **Tabs**
 * @description A component for toggling between related panels on the same page.
 * @see [source](https://base-ui.com/react/components/tabs#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tabs**
 * @description A component for toggling between related panels on the same page.
 * @see [source](https://base-ui.com/react/components/tabs#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    indicator: {
      orientation: "horizontal" | "vertical";
      "activation-direction": "left" | "right" | "up" | "down" | "none";
    };
    list: {
      orientation: "horizontal" | "vertical";
      "activation-direction": "left" | "right" | "up" | "down" | "none";
    };
    panel: {
      orientation: "horizontal" | "vertical";
      "activation-direction": "left" | "right" | "up" | "down" | "none";
      hidden: "";
      index: "number";
    };
    root: {
      orientation: "horizontal" | "vertical";
      "activation-direction": "left" | "right" | "up" | "down" | "none";
    };
    tab: {
      selected: "";
      highlighted: "";
      orientation: "horizontal" | "vertical";
      disabled: "";
      "activation-direction": "left" | "right" | "up" | "down" | "none";
    };
  }
>;
