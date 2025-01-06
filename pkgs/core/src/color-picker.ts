import { type GSProps, generateSlots } from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/color-picker/color-picker.anatomy.ts
import { anatomy } from "@zag-js/color-picker";

const colorPickerAnatomy = anatomy.extendWith("view");

/**
 * **Color Picker**
 * @description A component that allows users to select a color from a color picker.
 * @see [source](https://ark-ui.com/vue/docs/components/color-picker#anatomy)
 */
export const createColorPickerSlots = (props?: GSProps) =>
  generateSlots("color-picker", colorPickerAnatomy.keys(), props);

/**
 * **Color Picker**
 * @description A component that allows users to select a color from a color picker.
 * @see [source](https://ark-ui.com/vue/docs/components/color-picker#anatomy)
 */
export type ColorPickerSlots = keyof ReturnType<typeof createColorPickerSlots>;
