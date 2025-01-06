import { type GSProps, generateSlots } from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/checkbox/checkbox.anatomy.ts
import { anatomy } from "@zag-js/checkbox";

const checkboxAnatomy = anatomy.extendWith("group");

/**
 * **Checkbox**
 * @description A control element that allows for multiple selections within a set.
 * @see [source](https://ark-ui.com/vue/docs/components/checkbox#anatomy)
 */
export const createCheckboxSlots = (props?: GSProps) => generateSlots("checkbox", checkboxAnatomy.keys(), props);

/**
 * **Checkbox**
 * @description A control element that allows for multiple selections within a set.
 * @see [source](https://ark-ui.com/vue/docs/components/checkbox#anatomy)
 */
export type CheckboxSlots = keyof ReturnType<typeof createCheckboxSlots>;
