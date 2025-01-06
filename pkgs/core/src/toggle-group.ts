import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as toggleGroupAnatomy } from "@zag-js/toggle-group";

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on or off.
 * @see [source](https://ark-ui.com/vue/docs/components/toggle-group#anatomy)
 */
export const createToggleGroupSlots = (props?: GSProps) =>
  generateSlots("toggle-group", toggleGroupAnatomy.keys(), props);

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on or off.
 * @see [source](https://ark-ui.com/vue/docs/components/toggle-group#anatomy)
 */
export type ToggleGroupSlots = keyof ReturnType<typeof createToggleGroupSlots>;
