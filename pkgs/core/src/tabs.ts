import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as tabsAnatomy } from "@zag-js/tabs";

/**
 * **Tabs**
 * @description Flexible navigation tool with various modes and features.
 * @see [source](https://ark-ui.com/vue/docs/components/tabs#anatomy)
 */
export const createTabsSlots = (props?: GSProps) => generateSlots("tabs", tabsAnatomy.keys(), props);

/**
 * **Tabs**
 * @description Flexible navigation tool with various modes and features.
 * @see [source](https://ark-ui.com/vue/docs/components/tabs#anatomy)
 */
export type TabsSlots = keyof ReturnType<typeof createTabsSlots>;
