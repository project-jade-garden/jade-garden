// * https://github.com/mui/base-ui/blob/master/packages/react/src/popover/index.parts.ts
import type { SVATraits } from "jade-garden";

/**
 * **Popover**
 * @description An accessible popup anchored to a button.
 * @see [source](https://base-ui.com/react/components/popover#api-reference)
 */
export const slots = [
  "arrow",
  "backdrop",
  "close",
  "description",
  "popup",
  "positioner",
  "root",
  "title",
  "trigger"
] as const;

/**
 * **Popover**
 * @description An accessible popup anchored to a button.
 * @see [source](https://base-ui.com/react/components/popover#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Popover**
 * @description An accessible popup anchored to a button.
 * @see [source](https://base-ui.com/react/components/popover#api-reference)
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
    backdrop: {
      open: "";
      closed: "";
      "starting-style": "";
      "ending-style": "";
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
      pressed: "";
    };
  }
>;
