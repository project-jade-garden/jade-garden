// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/select/index.tsx
import type { SVATraits } from "jade-garden/types";

/**
 * **Select**
 * @description Displays a list of options for the user to pick from — triggered by a button.
 * @see [source](https://kobalte.dev/docs/core/components/select#anatomy)
 */
export const slots = [
  "root",
  "arrow",
  "content",
  "description",
  "errorMessage",
  "hiddenSelect",
  "icon",
  "item",
  "itemDescription",
  "itemIndicator",
  "itemLabel",
  "label",
  "listbox",
  "section",
  "trigger",
  "value"
] as const;

/**
 * **Select**
 * @description Displays a list of options for the user to pick from — triggered by a button.
 * @see [source](https://kobalte.dev/docs/core/components/select#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Select**
 * @description Displays a list of options for the user to pick from — triggered by a button.
 * @see [source](https://kobalte.dev/docs/core/components/select#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {};
    arrow: {};
    content: {};
    description: {};
    errorMessage: {};
    hiddenSelect: {};
    icon: {};
    item: {};
    itemDescription: {};
    itemIndicator: {};
    itemLabel: {};
    label: {};
    listbox: {};
    section: {};
    trigger: {};
    value: {};
  }
>;
