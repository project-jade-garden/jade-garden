// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/timer/timer.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Timer**
 * @description Used to record the time elapsed from zero or since a specified target time.
 * @see [source](https://ark-ui.com/vue/docs/components/timer#anatomy)
 */
export const slots = [
  "root",
  "area",
  "control",
  "item",
  "itemValue",
  "itemLabel",
  "actionTrigger",
  "separator"
] as const;

/**
 * **Timer**
 * @description Used to record the time elapsed from zero or since a specified target time.
 * @see [source](https://ark-ui.com/vue/docs/components/timer#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Timer**
 * @description Used to record the time elapsed from zero or since a specified target time.
 * @see [source](https://ark-ui.com/vue/docs/components/timer#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
