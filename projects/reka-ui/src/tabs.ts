// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Tabs/index.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Tabs**
 * @description A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * @see [source](https://reka-ui.com/docs/components/tabs#anatomy)
 */
export const slots = ["root", "list", "content", "trigger", "indicator"] as const;

/**
 * **Tabs**
 * @description A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * @see [source](https://reka-ui.com/docs/components/tabs#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tabs**
 * @description A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * @see [source](https://reka-ui.com/docs/components/tabs#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      orientation: "vertical" | "horizontal";
    };
    list: {
      orientation: "vertical" | "horizontal";
    };
    content: { state: "active" | "inactive"; orientation: "vertical" | "horizontal" };
    trigger: {
      state: "active" | "inactive";
      disabled: "";
      orientation: "vertical" | "horizontal";
    };
  }
>;
