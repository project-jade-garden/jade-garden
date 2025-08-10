// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/button/index.tsx
import type { SVATraits } from "jade-garden";

/**
 * **Button**
 * @description Enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 * @see [source](https://kobalte.dev/docs/core/components/button#anatomy)
 */
export const slots = ["root"] as const;

/**
 * **Button**
 * @description Enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 * @see [source](https://kobalte.dev/docs/core/components/button#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Button**
 * @description Enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 * @see [source](https://kobalte.dev/docs/core/components/button#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {} }>;
