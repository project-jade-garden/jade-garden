import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/color-picker/color-picker.anatomy.ts
import { anatomy } from "@zag-js/color-picker";

const colorPickerAnatomy = anatomy.extendWith("view");

const component = {
  name: "Color Picker",
  description: "A component that allows users to select a color from a color picker."
};
const source = "https://ark-ui.com/vue/docs/components/color-picker#anatomy";

export type ColorPickerSlots = keyof ReturnType<typeof createColorPickerSlots>;

export const createColorPickerSlots = (args?: CSArgs) => createSlots("color-picker", colorPickerAnatomy.keys(), args);

export const createColorPickerDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
