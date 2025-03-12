// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Accordion/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Accordion**
 * @description A vertically stacked set of interactive headings that each reveal an associated section of content.
 * @see [source](https://reka-ui.com/docs/components/accordion#anatomy)
 */
export const slots = ["content", "header", "item", "root", "trigger"] as const;

/**
 * **Accordion**
 * @description A vertically stacked set of interactive headings that each reveal an associated section of content.
 * @see [source](https://reka-ui.com/docs/components/accordion#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
