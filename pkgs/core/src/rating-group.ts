import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as ratingGroupAnatomy } from "@zag-js/rating-group";

const component = {
  name: "Rating Group",
  description: "Allows users to rate items using a set of icons."
};
const source = "https://ark-ui.com/vue/docs/components/rating-group#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("rating-group", ratingGroupAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
