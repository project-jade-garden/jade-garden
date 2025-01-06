import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as collapsibleAnatomy } from "@zag-js/collapsible";

/**
 * **Collapsible**
 * @description An interactive component that can be expanded or collapsed.
 * @see [source](https://ark-ui.com/vue/docs/components/collapsible#anatomy)
 */
export const createCollapsibleSlots = (props?: GSProps) =>
  generateSlots("collapsible", collapsibleAnatomy.keys(), props);

/**
 * **Collapsible**
 * @description An interactive component that can be expanded or collapsed.
 * @see [source](https://ark-ui.com/vue/docs/components/collapsible#anatomy)
 */
export type CollapsibleSlots = keyof ReturnType<typeof createCollapsibleSlots>;
