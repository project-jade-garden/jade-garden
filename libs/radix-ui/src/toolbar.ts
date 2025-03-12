// * https://github.com/radix-ui/primitives/blob/main/packages/react/toolbar/src/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Toolbar**
 * @description A container for grouping a set of controls, such as buttons, toggle groups or dropdown menus.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/toolbar#anatomy)
 */
export const slots = ["button", "link", "root", "separator", "toggleGroup", "toggleItem"] as const;

/**
 * **Toolbar**
 * @description A container for grouping a set of controls, such as buttons, toggle groups or dropdown menus.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/toolbar#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
