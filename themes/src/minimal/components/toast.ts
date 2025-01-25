import {
  type Slots,
  // createDocs,
  createSlots
} from "@spark-css/core/toast";

/**
 * **Toast**
 * @description A message that appears on the screen to provide feedback on an action.
 *
 * @returns
 * ```js
 * {
 *   base: "toast",
 *   group: "toast__group",
 *   root: "toast__root",
 *   title: "toast__title",
 *   description: "toast__description",
 *   actionTrigger: "toast__action-trigger",
 *   closeTrigger: "toast__close-trigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toast#anatomy)
 */
export const toastSlots = createSlots({});

// * Uncomment before styling slots
// createDocs("anatomy", toastSlots);

/**
 * **Toast**
 * @description A message that appears on the screen to provide feedback on an action.
 *
 * @example
 * ```css
 * .toast { }
 *
 * .toast__group { }
 *
 * .toast__root { }
 *
 * .toast__title { }
 *
 * .toast__description { }
 *
 * .toast__action-trigger { }
 *
 * .toast__close-trigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toast#anatomy)
 */
export const toastStyledSlots = {
  base: "toast",
  group: "toast__group",
  root: "toast__root",
  title: "toast__title",
  description: "toast__description",
  actionTrigger: "toast__action-trigger",
  closeTrigger: "toast__close-trigger"
} as const satisfies Record<Slots, string | string[]>;

// * Uncomment after styling slots
// createDocs("styled", toastStyledSlots);
