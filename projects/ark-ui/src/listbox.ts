// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/listbox/listbox.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Listbox**
 * @description A component for selecting a single or multiple items from a list.
 * @see [source](https://ark-ui.com/docs/components/listbox#anatomy)
 */
export const slots = [
  "label",
  "input",
  "item",
  "itemText",
  "itemIndicator",
  "itemGroup",
  "itemGroupLabel",
  "content",
  "root",
  "valueText"
] as const;

/**
 * **Listbox**
 * @description A component for selecting a single or multiple items from a list.
 * @see [source](https://ark-ui.com/docs/components/listbox#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Listbox**
 * @description A component for selecting a single or multiple items from a list.
 * @see [source](https://ark-ui.com/docs/components/listbox#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    label: {
      scope: "listbox";
      part: "label";
      disabled: "";
    };
    input: {
      scope: "listbox";
      part: "input";
      disabled: "";
    };
    item: {
      scope: "listbox";
      part: "item";
      value: "";
      selected: "";
      layout: "";
      state: "checked" | "unchecked";
      orientation: "horizontal" | "vertical";
      highlighted: "";
      disabled: "";
    };
    itemText: {
      scope: "listbox";
      part: "item-text";
      state: "checked" | "unchecked";
      disabled: "";
      highlighted: "";
    };
    itemIndicator: {
      scope: "listbox";
      part: "item-indicator";
      state: "checked" | "unchecked";
    };
    itemGroup: {
      scope: "listbox";
      part: "item-group";
      disabled: "";
      orientation: "horizontal" | "vertical";
      empty: "";
    };
    content: {
      scope: "listbox";
      part: "content";
      activedescendant: "";
      orientation: "horizontal" | "vertical";
      layout: "";
      empty: "";
    };
    root: {
      scope: "listbox";
      part: "root";
      orientation: "horizontal" | "vertical";
      disabled: "";
    };
    valueText: {
      scope: "listbox";
      part: "value-text";
      disabled: "";
    };
  }
>;
