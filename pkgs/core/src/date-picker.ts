import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/date-picker/date-picker.anatomy.ts
import { anatomy } from "@zag-js/date-picker";

const datePickerAnatomy = anatomy.extendWith("view");

const component = {
  name: "Date Picker",
  description: "A component that allows users to select a date from a calendar."
};
const source = "https://ark-ui.com/vue/docs/components/date-picker#anatomy";

export type DatePickerSlots = keyof ReturnType<typeof createDatePickerSlots>;

export const createDatePickerSlots = (args?: CSArgs) => createSlots("date-picker", datePickerAnatomy.keys(), args);

export const createDatePickerDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
