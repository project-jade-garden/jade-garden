// * https://github.com/radix-ui/primitives/blob/main/packages/react/accordion/src/index.ts

/**
 * **Accordion**
 * @description A vertically stacked set of interactive headings that each reveal an associated section of content.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/accordion#anatomy)
 */
export const slots = ["content", "header", "item", "root", "trigger"] as const;

/**
 * **Accordion**
 * @description A vertically stacked set of interactive headings that each reveal an associated section of content.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/accordion#anatomy)
 */
export type Slots = (typeof slots)[number];
