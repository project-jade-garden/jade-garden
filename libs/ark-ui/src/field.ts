// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/field/field.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Field**
 * @description Provides a flexible container for form inputs, labels, and helper text.
 * @see [source](https://ark-ui.com/vue/docs/components/field#anatomy)
 */
export const slots = [
  "root",
  "errorText",
  "helperText",
  "input",
  "label",
  "select",
  "textarea",
  "requiredIndicator"
] as const;

/**
 * **Field**
 * @description Provides a flexible container for form inputs, labels, and helper text.
 * @see [source](https://ark-ui.com/vue/docs/components/field#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Field**
 * @description Provides a flexible container for form inputs, labels, and helper text.
 * @see [source](https://ark-ui.com/vue/docs/components/field#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
