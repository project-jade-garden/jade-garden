// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Select/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Select**
 * @description Displays a list of options for the user to pick from—triggered by a button.
 * @see [source](https://reka-ui.com/docs/components/select#anatomy)
 */
export const slots = [
  "root",
  "trigger",
  "portal",
  "content",
  "arrow",
  "separator",
  "itemIndicator",
  "label",
  "group",
  "item",
  "itemText",
  "viewport",
  "scrollUpButton",
  "scrollDownButton",
  "value",
  "icon"
] as const;

/**
 * **Select**
 * @description Displays a list of options for the user to pick from—triggered by a button.
 * @see [source](https://reka-ui.com/docs/components/select#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Select**
 * @description Displays a list of options for the user to pick from—triggered by a button.
 * @see [source](https://reka-ui.com/docs/components/select#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    trigger: {
      state: "open" | "closed";
      disabled: "";
      placeholder: "";
    };
    content: {
      state: "open" | "closed";
      side: "left" | "right" | "bottom" | "top";
      align: "start" | "end" | "center";
    };
    item: {
      state: "checked" | "unchecked";
      highlighted: "";
      disabled: "";
    };
  }
>;
