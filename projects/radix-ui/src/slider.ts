// * https://github.com/radix-ui/primitives/blob/main/packages/react/slider/src/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Slider**
 * @description An input where the user selects a value from within a given range.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/slider#anatomy)
 */
export const slots = ["range", "root", "thumb", "track"] as const;

/**
 * **Slider**
 * @description An input where the user selects a value from within a given range.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/slider#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Slider**
 * @description An input where the user selects a value from within a given range.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/slider#api-reference)
 */
export type Traits = SVATraits<Slots, { range: {}; root: {}; thumb: {}; track: {} }>;
