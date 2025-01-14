import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as tabsAnatomy } from "@zag-js/tabs";

const component = {
  name: "Tabs",
  description: "Flexible navigation tool with various modes and features."
};
const source = "https://ark-ui.com/vue/docs/components/tabs#anatomy";

export type TabsSlots = keyof ReturnType<typeof createTabsSlots>;

export const createTabsSlots = (args?: CSArgs) => createSlots("tabs", tabsAnatomy.keys(), args);

export const createTabsDocs = (print: PrintType, slots: Slots = {}) => createDocs(print, { slots, component, source });
