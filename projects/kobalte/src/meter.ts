// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/meter/index.tsx
import type { SVATraits } from "jade-garden";

/**
 * **Meter**
 * @description Displays numeric value that varies within a defined range
 * @see [source](https://kobalte.dev/docs/core/components/meter#anatomy)
 */
export const slots = ["fill", "label", "track", "valueLabel"] as const;

/**
 * **Meter**
 * @description Displays numeric value that varies within a defined range
 * @see [source](https://kobalte.dev/docs/core/components/meter#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Meter**
 * @description Displays numeric value that varies within a defined range
 * @see [source](https://kobalte.dev/docs/core/components/meter#api-reference)
 */
export type Traits = SVATraits<Slots, { fill: {}; label: {}; track: {}; valueLabel: {} }>;
