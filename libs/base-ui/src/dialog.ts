// * https://github.com/mui/base-ui/blob/master/packages/react/src/dialog/index.parts.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Dialog**
 * @descriptionA popup that opens on top of the entire page.
 * @see [source](https://base-ui.com/react/components/dialog#api-reference)
 */
export const slots = ["backdrop", "close", "description", "popup", "root", "title", "trigger"] as const;

/**
 * **Dialog**
 * @descriptionA popup that opens on top of the entire page.
 * @see [source](https://base-ui.com/react/components/dialog#api-reference)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
