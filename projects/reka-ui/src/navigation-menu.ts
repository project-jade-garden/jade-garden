// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/NavigationMenu/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Navigation Menu**
 * @description A collection of links for navigating websites.
 * @see [source](https://reka-ui.com/docs/components/navigation-menu#anatomy)
 */
export const slots = ["root", "content", "indicator", "item", "link", "list", "sub", "trigger", "viewport"] as const;

/**
 * **Navigation Menu**
 * @description A collection of links for navigating websites.
 * @see [source](https://reka-ui.com/docs/components/navigation-menu#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Navigation Menu**
 * @description A collection of links for navigating websites.
 * @see [source](https://reka-ui.com/docs/components/navigation-menu#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      orientation: "vertical" | "horizontal";
    };
    content: {
      state: "open" | "closed";
      motion: "to-start" | "to-end" | "from-start" | "from-end";
      orientation: "vertical" | "horizontal";
    };
    indicator: {
      state: "visible" | "hidden";
      orientation: "vertical" | "horizontal";
    };
    link: {
      active: "";
    };
    list: {
      orientation: "vertical" | "horizontal";
    };
    sub: {
      orientation: "vertical" | "horizontal";
    };
    trigger: {
      state: "open" | "closed";
      disabled: "";
    };
    viewport: {
      state: "visible" | "hidden";
      orientation: "vertical" | "horizontal";
    };
  }
>;
