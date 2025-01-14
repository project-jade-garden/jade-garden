import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as toastAnatomy } from "@zag-js/toast";

const component = {
  name: "Toast",
  description: "A message that appears on the screen to provide feedback on an action."
};
const source = "https://ark-ui.com/vue/docs/components/toast#anatomy";

export type ToastSlots = keyof ReturnType<typeof createToastSlots>;

export const createToastSlots = (args?: CSArgs) => createSlots("toast", toastAnatomy.keys(), args);

export const createToastDocs = (print: PrintType, slots: Slots = {}) => createDocs(print, { slots, component, source });
