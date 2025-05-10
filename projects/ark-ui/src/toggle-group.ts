// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/toggle-group/toggle-group.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on or off.
 * @see [source](https://ark-ui.com/docs/components/toggle-group#anatomy)
 */
export const slots = ["root", "item"] as const;

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on or off.
 * @see [source](https://ark-ui.com/docs/components/toggle-group#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on or off.
 * @see [source](https://ark-ui.com/docs/components/toggle-group#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {}; item: {} }>;
