// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/meter/index.tsx

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
