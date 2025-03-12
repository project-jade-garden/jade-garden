// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Toast/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Toast**
 * @description A succinct message that is displayed temporarily.
 * @see [source](https://reka-ui.com/docs/components/toast#anatomy)
 */
export const slots = ["provider", "root", "portal", "action", "close", "viewport", "title", "description"] as const;

/**
 * **Toast**
 * @description A succinct message that is displayed temporarily.
 * @see [source](https://reka-ui.com/docs/components/toast#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
