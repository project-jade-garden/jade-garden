// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/select/index.tsx
import type { ClassValue } from "tailwind-variants";

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

export type TVSlots = Record<Slots, ClassValue>;
