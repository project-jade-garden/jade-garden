import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as toggleGroupAnatomy } from "@zag-js/toggle-group";

const component = {
  name: "Toggle Group",
  description: "A set of two-state buttons that can be toggled on or off."
};
const source = "https://ark-ui.com/vue/docs/components/toggle-group#anatomy";

export type ToggleGroupSlots = keyof ReturnType<typeof createToggleGroupSlots>;

export const createToggleGroupSlots = (args?: CSArgs) => createSlots("toggle-group", toggleGroupAnatomy.keys(), args);

export const createToggleGroupDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
