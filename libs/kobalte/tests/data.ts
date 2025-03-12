// TODO: Resolve various import issues
// ! Commented out code are the import issues
import { Accordion } from "@kobalte/core/accordion";
import { Alert } from "@kobalte/core/alert";
import { AlertDialog } from "@kobalte/core/alert-dialog";
import { Badge } from "@kobalte/core/badge";
import { Breadcrumbs } from "@kobalte/core/breadcrumbs";
import { Button } from "@kobalte/core/button";
import { Checkbox } from "@kobalte/core/checkbox";
import { Collapsible } from "@kobalte/core/collapsible";
// import { ColorArea } from "@kobalte/core/color-area";
// import { ColorChannelField } from "@kobalte/core/color-channel-field";
import { ColorField } from "@kobalte/core/color-field";
import { ColorSwatch } from "@kobalte/core/color-swatch";
// import { ColorWheel } from "@kobalte/core/color-wheel";
// import { Combobox } from "@kobalte/core/combobox";
// import { ContextMenu } from "@kobalte/core/context-menu";
// import { DatePicker } from "@kobalte/core/date-picker";
import { Dialog } from "@kobalte/core/dialog";
// import { DropdownMenu } from "@kobalte/core/dropdown-menu";
// import { FileField } from "@kobalte/core/file-field";
// import { HoverCard } from "@kobalte/core/hover-card";
import { Image } from "@kobalte/core/image";
import { Link } from "@kobalte/core/link";
// import { Menubar } from "@kobalte/core/menubar";
import { Meter } from "@kobalte/core/meter";
// import { NavigationMenu } from "@kobalte/core/navigation-menu";
// import { NumberField } from "@kobalte/core/number-field";
// import { Pagination } from "@kobalte/core/pagination";
// import { Popover } from "@kobalte/core/popover";
import { Progress } from "@kobalte/core/progress";
import { RadioGroup } from "@kobalte/core/radio-group";
// import { Search } from "@kobalte/core/search";
// import { Select } from "@kobalte/core/select";
import { Separator } from "@kobalte/core/separator";
import { Skeleton } from "@kobalte/core/skeleton";
// import { Slider } from "@kobalte/core/slider";
import { Switch } from "@kobalte/core/switch";
import { Tabs } from "@kobalte/core/tabs";
import { TextField } from "@kobalte/core/text-field";
import { Toast } from "@kobalte/core/toast";
import { ToggleButton } from "@kobalte/core/toggle-button";
import { ToggleGroup } from "@kobalte/core/toggle-group";
// import { Tooltip } from "@kobalte/core/tooltip";
import { camelCase } from "es-toolkit";

const toSlots = (parts: string[]) =>
  parts.length > 0 ? parts.filter((part) => part !== "Portal").map((part) => camelCase(part)) : ["root"];

