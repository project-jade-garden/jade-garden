import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as timerAnatomy } from "@zag-js/timer";

/**
 * **Timer**
 * @description Used to record the time elapsed from zero or since a specified target time.
 * @see [source](https://ark-ui.com/vue/docs/components/timer#anatomy)
 */
export const createTimerSlots = (props?: GSProps) => generateSlots("timer", timerAnatomy.keys(), props);

/**
 * **Timer**
 * @description Used to record the time elapsed from zero or since a specified target time.
 * @see [source](https://ark-ui.com/vue/docs/components/timer#anatomy)
 */
export type TimerSlots = keyof ReturnType<typeof createTimerSlots>;
