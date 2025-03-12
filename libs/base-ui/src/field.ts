// * https://github.com/mui/base-ui/blob/master/packages/react/src/field/index.parts.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Field**
 * @description Provides a flexible container for form inputs, labels, and helper text.
 * @see [source](https://base-ui.com/react/components/field#api-reference)
 */
export const slots = ["control", "description", "error", "label", "root", "validity"] as const;

/**
 * **Field**
 * @description Provides a flexible container for form inputs, labels, and helper text.
 * @see [source](https://base-ui.com/react/components/field#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Field**
 * @description Provides a flexible container for form inputs, labels, and helper text.
 * @see [source](https://base-ui.com/react/components/field#api-reference)
 */
export type TVSlots = Record<Slots, ClassValue>;
