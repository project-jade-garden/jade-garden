// * https://github.com/mui/base-ui/blob/master/packages/react/src/select/index.parts.ts
import type { SVATraits } from "jade-garden";

/**
 * **Select**
 * @description A common form component for choosing a predefined value in a dropdown menu.
 * @see [source](https://base-ui.com/react/components/select#api-reference)
 */
export const slots = [
  "arrow",
  "backdrop",
  "group",
  "groupLabel",
  "icon",
  "item",
  "itemIndicator",
  "itemText",
  "popup",
  "positioner",
  "root",
  "scrollDownArrow",
  "scrollUpArrow",
  "separator",
  "trigger",
  "value"
] as const;

/**
 * **Select**
 * @description A common form component for choosing a predefined value in a dropdown menu.
 * @see [source](https://base-ui.com/react/components/select#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Select**
 * @description A common form component for choosing a predefined value in a dropdown menu.
 * @see [source](https://base-ui.com/react/components/select#api-reference)
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
    item: {
      selected: "";
      highlighted: "";
      disabled: "";
    };
    popup: {
      open: "";
      closed: "";
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
    scrollDownArrow: {
      direction: "down";
      side: "top" | "bottom" | "left" | "right" | "inline-end" | "inline-start" | "none";
      visible: "";
    };
    scrollUpArrow: {
      direction: "up";
      side: "top" | "bottom" | "left" | "right" | "inline-end" | "inline-start" | "none";
      visible: "";
    };
    trigger: {
      "popup-open": "";
      pressed: "";
      disabled: "";
      readonly: "";
      required: "";
      valid: "";
      invalid: "";
      dirty: "";
      touched: "";
      filled: "";
      focused: "";
    };
  }
>;
