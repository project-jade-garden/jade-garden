import { camelCase, pascalCase } from "es-toolkit";
import {
  Accordion,
  AlertDialog,
  AspectRatio,
  Avatar,
  Checkbox,
  Collapsible,
  ContextMenu,
  Dialog,
  DropdownMenu,
  Form,
  HoverCard,
  Label,
  Menubar,
  NavigationMenu,
  Popover,
  Progress,
  RadioGroup,
  ScrollArea,
  Select,
  Separator,
  Slider,
  Switch,
  Tabs,
  Toast,
  Toggle,
  ToggleGroup,
  Toolbar,
  Tooltip
} from "radix-ui";

const toSlots = (parts: string[], name: string) =>
  parts
    .filter(
      (part) =>
        !part.includes("Portal") &&
        !part.includes("unstable") &&
        !part.includes(name) &&
        !part.includes(pascalCase(name))
    )
    .map((slot) => camelCase(slot));

export const components = {
  accordion: toSlots(Object.keys(Accordion), "accordion"),
  alertDialog: toSlots(Object.keys(AlertDialog), "alertDialog"),
  aspectRatio: toSlots(Object.keys(AspectRatio), "aspectRatio"),
  avatar: toSlots(Object.keys(Avatar), "avatar"),
  checkbox: toSlots(Object.keys(Checkbox), "checkbox"),
  collapsible: toSlots(Object.keys(Collapsible), "collapsible"),
  contextMenu: toSlots(Object.keys(ContextMenu), "contextMenu"),
  dialog: toSlots(Object.keys(Dialog), "dialog"),
  dropdownMenu: toSlots(Object.keys(DropdownMenu), "dropdownMenu"),
  form: toSlots(Object.keys(Form), "form"),
  hoverCard: toSlots(Object.keys(HoverCard), "hoverCard"),
  label: toSlots(Object.keys(Label), "label"),
  menubar: toSlots(Object.keys(Menubar), "menubar"),
  navigationMenu: toSlots(Object.keys(NavigationMenu), "navigationMenu"),
  popover: toSlots(Object.keys(Popover), "popover"),
  progress: toSlots(Object.keys(Progress), "progress"),
  radioGroup: toSlots(Object.keys(RadioGroup), "radioGroup"),
  scrollArea: toSlots(Object.keys(ScrollArea), "scrollArea"),
  select: toSlots(Object.keys(Select), "select"),
  separator: toSlots(Object.keys(Separator), "separator"),
  slider: toSlots(Object.keys(Slider), "slider"),
  switch: toSlots(Object.keys(Switch), "switch"),
  tabs: toSlots(Object.keys(Tabs), "tabs"),
  toast: toSlots(Object.keys(Toast), "toast"),
  toggle: toSlots(Object.keys(Toggle), "toggle"),
  toggleGroup: toSlots(Object.keys(ToggleGroup), "toggleGroup"),
  toolbar: toSlots(Object.keys(Toolbar), "toolbar"),
  tooltip: toSlots(Object.keys(Tooltip), "tooltip")
};
