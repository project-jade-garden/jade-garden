// * https://github.com/radix-ui/primitives/blob/main/packages/react/navigation-menu/src/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Navigation Menu**
 * @description A collection of links for navigating websites.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/navigation-menu#anatomy)
 */
export const slots = ["content", "indicator", "item", "link", "list", "root", "sub", "trigger", "viewport"] as const;

/**
 * **Navigation Menu**
 * @description A collection of links for navigating websites.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/navigation-menu#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Navigation Menu**
 * @description A collection of links for navigating websites.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/navigation-menu#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  { content: {}; indicator: {}; item: {}; link: {}; list: {}; root: {}; sub: {}; trigger: {}; viewport: {} }
>;
