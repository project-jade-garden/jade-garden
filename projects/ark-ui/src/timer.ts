// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/timer/timer.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Timer**
 * @description Used to record the time elapsed from zero or since a specified target time.
 * @see [source](https://ark-ui.com/docs/components/timer#anatomy)
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
 * @see [source](https://ark-ui.com/docs/components/timer#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Timer**
 * @description Used to record the time elapsed from zero or since a specified target time.
 * @see [source](https://ark-ui.com/docs/components/timer#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  { root: {}; area: {}; control: {}; item: {}; itemValue: {}; itemLabel: {}; actionTrigger: {}; separator: {} }
>;
