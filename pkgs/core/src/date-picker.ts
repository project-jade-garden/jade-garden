import { type GSProps, generateSlots } from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/date-picker/date-picker.anatomy.ts
import { anatomy } from "@zag-js/date-picker";

const datePickerAnatomy = anatomy.extendWith("view");

/**
 * **Date Picker**
 * @description A component that allows users to select a date from a calendar.
 * @see [source](https://ark-ui.com/vue/docs/components/date-picker#anatomy)
 */
export const createDatePickerSlots = (props?: GSProps) => generateSlots("date-picker", datePickerAnatomy.keys(), props);

/**
 * **Date Picker**
 * @description A component that allows users to select a date from a calendar.
 * @see [source](https://ark-ui.com/vue/docs/components/date-picker#anatomy)
 */
export type DatePickerSlots = keyof ReturnType<typeof createDatePickerSlots>;
