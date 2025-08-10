// * https://github.com/radix-ui/primitives/blob/main/packages/react/toolbar/src/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Toolbar**
 * @description A container for grouping a set of controls, such as buttons, toggle groups or dropdown menus.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/toolbar#anatomy)
 */
export const slots = ["button", "link", "root", "separator", "toggleGroup", "toggleItem"] as const;

/**
 * **Toolbar**
 * @description A container for grouping a set of controls, such as buttons, toggle groups or dropdown menus.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/toolbar#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Toolbar**
 * @description A container for grouping a set of controls, such as buttons, toggle groups or dropdown menus.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/toolbar#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    button: {
      orientation: "vertical" | "horizontal";
    };
    root: {
      orientation: "vertical" | "horizontal";
    };
    separator: {
      orientation: "vertical" | "horizontal";
    };
  }
>;
