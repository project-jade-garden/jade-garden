import { Accordion } from "@base-ui-components/react/accordion";
import { AlertDialog } from "@base-ui-components/react/alert-dialog";
import { Avatar } from "@base-ui-components/react/avatar";
import { Checkbox } from "@base-ui-components/react/checkbox";
// import { CheckboxGroup } from "@base-ui-components/react/checkbox-group";
import { Collapsible } from "@base-ui-components/react/collapsible";
import { Dialog } from "@base-ui-components/react/dialog";
import { Field } from "@base-ui-components/react/field";
import { Fieldset } from "@base-ui-components/react/fieldset";
// import { Form } from "@base-ui-components/react/form";
// import { Input } from "@base-ui-components/react/input";
import { Menu } from "@base-ui-components/react/menu";
import { NumberField } from "@base-ui-components/react/number-field";
import { Popover } from "@base-ui-components/react/popover";
import { PreviewCard } from "@base-ui-components/react/preview-card";
import { Progress } from "@base-ui-components/react/progress";
import { Radio } from "@base-ui-components/react/radio";
// import { RadioGroup } from "@base-ui-components/react/radio-group";
import { ScrollArea } from "@base-ui-components/react/scroll-area";
import { Select } from "@base-ui-components/react/select";
// import { Separator } from "@base-ui-components/react/separator";
import { Slider } from "@base-ui-components/react/slider";
import { Switch } from "@base-ui-components/react/switch";
import { Tabs } from "@base-ui-components/react/tabs";
// import { Toggle } from "@base-ui-components/react/toggle";
// import { ToggleGroup } from "@base-ui-components/react/toggle-group";
import { Tooltip } from "@base-ui-components/react/tooltip";
import { camelCase } from "es-toolkit";

const toSlots = (parts: string[]) =>
  parts.length > 0 ? parts.filter((part) => part !== "Portal").map((part) => camelCase(part)) : ["root"];

export const components = {
  accordion: toSlots(Object.keys(Accordion)),
  alertDialog: toSlots(Object.keys(AlertDialog)),
  avatar: toSlots(Object.keys(Avatar)),
  checkbox: toSlots(Object.keys(Checkbox)),
  checkboxGroup: ["root"],
  collapsible: toSlots(Object.keys(Collapsible)),
  dialog: toSlots(Object.keys(Dialog)),
  field: toSlots(Object.keys(Field)),
  fieldset: toSlots(Object.keys(Fieldset)),
  form: ["root"],
  input: ["root"],
  menu: toSlots(Object.keys(Menu)),
  numberField: toSlots(Object.keys(NumberField)),
  popover: toSlots(Object.keys(Popover)),
  previewCard: toSlots(Object.keys(PreviewCard)),
  progress: toSlots(Object.keys(Progress)),
  radio: toSlots(Object.keys(Radio)),
  radioGroup: ["root"],
  scrollArea: toSlots(Object.keys(ScrollArea)),
  select: toSlots(Object.keys(Select)),
  separator: ["root"],
  slider: toSlots(Object.keys(Slider)),
  switch: toSlots(Object.keys(Switch)),
  tabs: toSlots(Object.keys(Tabs)),
  toggle: ["root"],
  toggleGroup: ["root"],
  tooltip: toSlots(Object.keys(Tooltip))
};
