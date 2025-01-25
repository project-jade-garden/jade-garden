// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/avatar.ts
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
 *   base: "parkAvatar",
 *   root: "parkAvatar__root",
 *   image: "parkAvatar__image",
 *   fallback: "parkAvatar__fallback"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/avatar#anatomy)
 */
export const avatarSlots = createSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// createDocs("anatomy", avatarSlots);

/**
 * **Avatar**
 * @description A graphical representation of the user, often used in profile sections.
 *
 * @example
 * ```css
 * .parkAvatar { }
 *
 * .parkAvatar__root {
 *   (@)apply rounded-full overflow-hidden shrink-0;
 * }
 *
 * .parkAvatar__image {
 *   (@)apply object-cover;
 * }
 *
 * .parkAvatar__fallback {
 *   (@)apply [height:inherit] bg-bg-subtle rounded-full border flex [&:is([hidden])]:hidden items-center justify-center text-fg-default font-semibold;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/avatar#anatomy)
 */
export const avatarStyledSlots = {
  base: "parkAvatar",
  root: [
    "parkAvatar__root",

    // Borders
    "rounded-full",

    // Layout
    "overflow-hidden",

    // Flexbox & Grid
    "shrink-0"
  ],
  image: [
    "parkAvatar__image",

    // Layout
    "object-cover"
  ],
  fallback: [
    "parkAvatar__fallback",

    // Sizing
    "[height:inherit]",

    // Backgrounds
    "bg-bg-subtle",

    // Borders
    "rounded-full",
    "border",

    // Layout
    "flex",
    "[&:is([hidden])]:hidden",

    // Flexbox & Grid
    "items-center",
    "justify-center",

    // Typography
    "text-fg-default",
    "font-semibold"
  ]
} as const satisfies Record<Slots, string | string[]>;

// * Uncomment after styling slots
// createDocs("styled", avatarStyledSlots);
