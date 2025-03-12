// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/alert-dialog/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Alert Dialog**
 * @description A modal dialog that interrupts the user's workflow to communicate an important message and acquire a response.
 * @see [source](https://kobalte.dev/docs/core/components/alert-dialog#anatomy)
 */
export const slots = ["closeButton", "content", "description", "overlay", "title", "trigger"] as const;

/**
 * **Alert Dialog**
 * @description A modal dialog that interrupts the user's workflow to communicate an important message and acquire a response.
 * @see [source](https://kobalte.dev/docs/core/components/alert-dialog#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
