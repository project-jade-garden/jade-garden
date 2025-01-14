import { type CSArgs, type PrintType, type Slots, createAnatomy, createDocs, createSlots } from "@spark-css/utils";
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

export type FieldSlots = keyof ReturnType<typeof createFieldSlots>;

export const createFieldSlots = (args?: CSArgs) => createSlots("field", fieldAnatomy.keys(), args);

export const createFieldDocs = (print: PrintType, slots: Slots = {}) => createDocs(print, { slots, component, source });
