import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as progressAnatomy } from "@zag-js/progress";

/**
 * **Progress**
 * @description **Circular** - An element that shows either determinate or indeterminate progress. **Linear** - An element that shows either determinate or indeterminate progress.
 * @see [source](https://ark-ui.com/vue/docs/components/progress#anatomy)
 */
export const createProgressSlots = (props?: GSProps) => generateSlots("progress", progressAnatomy.keys(), props);

/**
 * **Progress**
 * @description **Circular** - An element that shows either determinate or indeterminate progress. **Linear** - An element that shows either determinate or indeterminate progress.
 * @see [source](https://ark-ui.com/vue/docs/components/progress#anatomy)
 */
export type ProgressSlots = keyof ReturnType<typeof createProgressSlots>;
