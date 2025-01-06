import { type GSProps, generateSlots } from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/toggle/toggle.anatomy.ts
import { createAnatomy } from "@zag-js/anatomy";

const toggleAnatomy = createAnatomy("toggle", ["root", "indicator"]);

/**
 * **Toggle**
 * @description A two-state button that can be toggled on or off.
 * @see [source](https://ark-ui.com/vue/docs/components/toggle#anatomy)
 */
export const createToggleSlots = (props?: GSProps) => generateSlots("toggle", toggleAnatomy.keys(), props);

/**
 * **Toggle**
 * @description A two-state button that can be toggled on or off.
 * @see [source](https://ark-ui.com/vue/docs/components/toggle#anatomy)
 */
export type ToggleSlots = keyof ReturnType<typeof createToggleSlots>;
