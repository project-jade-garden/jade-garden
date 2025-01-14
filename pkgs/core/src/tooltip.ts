import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as tooltipAnatomy } from "@zag-js/tooltip";

const component = {
  name: "Tooltip",
  description: "A label that provides information on hover or focus."
};
const source = "https://ark-ui.com/vue/docs/components/tooltip#anatomy";

export type TooltipSlots = keyof ReturnType<typeof createTooltipSlots>;

export const createTooltipSlots = (args?: CSArgs) => createSlots("tooltip", tooltipAnatomy.keys(), args);

export const createTooltipDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
