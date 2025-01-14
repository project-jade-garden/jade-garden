import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as timerAnatomy } from "@zag-js/timer";

const component = {
  name: "Timer",
  description: "Used to record the time elapsed from zero or since a specified target time."
};
const source = "https://ark-ui.com/vue/docs/components/timer#anatomy";

export type TimerSlots = keyof ReturnType<typeof createTimerSlots>;

export const createTimerSlots = (args?: CSArgs) => createSlots("timer", timerAnatomy.keys(), args);

export const createTimerDocs = (print: PrintType, slots: Slots = {}) => createDocs(print, { slots, component, source });
