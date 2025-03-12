// * https://github.com/mui/base-ui/blob/master/packages/react/src/popover/index.parts.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Popover**
 * @description An accessible popup anchored to a button.
 * @see [source](https://base-ui.com/react/components/popover#api-reference)
 */
export const slots = [
  "arrow",
  "backdrop",
  "close",
  "description",
  "popup",
  "positioner",
  "root",
  "title",
  "trigger"
] as const;

/**
 * **Popover**
 * @description An accessible popup anchored to a button.
 * @see [source](https://base-ui.com/react/components/popover#api-reference)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
