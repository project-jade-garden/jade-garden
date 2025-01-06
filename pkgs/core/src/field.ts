import { type GSProps, generateSlots } from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/field/field.anatomy.ts
import { createAnatomy } from "@zag-js/anatomy";

const fieldAnatomy = createAnatomy("field").parts(
  "root",
  "errorText",
  "helperText",
  "input",
  "label",
  "select",
  "textarea",
  "requiredIndicator"
);

/**
 * **Field**
 * @description Provides a flexible container for form inputs, labels, and helper text.
 * @see [source](https://ark-ui.com/vue/docs/components/field#anatomy)
 */
export const createFieldSlots = (props?: GSProps) => generateSlots("field", fieldAnatomy.keys(), props);

/**
 * **Field**
 * @description Provides a flexible container for form inputs, labels, and helper text.
 * @see [source](https://ark-ui.com/vue/docs/components/field#anatomy)
 */
export type FieldSlots = keyof ReturnType<typeof createFieldSlots>;
