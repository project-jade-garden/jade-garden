import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/checkbox/checkbox.anatomy.ts
import { anatomy } from "@zag-js/checkbox";

const checkboxAnatomy = anatomy.extendWith("group");

const component = {
  name: "Checkbox",
  description: "A control element that allows for multiple selections within a set."
};
const source = "https://ark-ui.com/vue/docs/components/checkbox#anatomy";

export type CheckboxSlots = keyof ReturnType<typeof createCheckboxSlots>;

export const createCheckboxSlots = (args?: CSArgs) => createSlots("checkbox", checkboxAnatomy.keys(), args);

export const createCheckboxDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