export const components = {
  accordion: toSlots(Object.keys(Accordion)),
  alert: toSlots(Object.keys(Alert)),
  alertDialog: toSlots(Object.keys(AlertDialog)),
  badge: toSlots(Object.keys(Badge)),
  breadcrumbs: toSlots(Object.keys(Breadcrumbs)),
  button: toSlots(Object.keys(Button)),
  checkbox: toSlots(Object.keys(Checkbox)),
  collapsible: toSlots(Object.keys(Collapsible)),
  colorArea: ["root", "description", "errorMessage", "label", "background", "thumb", "hiddenInputX", "hiddenInputY"],
  colorChannelField: [
    "root",
    "description",
    "errorMessage",
    "hiddenInput",
    "input",
    "incrementTrigger",
    "decrementTrigger",
    "label"
  ],
  colorField: toSlots(Object.keys(ColorField)),
  colorSlider: ["root", "description", "errorMessage", "input", "label", "thumb", "track", "valueLabel"],
  colorSwatch: toSlots(Object.keys(ColorSwatch)),
  colorWheel: ["root", "description", "errorMessage", "input", "label", "thumb", "track", "valueLabel"],
  combobox: [
    "root",
    "arrow",
    "content",
    "control",
    "description",
    "errorMessage",
    "hiddenSelect",
    "icon",
    "input",
    "item",
    "itemDescription",
    "itemIndicator",
    "itemLabel",
    "label",
    "listbox",
    "section",
    "trigger"
  ],
  contextMenu: [
    "root",
    "arrow",
    "checkboxItem",
    "content",
    "group",
    "groupLabel",
    "icon",
    "item",
    "itemDescription",
    "itemIndicator",
    "itemLabel",
    "radioGroup",
    "radioItem",
    "separator",
    "sub",
    "subContent",
    "subTrigger",
    "trigger"
  ],
  dialog: toSlots(Object.keys(Dialog)),
  dropdownMenu: [
    "root",
    "arrow",
    "checkboxItem",
    "content",
    "group",
    "groupLabel",
    "icon",
    "item",
    "itemDescription",
    "itemIndicator",
    "itemLabel",
    "radioGroup",
    "radioItem",
    "separator",
    "sub",
    "subContent",
    "subTrigger",
    "trigger"
  ],
  fileField: [
    "root",
    "context",
    "dropzone",
    "hiddenInput",
    "label",
    "trigger",
    "itemList",
    "item",
    "itemPreview",
    "itemPreviewImage",
    "itemSize",
    "itemDeleteTrigger",
    "itemName",
    "description",
    "errorMessage"
  ],
  hoverCard: ["root", "arrow", "content", "trigger"],
  image: toSlots(Object.keys(Image)),
  link: toSlots(Object.keys(Link)),
  menubar: [
    "root",
    "arrow",
    "checkboxItem",
    "content",
    "group",
    "groupLabel",
    "icon",
    "item",
    "itemDescription",
    "itemIndicator",
    "itemLabel",
    "radioGroup",
    "radioItem",
    "menu",
    "separator",
    "sub",
    "subContent",
    "subTrigger",
    "trigger"
  ],
  meter: toSlots(Object.keys(Meter)),
  navigationMenu: [
    "root",
    "arrow",
    "checkboxItem",
    "content",
    "group",
    "groupLabel",
    "icon",
    "item",
    "itemDescription",
    "itemIndicator",
    "itemLabel",
    "radioGroup",
    "radioItem",
    "menu",
    "separator",
    "sub",
    "subContent",
    "subTrigger",
    "trigger",
    "viewport"
  ],
  numberField: [
    "root",
    "description",
    "errorMessage",
    "hiddenInput",
    "input",
    "incrementTrigger",
    "decrementTrigger",
    "label"
  ],
  pagination: ["root", "ellipsis", "item", "items", "next", "previous"],
  popover: ["root", "anchor", "arrow", "closeButton", "content", "description", "title", "trigger"],
  progress: toSlots(Object.keys(Progress)),
  radioGroup: toSlots(Object.keys(RadioGroup)),
  search: [
    "root",
    "arrow",
    "content",
    "control",
    "description",
    "hiddenSelect",
    "icon",
    "input",
    "item",
    "itemDescription",
    "itemLabel",
    "label",
    "listbox",
    "section",
    "noResult",
    "indicator"
  ],
  select: [
    "root",
    "arrow",
    "content",
    "description",
    "errorMessage",
    "hiddenSelect",
    "icon",
    "item",
    "itemDescription",
    "itemIndicator",
    "itemLabel",
    "label",
    "listbox",
    "section",
    "trigger",
    "value"
  ],
  separator: toSlots(Object.keys(Separator)),
  skeleton: toSlots(Object.keys(Skeleton)),
  slider: ["root", "description", "errorMessage", "fill", "input", "label", "thumb", "track", "valueLabel"],
  switch: toSlots(Object.keys(Switch)),
  tabs: toSlots(Object.keys(Tabs)),
  textField: toSlots(Object.keys(TextField)),
  toast: toSlots(Object.keys(Toast)),
  toggleButton: toSlots(Object.keys(ToggleButton)),
  toggleGroup: toSlots(Object.keys(ToggleGroup)),
  tooltip: ["root", "arrow", "content", "trigger"]
};
