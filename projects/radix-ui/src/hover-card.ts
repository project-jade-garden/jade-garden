// * https://github.com/radix-ui/primitives/blob/main/packages/react/hover-card/src/index.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Hover Card**
 * @description For sighted users to preview content available behind a link.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/hover-card#anatomy)
 */
export const slots = ["arrow", "content", "root", "trigger"] as const;

/**
 * **Hover Card**
 * @description For sighted users to preview content available behind a link.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/hover-card#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Hover Card**
 * @description For sighted users to preview content available behind a link.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/hover-card#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    content: {
      state: "open" | "closed";
      side: "left" | "right" | "bottom" | "top";
      align: "start" | "end" | "center";
    };
    trigger: {
      state: "open" | "closed";
    };
  }
>;
