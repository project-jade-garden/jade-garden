// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/TagsInput/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Tags Input**
 * @description Tag inputs render tags inside an input, followed by an actual text input.
 * @see [source](https://reka-ui.com/docs/components/tags-input#anatomy)
 */
export const slots = ["root", "input", "item", "itemText", "itemDelete", "clear"] as const;

/**
 * **Tags Input**
 * @description Tag inputs render tags inside an input, followed by an actual text input.
 * @see [source](https://reka-ui.com/docs/components/tags-input#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tags Input**
 * @description Tag inputs render tags inside an input, followed by an actual text input.
 * @see [source](https://reka-ui.com/docs/components/tags-input#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
