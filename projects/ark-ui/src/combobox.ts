// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/combobox/combobox.anatomy.ts
import type { SVATraits } from "jade-garden";

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
    root: {};
    clearTrigger: {};
    content: {};
    control: {};
    input: {};
    item: {};
    itemGroup: {};
    itemGroupLabel: {};
    itemIndicator: {};
    itemText: {};
    label: {};
    list: {};
    positioner: {};
    trigger: {};
  }
>;
