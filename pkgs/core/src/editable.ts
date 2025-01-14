import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as editableAnatomy } from "@zag-js/editable";

const component = {
  name: "Editable",
  description: "A component that allows users to edit text in place."
};
const source = "https://ark-ui.com/vue/docs/components/editable#anatomy";

export type EditableSlots = keyof ReturnType<typeof createEditableSlots>;

export const createEditableSlots = (args?: CSArgs) => createSlots("editable", editableAnatomy.keys(), args);

export const createEditableDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
