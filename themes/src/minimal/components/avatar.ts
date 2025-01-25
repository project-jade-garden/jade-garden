import { type Slots, createSlots } from "@spark-css/core/avatar";

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

const styledSlots = {
  base: "avatar",
  root: "avatar__root",
  image: "avatar__image",
  fallback: "avatar__fallback"
} satisfies Record<Slots, string | string[]>;

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
export const avatar = styledSlots;
