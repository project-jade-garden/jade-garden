import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as editableAnatomy } from "@zag-js/editable";

/**
 * **Editable**
 * @description A component that allows users to edit text in place.
 * @see [source](https://ark-ui.com/vue/docs/components/editable#anatomy)
 */
export const createEditableSlots = (props?: GSProps) => generateSlots("editable", editableAnatomy.keys(), props);

/**
 * **Editable**
 * @description A component that allows users to edit text in place.
 * @see [source](https://ark-ui.com/vue/docs/components/editable#anatomy)
 */
export type EditableSlots = keyof ReturnType<typeof createEditableSlots>;
