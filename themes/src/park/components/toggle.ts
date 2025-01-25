// * https://github.com/chakra-ui/ark/tree/main/website/src/demos/toggle.demo.tsx
import {
  type Slots,
  // createDocs,
  createSlots
} from "@spark-css/core/toggle";

/**
 * **Toggle**
 * @description A two-state button that can be toggled on or off.
 *
 * @returns
 * ```js
 * {
 *   base: "parkToggle",
 *   root: "parkToggle__root",
 *   indicator: "parkToggle__indicator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toggle#anatomy)
 */
export const toggleSlots = createSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// createDocs("anatomy", toggleSlots);

/**
 * **Toggle**
 * @description A two-state button that can be toggled on or off.
 *
 * @example
 * ```css
 * .parkToggle { }
 *
 * .parkToggle__root { }
 *
 * .parkToggle__indicator {
 *   (@)apply contents;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toggle#anatomy)
 */
export const toggleStyledSlots = {
  base: "parkToggle",
  root: "parkToggle__root", // TODO: Determine if 'button' styles should be created: https://github.com/cschroeter/park-ui/blob/main/packages/panda/src/theme/recipes/button.ts
  indicator: [
    "parkToggle__indicator",

    // Layout
    "contents"
  ]
} as const satisfies Record<Slots, string | string[]>;

// * Uncomment after styling slots
// createDocs("styled", toggleStyledSlots);
