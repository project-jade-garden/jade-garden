import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createAnatomy,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/toggle/toggle.anatomy.ts

const toggleAnatomy = createAnatomy("toggle", ["root", "indicator"]);

const component = {
  name: "Toggle",
  description: "A two-state button that can be toggled on or off."
};
const source = "https://ark-ui.com/vue/docs/components/toggle#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("toggle", toggleAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
