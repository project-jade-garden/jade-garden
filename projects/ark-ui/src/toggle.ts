// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/toggle/toggle.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Toggle**
 * @description A two-state button that can be toggled on or off.
 * @see [source](https://ark-ui.com/docs/components/toggle#anatomy)
 */
export const slots = ["root", "indicator"] as const;

/**
 * **Toggle**
 * @description A two-state button that can be toggled on or off.
 * @see [source](https://ark-ui.com/docs/components/toggle#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Toggle**
 * @description A two-state button that can be toggled on or off.
 * @see [source](https://ark-ui.com/docs/components/toggle#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {}; indicator: {} }>;
