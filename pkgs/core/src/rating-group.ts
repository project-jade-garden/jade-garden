import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as ratingGroupAnatomy } from "@zag-js/rating-group";

/**
 * **Rating Group**
 * @description Allows users to rate items using a set of icons.
 * @see [source](https://ark-ui.com/vue/docs/components/rating-group#anatomy)
 */
export const createRatingGroupSlots = (props?: GSProps) =>
  generateSlots("rating-group", ratingGroupAnatomy.keys(), props);

/**
 * **Rating Group**
 * @description Allows users to rate items using a set of icons.
 * @see [source](https://ark-ui.com/vue/docs/components/rating-group#anatomy)
 */
export type RatingGroupSlots = keyof ReturnType<typeof createRatingGroupSlots>;
