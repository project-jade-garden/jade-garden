import { type GSProps, generateSlots } from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/fieldset/fieldset.anatomy.ts
import { createAnatomy } from "@zag-js/anatomy";

const fieldsetAnatomy = createAnatomy("fieldset").parts("root", "errorText", "helperText", "legend");

/**
 * **Fieldset**
 * @description A set of form controls optionally grouped under a common name.
 * @see [source](https://ark-ui.com/vue/docs/components/fieldset#anatomy)
 */
export const createFieldsetSlots = (props?: GSProps) => generateSlots("fieldset", fieldsetAnatomy.keys(), props);

/**
 * **Fieldset**
 * @description A set of form controls optionally grouped under a common name.
 * @see [source](https://ark-ui.com/vue/docs/components/fieldset#anatomy)
 */
export type FieldsetSlots = keyof ReturnType<typeof createFieldsetSlots>;
