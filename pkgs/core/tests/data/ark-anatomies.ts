// * To test against `ark-slots.json`
// * Updates based on changes here: https://github.com/search?q=repo%3Achakra-ui/ark%20path%3A.anatomy.ts&type=code
import { createAnatomy } from "@zag-js/anatomy";
import { anatomy as carouselAnatomy } from "@zag-js/carousel";
import { anatomy as checkboxAnatomy } from "@zag-js/checkbox";
import { anatomy as colorPickerAnatomy } from "@zag-js/color-picker";
import { anatomy as datePickerAnatomy } from "@zag-js/date-picker";
import { anatomy as segmentGroupAnatomy } from "@zag-js/radio-group";

export const carousel = carouselAnatomy.extendWith("control").keys();
export const checkbox = checkboxAnatomy.extendWith("group").keys();
export const colorPicker = colorPickerAnatomy.extendWith("view").keys();
export const datePicker = datePickerAnatomy.extendWith("view").keys();
export const field = createAnatomy("field")
  .parts("root", "errorText", "helperText", "input", "label", "select", "textarea", "requiredIndicator")
  .keys();
export const fieldset = createAnatomy("fieldset").parts("root", "errorText", "helperText", "legend").keys();
export const segmentGroup = segmentGroupAnatomy.rename("segment-group").keys();
export const toggle = createAnatomy("toggle", ["root", "indicator"]).keys();
