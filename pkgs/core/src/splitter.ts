import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as splitterAnatomy } from "@zag-js/splitter";

/**
 * **Splitter**
 * @description A component that divides your interface into resizable sections.
 * @see [source](https://ark-ui.com/vue/docs/components/splitter#anatomy)
 */
export const createSplitterSlots = (props?: GSProps) => generateSlots("splitter", splitterAnatomy.keys(), props);

/**
 * **Splitter**
 * @description A component that divides your interface into resizable sections.
 * @see [source](https://ark-ui.com/vue/docs/components/splitter#anatomy)
 */
export type SplitterSlots = keyof ReturnType<typeof createSplitterSlots>;
