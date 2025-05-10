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
    label: {};
    positioner: {};
    trigger: {};
    indicator: {};
    clearTrigger: {};
    item: {};
    itemText: {};
    itemIndicator: {};
    itemGroup: {};
    itemGroupLabel: {};
    list: {};
    content: {};
    root: {};
    control: {};
    valueText: {};
  }
>;
