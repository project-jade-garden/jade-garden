// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Tabs/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Tabs**
 * @description A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * @see [source](https://reka-ui.com/docs/components/tabs#anatomy)
 */
export const slots = ["root", "list", "content", "trigger", "indicator"] as const;

/**
 * **Tabs**
 * @description A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * @see [source](https://reka-ui.com/docs/components/tabs#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tabs**
 * @description A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * @see [source](https://reka-ui.com/docs/components/tabs#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
