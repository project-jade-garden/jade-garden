import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createAnatomy,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/field/field.anatomy.ts

const fieldAnatomy = createAnatomy("field").parts(
  "root",
  "errorText",
  "helperText",
  "input",
  "label",
  "select",
  "textarea",
  "requiredIndicator"
);

const component = {
  name: "Field",
  description: "Provides a flexible container for form inputs, labels, and helper text."
};
const source = "https://ark-ui.com/vue/docs/components/field#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("field", fieldAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
