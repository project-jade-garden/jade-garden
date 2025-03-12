// * https://github.com/mui/base-ui/blob/master/packages/react/src/separator/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Separator**
 * @description A separator element accessible to screen readers.
 * @see [source](https://base-ui.com/react/components/separator#api-reference)
 */
export const slots = ["root"];

/**
 * **Separator**
 * @description A separator element accessible to screen readers.
 * @see [source](https://base-ui.com/react/components/separator#api-reference)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
