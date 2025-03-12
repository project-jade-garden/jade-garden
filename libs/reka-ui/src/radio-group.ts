// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/RadioGroup/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Radio Group**
 * @description A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
 * @see [source](https://reka-ui.com/docs/components/radio-group#anatomy)
 */
export const slots = ["root", "item", "indicator"] as const;

/**
 * **Radio Group**
 * @description A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
 * @see [source](https://reka-ui.com/docs/components/radio-group#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
