// * https://github.com/radix-ui/primitives/blob/main/packages/react/label/src/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Label**
 * @description Renders an accessible label associated with controls.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/label#anatomy)
 */
export const slots = ["root"] as const;

/**
 * **Label**
 * @description Renders an accessible label associated with controls.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/label#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Label**
 * @description Renders an accessible label associated with controls.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/label#api-reference)
 */
export type Traits = SVATraits<Slots, {}>;
