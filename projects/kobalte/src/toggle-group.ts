// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/toggle-group/index.tsx
import type { SVATraits } from "jade-garden";

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on (pressed) or off (not pressed).
 * @see [source](https://kobalte.dev/docs/core/components/toggle-group#anatomy)
 */
export const slots = ["item"] as const;

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on (pressed) or off (not pressed).
 * @see [source](https://kobalte.dev/docs/core/components/toggle-group#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on (pressed) or off (not pressed).
 * @see [source](https://kobalte.dev/docs/core/components/toggle-group#api-reference)
 */
export type Traits = SVATraits<Slots, { item: {} }>;
