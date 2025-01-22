import {
  type AvatarSlots,
  // createAvatarDocs,
  createAvatarSlots
} from "@spark-css/core";

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
export const avatarSlots = createAvatarSlots({});

// * Uncomment before styling slots
// createAvatarDocs("anatomy", avatarSlots);

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
} as const satisfies Record<AvatarSlots, string | string[]>;

// * Uncomment after styling slots
// createAvatarDocs("styled", avatarStyledSlots);
