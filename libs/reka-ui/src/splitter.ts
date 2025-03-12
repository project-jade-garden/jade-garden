// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Splitter/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Splitter**
 * @description A component that divides your layout into resizable sections.
 * @see [source](https://reka-ui.com/docs/components/splitter#anatomy)
 */
export const slots = ["group", "panel", "resizeHandle"] as const;

/**
 * **Splitter**
 * @description A component that divides your layout into resizable sections.
 * @see [source](https://reka-ui.com/docs/components/splitter#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
