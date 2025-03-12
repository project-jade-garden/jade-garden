// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/tabs/tabs.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Tabs**
 * @description Flexible navigation tool with various modes and features.
 * @see [source](https://ark-ui.com/vue/docs/components/tabs#anatomy)
 */
export const slots = ["root", "content", "indicator", "trigger", "list"] as const;

/**
 * **Tabs**
 * @description Flexible navigation tool with various modes and features.
 * @see [source](https://ark-ui.com/vue/docs/components/tabs#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
