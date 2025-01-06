import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as selectAnatomy } from "@zag-js/select";

/**
 * **Select**
 * @description Displays a list of options for the user to pick from.
 * @see [source](https://ark-ui.com/vue/docs/components/select#anatomy)
 */
export const createSelectSlots = (props?: GSProps) => generateSlots("select", selectAnatomy.keys(), props);

/**
 * **Select**
 * @description Displays a list of options for the user to pick from.
 * @see [source](https://ark-ui.com/vue/docs/components/select#anatomy)
 */
export type SelectSlots = keyof ReturnType<typeof createSelectSlots>;
