// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/button/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Button**
 * @description Enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 * @see [source](https://kobalte.dev/docs/core/components/button#anatomy)
 */
export const slots = ["root"];

/**
 * **Button**
 * @description Enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 * @see [source](https://kobalte.dev/docs/core/components/button#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Button**
 * @description Enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 * @see [source](https://kobalte.dev/docs/core/components/button#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
