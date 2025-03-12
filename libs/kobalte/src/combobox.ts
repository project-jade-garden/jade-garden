// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/combobox/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Combobox**
 * @description Combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 * @see [source](https://kobalte.dev/docs/core/components/combobox#anatomy)
 */
export const slots = [
  "root",
  "arrow",
  "content",
  "control",
  "description",
  "errorMessage",
  "hiddenSelect",
  "icon",
  "input",
  "item",
  "itemDescription",
  "itemIndicator",
  "itemLabel",
  "label",
  "listbox",
  "section",
  "trigger"
] as const;

/**
 * **Combobox**
 * @description Combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 * @see [source](https://kobalte.dev/docs/core/components/combobox#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Combobox**
 * @description Combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 * @see [source](https://kobalte.dev/docs/core/components/combobox#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
