// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/accordion.ts
import { type Slots, createSlots } from "@spark-css/core/accordion";

/**
 * **Accordion**
 * @description A collapsible component for displaying content in a vertical stack.
 *
 * @returns
 * ```js
 * {
 *   base: "parkAccordion",
 *   root: "parkAccordion__root",
 *   item: "parkAccordion__item",
 *   itemTrigger: "parkAccordion__itemTrigger",
 *   itemContent: "parkAccordion__itemContent",
 *   itemIndicator: "parkAccordion__itemIndicator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/accordion#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });

/**
 * @typedef { import("@spark-css/core/accordion").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: [
    slots.root,

    // Sizing
    "w-full",

    // Borders
    "border-y",
    "[&_>_:not([hidden])_~_:not([hidden])]:border-t",
    "[&_>_:not([hidden])_~_:not([hidden])]:border-b-0"
  ],
  item: slots.item,
  itemTrigger: [
    slots.itemTrigger,

    // Sizing
    "w-full",

    // Interactivity
    "cursor-pointer",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed",

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-3",
    "items-center",
    "justify-between",

    // Typography
    "text-fg-default",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled",
    "text-left",
    "text-lg",
    "font-semibold"
  ],
  itemContent: [
    slots.itemContent,

    // Typography
    "text-fg-muted",

    // Layout
    "overflow-hidden",

    // Transitions & Animation
    "transition-[padding-bottom]",
    "duration-200",
    "ease-[--easings-default]",
    "[&:is([open],_[data-open],_[data-state=open])]:animate-[--animations-collapse-in]",
    "[&:is([closed],_[data-closed],_[data-state=closed])]:animate-[--animations-collapse-out]"
  ],
  itemIndicator: [
    slots.itemIndicator,

    // Typography
    "text-fg-muted",

    // Transforms
    "origin-center",
    "[&:is([open],_[data-open],_[data-state=open])]:-rotate-180",

    // Transitions & Animation
    "transition-[transform]",
    "duration-200",
    "ease-[--easings-default]"
  ]
} satisfies Record<Slots, string | string[]>;

/**
 * **Accordion**
 * @description A collapsible component for displaying content in a vertical stack.
 *
 * @example
 * ```css
 * .parkAccordion { }
 *
 * .parkAccordion__root {
 *   (@)apply w-full border-y [&_>_:not([hidden])_~_:not([hidden])]:border-t [&_>_:not([hidden])_~_:not([hidden])]:border-b-0;
 * }
 *
 * .parkAccordion__item { }
 *
 * .parkAccordion__itemTrigger {
 *   (@)apply w-full cursor-pointer [&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed flex gap-3 items-center justify-between text-fg-default [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled text-left text-lg font-semibold;
 * }
 *
 * .parkAccordion__itemContent {
 *   (@)apply text-fg-muted overflow-hidden transition-[padding-bottom] duration-200 ease-[--easings-default] [&:is([open],_[data-open],_[data-state=open])]:animate-[--animations-collapse-in] [&:is([closed],_[data-closed],_[data-state=closed])]:animate-[--animations-collapse-out];
 * }
 *
 * .parkAccordion__itemIndicator {
 *   (@)apply text-fg-muted origin-center [&:is([open],_[data-open],_[data-state=open])]:-rotate-180 transition-[transform] duration-200 ease-[--easings-default];
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/accordion#anatomy)
 */
export const accordionStyles = styledSlots;
