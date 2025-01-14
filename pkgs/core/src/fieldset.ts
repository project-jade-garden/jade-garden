import { type CSArgs, type PrintType, type Slots, createAnatomy, createDocs, createSlots } from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/fieldset/fieldset.anatomy.ts

const fieldsetAnatomy = createAnatomy("fieldset").parts("root", "errorText", "helperText", "legend");

const component = {
  name: "Fieldset",
  description: "A set of form controls optionally grouped under a common name."
};
const source = "https://ark-ui.com/vue/docs/components/fieldset#anatomy";

export type FieldsetSlots = keyof ReturnType<typeof createFieldsetSlots>;

export const createFieldsetSlots = (args?: CSArgs) => createSlots("fieldset", fieldsetAnatomy.keys(), args);

export const createFieldsetDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
