// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/steps/steps.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Steps**
 * @description Used to guide users through a series of steps in a process.
 * @see [source](https://ark-ui.com/vue/docs/components/steps#anatomy)
 */
export const slots = [
  "root",
  "list",
  "item",
  "trigger",
  "indicator",
  "separator",
  "content",
  "nextTrigger",
  "prevTrigger",
  "progress"
] as const;

/**
 * **Steps**
 * @description Used to guide users through a series of steps in a process.
 * @see [source](https://ark-ui.com/vue/docs/components/steps#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Steps**
 * @description Used to guide users through a series of steps in a process.
 * @see [source](https://ark-ui.com/vue/docs/components/steps#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
