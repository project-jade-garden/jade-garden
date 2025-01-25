import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/color-picker/color-picker.anatomy.ts
import { anatomy } from "@zag-js/color-picker";

const colorPickerAnatomy = anatomy.extendWith("view");

const component = {
  name: "Color Picker",
  description: "A component that allows users to select a color from a color picker."
};
const source = "https://ark-ui.com/vue/docs/components/color-picker#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("color-picker", colorPickerAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
