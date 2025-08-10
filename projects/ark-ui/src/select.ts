// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/select/select.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Select**
 * @description Displays a list of options for the user to pick from.
 * @see [source](https://ark-ui.com/docs/components/select#anatomy)
 */
export const slots = [
  "label",
  "positioner",
  "trigger",
  "indicator",
  "clearTrigger",
  "item",
  "itemText",
  "itemIndicator",
  "itemGroup",
  "itemGroupLabel",
  "list",
  "content",
  "root",
  "control",
  "valueText"
] as const;

/**
 * **Select**
 * @description Displays a list of options for the user to pick from.
 * @see [source](https://ark-ui.com/docs/components/select#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Select**
 * @description Displays a list of options for the user to pick from.
 * @see [source](https://ark-ui.com/docs/components/select#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    label: {
      scope: "select";
      part: "label";
      disabled: "";
      invalid: "";
      readonly: "";
    };
    trigger: {
      scope: "select";
      part: "trigger";
      state: "open" | "closed";
      disabled: "";
      invalid: "";
      readonly: "";
      placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
      placeholder: "";
    };
    indicator: {
      scope: "select";
      part: "indicator";
      state: "open" | "closed";
      disabled: "";
      invalid: "";
      readonly: "";
    };
    clearTrigger: {
      scope: "select";
      part: "clear-trigger";
      invalid: "";
    };
    item: {
      scope: "select";
      part: "item";
      value: "";
      state: "checked" | "unchecked";
      highlighted: "";
      disabled: "";
    };
    itemText: {
      scope: "select";
      part: "item-text";
      state: "checked" | "unchecked";
      disabled: "";
      highlighted: "";
    };
    itemIndicator: {
      scope: "select";
      part: "item-indicator";
      state: "checked" | "unchecked";
    };
    itemGroup: {
      scope: "select";
      part: "item-group";
      disabled: "";
    };
    content: {
      scope: "select";
      part: "content";
      state: "open" | "closed";
      placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
      activedescendant: "";
    };
    root: {
      scope: "select";
      part: "root";
      invalid: "";
    };
    control: {
      scope: "select";
      part: "control";
      state: "open" | "closed";
      focus: "";
      disabled: "";
      invalid: "";
    };
    valueText: {
      scope: "select";
      part: "value-text";
      disabled: "";
      invalid: "";
      focus: "";
    };
  }
>;
