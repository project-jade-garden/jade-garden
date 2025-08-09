// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/link/index.tsx
import type { SVATraits } from "jade-garden/types";

/**
 * **Link**
 * @description Allows a user to navigate to another page or resource within a web page or application.
 * @see [source](https://kobalte.dev/docs/core/components/link#anatomy)
 */
export const slots = ["root"] as const;

/**
 * **Link**
 * @description Allows a user to navigate to another page or resource within a web page or application.
 * @see [source](https://kobalte.dev/docs/core/components/link#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Link**
 * @description Allows a user to navigate to another page or resource within a web page or application.
 * @see [source](https://kobalte.dev/docs/core/components/link#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {} }>;
