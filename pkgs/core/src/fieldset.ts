import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createAnatomy,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/fieldset/fieldset.anatomy.ts

const fieldsetAnatomy = createAnatomy("fieldset").parts("root", "errorText", "helperText", "legend");

const component = {
  name: "Fieldset",
  description: "A set of form controls optionally grouped under a common name."
};
const source = "https://ark-ui.com/vue/docs/components/fieldset#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("checkbox", fieldsetAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
