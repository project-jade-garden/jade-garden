// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Label/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Label**
 * @description Renders an accessible label associated with controls.
 * @see [source](https://reka-ui.com/docs/components/label#anatomy)
 */
export const slots = ["root"] as const;

/**
 * **Label**
 * @description Renders an accessible label associated with controls.
 * @see [source](https://reka-ui.com/docs/components/label#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Label**
 * @description Renders an accessible label associated with controls.
 * @see [source](https://reka-ui.com/docs/components/label#api-reference)
 */
export type Traits = SVATraits<Slots, {}>;
