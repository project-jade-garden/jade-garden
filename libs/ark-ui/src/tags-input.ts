// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/tags-input/tags-input.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Tags Input**
 * @description A component that allows users to add tags to an input field.
 * @see [source](https://ark-ui.com/vue/docs/components/tags-input#anatomy)
 */
export const slots = [
  "root",
  "item",
  "control",
  "label",
  "input",
  "clearTrigger",
  "itemPreview",
  "itemInput",
  "itemText",
  "itemDeleteTrigger"
] as const;

/**
 * **Tags Input**
 * @description A component that allows users to add tags to an input field.
 * @see [source](https://ark-ui.com/vue/docs/components/tags-input#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
