// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/editable/editable.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Editable**
 * @description A component that allows users to edit text in place.
 * @see [source](https://ark-ui.com/vue/docs/components/editable#anatomy)
 */
export const slots = [
  "root",
  "area",
  "label",
  "preview",
  "input",
  "editTrigger",
  "submitTrigger",
  "cancelTrigger",
  "control"
] as const;

/**
 * **Editable**
 * @description A component that allows users to edit text in place.
 * @see [source](https://ark-ui.com/vue/docs/components/editable#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Editable**
 * @description A component that allows users to edit text in place.
 * @see [source](https://ark-ui.com/vue/docs/components/editable#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
