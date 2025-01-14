import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as splitterAnatomy } from "@zag-js/splitter";

const component = {
  name: "Splitter",
  description: "A component that divides your interface into resizable sections."
};
const source = "https://ark-ui.com/vue/docs/components/splitter#anatomy";

export type SplitterSlots = keyof ReturnType<typeof createSplitterSlots>;

export const createSplitterSlots = (args?: CSArgs) => createSlots("splitter", splitterAnatomy.keys(), args);

export const createSplitterDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
