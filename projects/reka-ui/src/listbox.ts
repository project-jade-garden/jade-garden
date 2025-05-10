// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Listbox/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Listbox**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://reka-ui.com/docs/components/listbox#anatomy)
 */
export const slots = [
  "root",
  "content",
  "filter",
  "item",
  "itemIndicator",
  "virtualizer",
  "group",
  "groupLabel"
] as const;

/**
 * **Listbox**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://reka-ui.com/docs/components/listbox#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Listbox**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://reka-ui.com/docs/components/listbox#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  { root: {}; content: {}; filter: {}; item: {}; itemIndicator: {}; virtualizer: {}; group: {}; groupLabel: {} }
>;
