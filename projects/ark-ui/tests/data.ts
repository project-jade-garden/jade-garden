// TODO: Automate remote check and setup for `src` and `test` files.
// * To test against `src`
// * Updates based on changes here: https://github.com/search?q=repo%3Achakra-ui/ark%20path%3A.anatomy.ts&type=code
import { anatomy as accordion } from "@zag-js/accordion";
import { createAnatomy } from "@zag-js/anatomy";
import { anatomy as angleSlider } from "@zag-js/angle-slider";
import { anatomy as avatar } from "@zag-js/avatar";
import { anatomy as carousel } from "@zag-js/carousel";
import { anatomy as checkbox } from "@zag-js/checkbox";
import { anatomy as clipboard } from "@zag-js/clipboard";
import { anatomy as collapsible } from "@zag-js/collapsible";
import { anatomy as colorPicker } from "@zag-js/color-picker";
import { anatomy as combobox } from "@zag-js/combobox";
import { anatomy as datePicker } from "@zag-js/date-picker";
import { anatomy as dialog } from "@zag-js/dialog";
import { anatomy as editable } from "@zag-js/editable";
import { anatomy as fileUpload } from "@zag-js/file-upload";
import { anatomy as floatingPanel } from "@zag-js/floating-panel";
import { anatomy as hoverCard } from "@zag-js/hover-card";
import { anatomy as listbox } from "@zag-js/listbox";
import { anatomy as menu } from "@zag-js/menu";
import { anatomy as numberInput } from "@zag-js/number-input";
import { anatomy as pagination } from "@zag-js/pagination";
import { anatomy as pinInput } from "@zag-js/pin-input";
import { anatomy as popover } from "@zag-js/popover";
import { anatomy as progress } from "@zag-js/progress";
import { anatomy as qrCode } from "@zag-js/qr-code";
import { anatomy as radioGroup } from "@zag-js/radio-group";
import { anatomy as ratingGroup } from "@zag-js/rating-group";
import { anatomy as select } from "@zag-js/select";
import { anatomy as signaturePad } from "@zag-js/signature-pad";
import { anatomy as slider } from "@zag-js/slider";
import { anatomy as splitter } from "@zag-js/splitter";
import { anatomy as steps } from "@zag-js/steps";
import { anatomy as switchSlots } from "@zag-js/switch";
import { anatomy as tabs } from "@zag-js/tabs";
import { anatomy as tagsInput } from "@zag-js/tags-input";
import { anatomy as timer } from "@zag-js/timer";
import { anatomy as toast } from "@zag-js/toast";
import { anatomy as toggleGroup } from "@zag-js/toggle-group";
import { anatomy as tooltip } from "@zag-js/tooltip";
import { anatomy as tour } from "@zag-js/tour";
import { anatomy as treeView } from "@zag-js/tree-view";

const field = createAnatomy("field").parts(
  "root",
  "errorText",
  "helperText",
  "input",
  "label",
  "select",
  "textarea",
  "requiredIndicator"
);

const fieldset = createAnatomy("fieldset").parts("root", "errorText", "helperText", "legend");

const segmentGroup = radioGroup.rename("segment-group");

const toggle = createAnatomy("toggle", ["root", "indicator"]);

export const components = {
  accordion: accordion.keys(),
  angleSlider: angleSlider.keys(),
  avatar: avatar.keys(),
  carousel: carousel.keys(),
  checkbox: checkbox.extendWith("group").keys(),
  clipboard: clipboard.keys(),
  collapsible: collapsible.keys(),
  colorPicker: colorPicker.extendWith("view").keys(),
  combobox: combobox.keys(),
  datePicker: datePicker.keys(),
  dialog: dialog.keys(),
  editable: editable.keys(),
  field: field.keys(),
  fieldset: fieldset.keys(),
  fileUpload: fileUpload.keys(),
  floatingPanel: floatingPanel.keys(),
  hoverCard: hoverCard.keys(),
  listbox: listbox.keys(),
  menu: menu.keys(),
  numberInput: numberInput.keys(),
  pagination: pagination.keys(),
  pinInput: pinInput.keys(),
  popover: popover.keys(),
  progress: progress.keys(),
  qrCode: qrCode.keys(),
  radioGroup: radioGroup.keys(),
  ratingGroup: ratingGroup.keys(),
  segmentGroup: segmentGroup.keys(),
  select: select.keys(),
  signaturePad: signaturePad.keys(),
  slider: slider.keys(),
  splitter: splitter.keys(),
  steps: steps.keys(),
  switch: switchSlots.keys(),
  tabs: tabs.keys(),
  tagsInput: tagsInput.keys(),
  timer: timer.keys(),
  toast: toast.keys(),
  toggleGroup: toggleGroup.keys(),
  toggle: toggle.keys(),
  tooltip: tooltip.keys(),
  tour: tour.extendWith("control").keys(),
  treeView: treeView.keys()
};
