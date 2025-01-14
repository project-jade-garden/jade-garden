import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as stepsAnatomy } from "@zag-js/steps";

const component = {
  name: "Steps",
  description: "Used to guide users through a series of steps in a process."
};
const source = "https://ark-ui.com/vue/docs/components/steps#anatomy";

export type StepsSlots = keyof ReturnType<typeof createStepsSlots>;

export const createStepsSlots = (args?: CSArgs) => createSlots("steps", stepsAnatomy.keys(), args);

export const createStepsDocs = (print: PrintType, slots: Slots = {}) => createDocs(print, { slots, component, source });
