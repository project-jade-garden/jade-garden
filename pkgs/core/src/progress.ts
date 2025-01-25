import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
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

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("progress", progressAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
