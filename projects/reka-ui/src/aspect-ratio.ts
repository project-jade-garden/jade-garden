// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/AspectRatio/index.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Aspect Ratio**
 * @description Displays content within a desired ratio.
 * @see [source](https://reka-ui.com/docs/components/aspect-ratio#anatomy)
 */
export const slots = ["root"] as const;

/**
 * **Aspect Ratio**
 * @description Displays content within a desired ratio.
 * @see [source](https://reka-ui.com/docs/components/aspect-ratio#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Aspect Ratio**
 * @description Displays content within a desired ratio.
 * @see [source](https://reka-ui.com/docs/components/aspect-ratio#api-reference)
 */
export type Traits = SVATraits<Slots, {}>;
