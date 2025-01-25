// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/hover-card.ts
import {
  type Slots,
  // createDocs,
  createSlots
} from "@spark-css/core/hover-card";

/**
 * **Hover Card**
 * @description A card that appears when a user hovers over an element.
 *
 * @returns
 * ```js
 * {
 *   base: "parkHoverCard",
 *   arrow: "parkHoverCard__arrow",
 *   arrowTip: "parkHoverCard__arrowTip",
 *   trigger: "parkHoverCard__trigger",
 *   positioner: "parkHoverCard__positioner",
 *   content: "parkHoverCard__content"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/hover-card#anatomy)
 */
export const hoverCardSlots = createSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// createDocs("anatomy", hoverCardSlots);

/**
 * **Hover Card**
 * @description A card that appears when a user hovers over an element.
 *
 * @example
 * ```css
 * .parkHoverCard { }
 *
 * .parkHoverCard__arrow { }
 *
 * .parkHoverCard__arrowTip {
 *   (@)apply border-t border-l;
 * }
 *
 * .parkHoverCard__trigger { }
 *
 * .parkHoverCard__positioner { }
 *
 * .parkHoverCard__content {
 *   (@)apply p-4 max-w-80 bg-bg-default rounded-l3 shadow-lg relative [&:is([open],_[data-open],_[data-state=open])]:animate-fade-in [&:is([closed],_[data-closed],_[data-state=closed])]:animate-[fadeOut_.25s_ease-out];
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/hover-card#anatomy)
 */
export const hoverCardStyledSlots = {
  base: "parkHoverCard",
  arrow: "parkHoverCard__arrow",
  arrowTip: [
    "parkHoverCard__arrowTip",

    // Borders
    "border-t",
    "border-l"
  ],
  trigger: "parkHoverCard__trigger",
  positioner: "parkHoverCard__positioner",
  content: [
    "parkHoverCard__content",

    // Spacing
    "p-4",

    // Sizing
    "max-w-80",

    // Backgrounds
    "bg-bg-default",

    // Borders
    "rounded-l3",

    // Effects
    "shadow-lg",

    // Layout
    "relative",

    // Transitions & Animation
    "[&:is([open],_[data-open],_[data-state=open])]:animate-fade-in",
    "[&:is([closed],_[data-closed],_[data-state=closed])]:animate-[fadeOut_.25s_ease-out]"
  ]
} as const satisfies Record<Slots, string | string[]>;

// * Uncomment after styling slots
// createDocs("styled", hoverCardStyledSlots);
