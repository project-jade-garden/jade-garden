import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as selectAnatomy } from "@zag-js/select";

const component = {
  name: "Select",
  description: "Displays a list of options for the user to pick from."
};
const source = "https://ark-ui.com/vue/docs/components/select#anatomy";

export type SelectSlots = keyof ReturnType<typeof createSelectSlots>;

export const createSelectSlots = (args?: CSArgs) => createSlots("select", selectAnatomy.keys(), args);

export const createSelectDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
