// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/tooltip/tooltip.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Tooltip**
 * @description A label that provides information on hover or focus.
 * @see [source](https://ark-ui.com/docs/components/tooltip#anatomy)
 */
export const slots = ["trigger", "arrow", "arrowTip", "positioner", "content"] as const;

/**
 * **Tooltip**
 * @description A label that provides information on hover or focus.
 * @see [source](https://ark-ui.com/docs/components/tooltip#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tooltip**
 * @description A label that provides information on hover or focus.
 * @see [source](https://ark-ui.com/docs/components/tooltip#api-reference)
 */
export type Traits = SVATraits<Slots, { trigger: {}; arrow: {}; arrowTip: {}; positioner: {}; content: {} }>;
