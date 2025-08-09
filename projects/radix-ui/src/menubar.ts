// * https://github.com/radix-ui/primitives/blob/main/packages/react/menubar/src/index.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Menubar**
 * @description A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/menubar#anatomy)
 */
export const slots = [
  "arrow",
  "checkboxItem",
  "content",
  "group",
  "item",
  "itemIndicator",
  "label",
  "menu",
  "radioGroup",
  "radioItem",
  "root",
  "separator",
  "sub",
  "subContent",
  "subTrigger",
  "trigger"
] as const;

/**
 * **Menubar**
 * @description A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/menubar#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Menubar**
 * @description A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/menubar#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    content: {
      state: "open" | "closed";
      side: "left" | "right" | "bottom" | "top";
      align: "start" | "end" | "center";
    };
    item: {
      highlighted: "";
      disabled: "";
    };
    trigger: {
      state: "open" | "closed";
      highlighted: "";
      disabled: "";
    };
  }
>;
