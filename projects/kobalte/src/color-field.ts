// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/color-field/index.tsx
import type { SVATraits } from "jade-garden";

/**
 * **Color Field**
 * @description Allows users to enter and adjust a hex color value.
 * @see [source](https://kobalte.dev/docs/core/components/color-field#anatomy)
 */
export const slots = ["description", "errorMessage", "input", "label"] as const;

/**
 * **Color Field**
 * @description Allows users to enter and adjust a hex color value.
 * @see [source](https://kobalte.dev/docs/core/components/color-field#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Color Field**
 * @description Allows users to enter and adjust a hex color value.
 * @see [source](https://kobalte.dev/docs/core/components/color-field#api-reference)
 */
export type Traits = SVATraits<Slots, { description: {}; errorMessage: {}; input: {}; label: {} }>;
