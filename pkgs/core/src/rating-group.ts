import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as ratingGroupAnatomy } from "@zag-js/rating-group";

const component = {
  name: "Rating Group",
  description: "Allows users to rate items using a set of icons."
};
const source = "https://ark-ui.com/vue/docs/components/rating-group#anatomy";

export type RatingGroupSlots = keyof ReturnType<typeof createRatingGroupSlots>;

export const createRatingGroupSlots = (args?: CSArgs) => createSlots("rating-group", ratingGroupAnatomy.keys(), args);

export const createRatingGroupDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
