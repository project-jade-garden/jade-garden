// * https://github.com/mui/base-ui/blob/master/packages/react/src/preview-card/index.parts.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Preview Card**
 * @description A popup that appears when a link is hovered, showing a preview for sighted users.
 * @see [source](https://base-ui.com/react/components/preview-card#api-reference)
 */
export const slots = ["arrow", "backdrop", "popup", "positioner", "root", "trigger"] as const;

/**
 * **Preview Card**
 * @description A popup that appears when a link is hovered, showing a preview for sighted users.
 * @see [source](https://base-ui.com/react/components/preview-card#api-reference)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
