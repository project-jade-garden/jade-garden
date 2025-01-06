import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as numberInputAnatomy } from "@zag-js/number-input";

/**
 * **Number Input**
 * @description A field that allows user input of numeric values.
 * @see [source](https://ark-ui.com/vue/docs/components/number-input#anatomy)
 */
export const createNumberInputSlots = (props?: GSProps) =>
  generateSlots("number-input", numberInputAnatomy.keys(), props);

/**
 * **Number Input**
 * @description A field that allows user input of numeric values.
 * @see [source](https://ark-ui.com/vue/docs/components/number-input#anatomy)
 */
export type NumberInputSlots = keyof ReturnType<typeof createNumberInputSlots>;
