import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as menuAnatomy } from "@zag-js/menu";

const component = {
  name: "Menu",
  description: "A list of options that appears when a user interacts with a button."
};
const source = "https://ark-ui.com/vue/docs/components/menu#anatomy";

export type MenuSlots = keyof ReturnType<typeof createMenuSlots>;

export const createMenuSlots = (args?: CSArgs) => createSlots("menu", menuAnatomy.keys(), args);

export const createMenuDocs = (print: PrintType, slots: Slots = {}) => createDocs(print, { slots, component, source });
