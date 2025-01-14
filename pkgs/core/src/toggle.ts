import { type CSArgs, type PrintType, type Slots, createAnatomy, createDocs, createSlots } from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/toggle/toggle.anatomy.ts

const toggleAnatomy = createAnatomy("toggle", ["root", "indicator"]);

const component = {
  name: "Toggle",
  description: "A two-state button that can be toggled on or off."
};
const source = "https://ark-ui.com/vue/docs/components/toggle#anatomy";

export type ToggleSlots = keyof ReturnType<typeof createToggleSlots>;

export const createToggleSlots = (args?: CSArgs) => createSlots("toggle", toggleAnatomy.keys(), args);

export const createToggleDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
