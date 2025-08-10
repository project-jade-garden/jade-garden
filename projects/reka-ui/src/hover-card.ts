// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/HoverCard/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Hover Card**
 * @description For sighted users to preview content available behind a link.
 * @see [source](https://reka-ui.com/docs/components/hover-card#anatomy)
 */
export const slots = ["root", "trigger", "portal", "content", "arrow"] as const;

/**
 * **Hover Card**
 * @description For sighted users to preview content available behind a link.
 * @see [source](https://reka-ui.com/docs/components/hover-card#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Hover Card**
 * @description For sighted users to preview content available behind a link.
 * @see [source](https://reka-ui.com/docs/components/hover-card#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    trigger: {
      state: "open" | "closed";
    };
    content: {
      state: "open" | "closed";
      side: "left" | "right" | "bottom" | "top";
      align: "start" | "end" | "center";
    };
  }
>;
