// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Stepper/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Stepper**
 * @description A set of steps that are used to indicate progress through a multi-step process.
 * @see [source](https://reka-ui.com/docs/components/stepper#anatomy)
 */
export const slots = ["root", "item", "trigger", "description", "title", "indicator", "separator"] as const;

/**
 * **Stepper**
 * @description A set of steps that are used to indicate progress through a multi-step process.
 * @see [source](https://reka-ui.com/docs/components/stepper#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
