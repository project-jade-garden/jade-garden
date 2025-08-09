// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/combobox/combobox.anatomy.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Combobox**
 * @description A single input field that combines the functionality of a select and input.
 * @see [source](https://ark-ui.com/docs/components/combobox#anatomy)
 */
export const slots = [
  "root",
  "clearTrigger",
  "content",
  "control",
  "input",
  "item",
  "itemGroup",
  "itemGroupLabel",
  "itemIndicator",
  "itemText",
  "label",
  "list",
  "positioner",
  "trigger"
] as const;

/**
 * **Combobox**
 * @description A single input field that combines the functionality of a select and input.
 * @see [source](https://ark-ui.com/docs/components/combobox#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Combobox**
 * @description A single input field that combines the functionality of a select and input.
 * @see [source](https://ark-ui.com/docs/components/combobox#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      scope: "combobox";
      part: "root";
      invalid: "";
    };
    clearTrigger: {
      scope: "combobox";
      part: "clear-trigger";
      invalid: "";
    };
    content: {
      scope: "combobox";
      part: "content";
      state: "open" | "closed";
      placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
      empty: "";
    };
    control: {
      scope: "combobox";
      part: "control";
      state: "open" | "closed";
      focus: "";
      disabled: "";
      invalid: "";
    };
    input: {
      scope: "combobox";
      part: "input";
      invalid: "";
    };
    item: {
      scope: "combobox";
      part: "item";
      highlighted: "";
      state: "checked" | "unchecked";
      disabled: "";
      value: "";
    };
    itemGroup: {
      scope: "combobox";
      part: "item-group";
      empty: "";
    };
    itemIndicator: {
      scope: "combobox";
      part: "item-indicator";
      state: "checked" | "unchecked";
    };
    itemText: {
      scope: "combobox";
      part: "item-text";
      state: "checked" | "unchecked";
      disabled: "";
      highlighted: "";
    };
    label: {
      scope: "combobox";
      part: "label";
      readonly: "";
      disabled: "";
      invalid: "";
      focus: "";
    };
    list: {
      scope: "combobox";
      part: "list";
      empty: "";
    };
    trigger: {
      scope: "combobox";
      part: "trigger";
      state: "open" | "closed";
      invalid: "";
      focusable: "";
      readonly: "";
      disabled: "";
    };
  }
>;
