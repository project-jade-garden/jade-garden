// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/popover/index.tsx
import type { SVATraits } from "jade-garden/types";

/**
 * **Popover**
 * @description A popover positioned relative to an anchor element.
 * @see [source](https://kobalte.dev/docs/core/components/popover#anatomy)
 */
export const slots = ["root", "anchor", "arrow", "closeButton", "content", "description", "title", "trigger"] as const;

/**
 * **Popover**
 * @description A popover positioned relative to an anchor element.
 * @see [source](https://kobalte.dev/docs/core/components/popover#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Popover**
 * @description A popover positioned relative to an anchor element.
 * @see [source](https://kobalte.dev/docs/core/components/popover#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  { root: {}; anchor: {}; arrow: {}; closeButton: {}; content: {}; description: {}; title: {}; trigger: {} }
>;
