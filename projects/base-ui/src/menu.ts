// * https://github.com/mui/base-ui/blob/master/packages/react/src/menu/index.parts.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Menu**
 * @description A list of actions in a dropdown, enhanced with keyboard navigation.
 * @see [source](https://base-ui.com/react/components/menu#api-reference)
 */
export const slots = [
  "arrow",
  "backdrop",
  "checkboxItem",
  "checkboxItemIndicator",
  "group",
  "groupLabel",
  "item",
  "popup",
  "positioner",
  "radioGroup",
  "radioItem",
  "radioItemIndicator",
  "root",
  "separator",
  "submenuTrigger",
  "trigger"
] as const;

/**
 * **Menu**
 * @description A list of actions in a dropdown, enhanced with keyboard navigation.
 * @see [source](https://base-ui.com/react/components/menu#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Menu**
 * @description A list of actions in a dropdown, enhanced with keyboard navigation.
 * @see [source](https://base-ui.com/react/components/menu#api-reference)
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
    checkboxItem: {
      checked: "";
      unchecked: "";
      highlighted: "";
      disabled: "";
    };
    checkboxItemIndicator: {
      checked: "";
      unchecked: "";
      disabled: "";
      "starting-style": "";
      "ending-style": "";
    };
    item: {
      highlighted: "";
      disabled: "";
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
    radioItem: {
      checked: "";
      unchecked: "";
      highlighted: "";
      disabled: "";
    };
    radioItemIndicator: {
      checked: "";
      unchecked: "";
      disabled: "";
      "starting-style": "";
      "ending-style": "";
    };
    submenuTrigger: {
      "popup-open": "";
    };
    trigger: {
      "popup-open": "";
      pressed: "";
    };
  }
>;
