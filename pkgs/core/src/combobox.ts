import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as comboboxAnatomy } from "@zag-js/combobox";

/**
 * **Combobox**
 * @description A single input field that combines the functionality of a select and input.
 * @see [source](https://ark-ui.com/vue/docs/components/combobox#anatomy)
 */
export const createComboboxSlots = (props?: GSProps) => generateSlots("combobox", comboboxAnatomy.keys(), props);

/**
 * **Combobox**
 * @description A single input field that combines the functionality of a select and input.
 * @see [source](https://ark-ui.com/vue/docs/components/combobox#anatomy)
 */
export type ComboboxSlots = keyof ReturnType<typeof createComboboxSlots>;
