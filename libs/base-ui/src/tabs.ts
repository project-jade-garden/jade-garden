// * https://github.com/mui/base-ui/blob/master/packages/react/src/tabs/index.parts.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Tabs**
 * @description A component for toggling between related panels on the same page.
 * @see [source](https://base-ui.com/react/components/tabs#api-reference)
 */
export const slots = ["indicator", "list", "panel", "root", "tab"] as const;

/**
 * **Tabs**
 * @description A component for toggling between related panels on the same page.
 * @see [source](https://base-ui.com/react/components/tabs#api-reference)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
