// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/popover/popover.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Popover**
 * @description An overlay that displays additional information or options when triggered.
 * @see [source](https://ark-ui.com/vue/docs/components/popover#anatomy)
 */
export const slots = [
  "content",
  "trigger",
  "positioner",
  "title",
  "description",
  "closeTrigger",
  "indicator",
  "arrow",
  "arrowTip",
  "anchor"
] as const;

/**
 * **Popover**
 * @description An overlay that displays additional information or options when triggered.
 * @see [source](https://ark-ui.com/vue/docs/components/popover#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
