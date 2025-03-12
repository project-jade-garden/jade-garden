// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/collapsible/collapsible.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Collapsible**
 * @description An interactive component that can be expanded or collapsed.
 * @see [source](https://ark-ui.com/vue/docs/components/collapsible#anatomy)
 */
export const slots = ["trigger", "root", "content"] as const;

/**
 * **Collapsible**
 * @description An interactive component that can be expanded or collapsed.
 * @see [source](https://ark-ui.com/vue/docs/components/collapsible#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
