import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as stepsAnatomy } from "@zag-js/steps";

/**
 * **Steps**
 * @description Used to guide users through a series of steps in a process.
 * @see [source](https://ark-ui.com/vue/docs/components/steps#anatomy)
 */
export const createStepsSlots = (props?: GSProps) => generateSlots("steps", stepsAnatomy.keys(), props);

/**
 * **Steps**
 * @description Used to guide users through a series of steps in a process.
 * @see [source](https://ark-ui.com/vue/docs/components/steps#anatomy)
 */
export type StepsSlots = keyof ReturnType<typeof createStepsSlots>;
