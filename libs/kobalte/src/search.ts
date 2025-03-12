// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/search/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Search**
 * @description Search a searchbox text input with a menu. Handle the case where dataset filtering needs to occur outside the combobox component.
 * @see [source](https://kobalte.dev/docs/core/components/search#anatomy)
 */
export const slots = [
  "root",
  "arrow",
  "content",
  "control",
  "description",
  "hiddenSelect",
  "icon",
  "input",
  "item",
  "itemDescription",
  "itemLabel",
  "label",
  "listbox",
  "section",
  "noResult",
  "indicator"
] as const;

/**
 * **Search**
 * @description Search a searchbox text input with a menu. Handle the case where dataset filtering needs to occur outside the combobox component.
 * @see [source](https://kobalte.dev/docs/core/components/search#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
