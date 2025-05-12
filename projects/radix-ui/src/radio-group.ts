// * https://github.com/radix-ui/primitives/blob/main/packages/react/radio-group/src/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Radio Group**
 * @description A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/radio-group#anatomy)
 */
export const slots = ["indicator", "item", "root"] as const;

/**
 * **Radio Group**
 * @description A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/radio-group#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Radio Group**
 * @description A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/radio-group#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    indicator: {
      state: "checked" | "unchecked";
      disabled: "";
    };
    item: {
      state: "checked" | "unchecked";
      disabled: "";
    };
    root: {
      disabled: "";
    };
  }
>;
