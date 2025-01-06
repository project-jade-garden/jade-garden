import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as tagsInputAnatomy } from "@zag-js/tags-input";

/**
 * **Tags Input**
 * @description A component that allows users to add tags to an input field.
 * @see [source](https://ark-ui.com/vue/docs/components/tags-input#anatomy)
 */
export const createTagsInputSlots = (props?: GSProps) => generateSlots("tags-input", tagsInputAnatomy.keys(), props);

/**
 * **Tags Input**
 * @description A component that allows users to add tags to an input field.
 * @see [source](https://ark-ui.com/vue/docs/components/tags-input#anatomy)
 */
export type TagsInputSlots = keyof ReturnType<typeof createTagsInputSlots>;
