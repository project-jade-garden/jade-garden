import { createSlots } from "@spark-css/core/avatar";
/**
 * **Avatar**
 * @description A graphical representation of the user, often used in profile sections.
 *
 * @returns
 * ```js
 * {
 *   base: "avatar",
 *   root: "avatar__root",
 *   image: "avatar__image",
 *   fallback: "avatar__fallback"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/avatar#anatomy)
 */
const slots = createSlots({});
/**
 * @typedef { import("@spark-css/core/avatar").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: slots.root,
  image: slots.image,
  fallback: slots.fallback
};
/**
 * **Avatar**
 * @description A graphical representation of the user, often used in profile sections.
 *
 * @example
 * ```css
 * .avatar { }
 *
 * .avatar__root { }
 *
 * .avatar__image { }
 *
 * .avatar__fallback { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/avatar#anatomy)
 */
export const avatarStyles = styledSlots;
