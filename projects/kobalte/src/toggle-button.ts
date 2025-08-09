// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/toggle-button/index.tsx
import type { SVATraits } from "jade-garden/types";

/**
 * **Toggle Button**
 * @description A two-state button that can be either on (pressed) or off (not pressed).
 * @see [source](https://kobalte.dev/docs/core/components/toggle-button#anatomy)
 */
export const slots = ["root"] as const;

/**
 * **Toggle Button**
 * @description A two-state button that can be either on (pressed) or off (not pressed).
 * @see [source](https://kobalte.dev/docs/core/components/toggle-button#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Toggle Button**
 * @description A two-state button that can be either on (pressed) or off (not pressed).
 * @see [source](https://kobalte.dev/docs/core/components/toggle-button#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {} }>;
