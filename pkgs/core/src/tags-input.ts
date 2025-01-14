import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as tagsInputAnatomy } from "@zag-js/tags-input";

const component = {
  name: "Tags Input",
  description: "A component that allows users to add tags to an input field."
};
const source = "https://ark-ui.com/vue/docs/components/tags-input#anatomy";

export type TagsInputSlots = keyof ReturnType<typeof createTagsInputSlots>;

export const createTagsInputSlots = (args?: CSArgs) => createSlots("tags-input", tagsInputAnatomy.keys(), args);

export const createTagsInputDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
