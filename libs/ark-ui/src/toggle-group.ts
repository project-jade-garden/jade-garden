// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/toggle-group/toggle-group.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on or off.
 * @see [source](https://ark-ui.com/vue/docs/components/toggle-group#anatomy)
 */
export const slots = ["root", "item"] as const;

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on or off.
 * @see [source](https://ark-ui.com/vue/docs/components/toggle-group#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
