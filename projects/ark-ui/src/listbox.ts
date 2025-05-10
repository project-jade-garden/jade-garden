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
    label: {};
    input: {};
    item: {};
    itemText: {};
    itemIndicator: {};
    itemGroup: {};
    itemGroupLabel: {};
    content: {};
    root: {};
    valueText: {};
  }
>;
