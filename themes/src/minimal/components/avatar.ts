import {
  type Slots,
  // createDocs,
  createSlots
} from "@spark-css/core/avatar";

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
export const avatarSlots = createSlots({});

// * Uncomment before styling slots
// createDocs("anatomy", avatarSlots);

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
export const avatarStyledSlots = {
  base: "avatar",
  root: "avatar__root",
  image: "avatar__image",
  fallback: "avatar__fallback"
} as const satisfies Record<Slots, string | string[]>;

// * Uncomment after styling slots
// createDocs("styled", avatarStyledSlots);
