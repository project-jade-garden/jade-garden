// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/menu/menu.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Menu**
 * @description A list of options that appears when a user interacts with a button.
 * @see [source](https://ark-ui.com/docs/components/menu#anatomy)
 */
export const slots = [
  "arrow",
  "arrowTip",
  "content",
  "contextTrigger",
  "indicator",
  "item",
  "itemGroup",
  "itemGroupLabel",
  "itemIndicator",
  "itemText",
  "positioner",
  "separator",
  "trigger",
  "triggerItem"
] as const;

/**
 * **Menu**
 * @description A list of options that appears when a user interacts with a button.
 * @see [source](https://ark-ui.com/docs/components/menu#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Menu**
 * @description A list of options that appears when a user interacts with a button.
 * @see [source](https://ark-ui.com/docs/components/menu#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    content: {
      scope: "menu";
      part: "content";
      state: "open" | "closed";
      placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
    };
    indicator: {
      scope: "menu";
      part: "indicator";
      state: "open" | "closed";
    };
    item: {
      scope: "menu";
      part: "item";
      disabled: "";
      highlighted: "";
      value: "";
      valuetext: "";
    };
    itemIndicator: {
      scope: "menu";
      part: "item-indicator";
      disabled: "";
      highlighted: "";
      state: "checked" | "unchecked";
    };
    itemText: {
      scope: "menu";
      part: "item-text";
      disabled: "";
      highlighted: "";
      state: "checked" | "unchecked";
    };
    trigger: {
      scope: "menu";
      part: "trigger";
      placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
    };
  }
>;
