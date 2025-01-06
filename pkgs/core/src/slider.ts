import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as sliderAnatomy } from "@zag-js/slider";

/**
 * **Slider**
 * @description A control element that allows for a range of selections.
 * @see [source](https://ark-ui.com/vue/docs/components/slider#anatomy)
 */
export const createSliderSlots = (props?: GSProps) => generateSlots("slider", sliderAnatomy.keys(), props);

/**
 * **Slider**
 * @description A control element that allows for a range of selections.
 * @see [source](https://ark-ui.com/vue/docs/components/slider#anatomy)
 */
export type SliderSlots = keyof ReturnType<typeof createSliderSlots>;
