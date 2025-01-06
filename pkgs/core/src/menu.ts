import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as menuAnatomy } from "@zag-js/menu";

/**
 * **Menu**
 * @description A list of options that appears when a user interacts with a button.
 * @see [source](https://ark-ui.com/vue/docs/components/menu#anatomy)
 */
export const createMenuSlots = (props?: GSProps) => generateSlots("menu", menuAnatomy.keys(), props);

/**
 * **Menu**
 * @description A list of options that appears when a user interacts with a button.
 * @see [source](https://ark-ui.com/vue/docs/components/menu#anatomy)
 */
export type MenuSlots = keyof ReturnType<typeof createMenuSlots>;
