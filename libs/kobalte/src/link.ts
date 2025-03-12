// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/link/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Link**
 * @description Allows a user to navigate to another page or resource within a web page or application.
 * @see [source](https://kobalte.dev/docs/core/components/link#anatomy)
 */
export const slots = ["root"];

/**
 * **Link**
 * @description Allows a user to navigate to another page or resource within a web page or application.
 * @see [source](https://kobalte.dev/docs/core/components/link#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
