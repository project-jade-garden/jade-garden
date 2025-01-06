import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as radioGroupAnatomy } from "@zag-js/radio-group";

/**
 * **Radio Group**
 * @description Allows single selection from multiple options.
 * @see [source](https://ark-ui.com/vue/docs/components/radio-group#anatomy)
 */
export const createRadioGroupSlots = (props?: GSProps) => generateSlots("radio-group", radioGroupAnatomy.keys(), props);

/**
 * **Radio Group**
 * @description Allows single selection from multiple options.
 * @see [source](https://ark-ui.com/vue/docs/components/radio-group#anatomy)
 */
export type RadioGroupSlots = keyof ReturnType<typeof createRadioGroupSlots>;
