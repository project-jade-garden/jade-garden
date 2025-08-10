// * https://github.com/radix-ui/primitives/blob/main/packages/react/aspect-ratio/src/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Aspect Ratio**
 * @description Displays content within a desired ratio.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/aspect-ratio#anatomy)
 */
export const slots = ["root"] as const;

/**
 * **Aspect Ratio**
 * @description Displays content within a desired ratio.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/aspect-ratio#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Aspect Ratio**
 * @description Displays content within a desired ratio.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/aspect-ratio#api-reference)
 */
export type Traits = SVATraits<Slots, {}>;
