import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as progressAnatomy } from "@zag-js/progress";

const component = {
  name: "Progress",
  description: [
    "**Circular** - An element that shows either determinate or indeterminate progress.",
    "**Linear** - An element that shows either determinate or indeterminate progress."
  ]
};
const source = [
  {
    name: "Circular",
    description: "https://ark-ui.com/vue/docs/components/progress-circular#anatomy"
  },
  {
    name: "Linear",
    description: "https://ark-ui.com/vue/docs/components/progress-linear#anatomy"
  }
];

export type ProgressSlots = keyof ReturnType<typeof createProgressSlots>;

export const createProgressSlots = (args?: CSArgs) => createSlots("progress", progressAnatomy.keys(), args);

export const createProgressDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
