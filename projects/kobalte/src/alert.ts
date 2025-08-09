// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/alert/index.tsx
import type { SVATraits } from "jade-garden/types";

/**
 * **Alert**
 * @description Display a brief, important message in a way that attracts the user's attention without interrupting the user's task.
 * @see [source](https://kobalte.dev/docs/core/components/alert#anatomy)
 */
export const slots = ["root"] as const;

/**
 * **Alert**
 * @description Display a brief, important message in a way that attracts the user's attention without interrupting the user's task.
 * @see [source](https://kobalte.dev/docs/core/components/alert#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Alert**
 * @description Display a brief, important message in a way that attracts the user's attention without interrupting the user's task.
 * @see [source](https://kobalte.dev/docs/core/components/alert#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {} }>;
