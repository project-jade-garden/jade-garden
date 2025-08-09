// * https://github.com/mui/base-ui/blob/master/packages/react/src/tooltip/index.parts.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Tooltip**
 * @description A popup that appears when an element is hovered or focused, showing a hint for sighted users.
 * @see [source](https://base-ui.com/react/components/tooltip#api-reference)
 */
export const slots = ["arrow", "popup", "positioner", "provider", "root", "trigger"] as const;

/**
 * **Tooltip**
 * @description A popup that appears when an element is hovered or focused, showing a hint for sighted users.
 * @see [source](https://base-ui.com/react/components/tooltip#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tooltip**
 * @description A popup that appears when an element is hovered or focused, showing a hint for sighted users.
 * @see [source](https://base-ui.com/react/components/tooltip#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    arrow: {
      open: "";
      closed: "";
      uncentered: "";
      "anchor-hidden": "";
      side: "top" | "bottom" | "left" | "right" | "inline-end" | "inline-start" | "none";
    };
    popup: {
      open: "";
      closed: "";
      instant: "";
      side: "top" | "bottom" | "left" | "right" | "inline-end" | "inline-start" | "none";
      "starting-style": "";
      "ending-style": "";
    };
    positioner: {
      open: "";
      closed: "";
      "anchor-hidden": "";
      side: "top" | "bottom" | "left" | "right" | "inline-end" | "inline-start" | "none";
    };
    trigger: {
      "popup-open": "";
    };
  }
>;
