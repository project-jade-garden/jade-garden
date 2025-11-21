import { sva } from "jade-garden/sva";

export const accordionStyles = sva(
  {
    name: "accordion",
    slots: ["root", "item", "itemTrigger", "itemContent", "itemIndicator"],
    base: {
      root: "w-full divide-y",
      item: "border-accented",
      itemTrigger: [
        // Spacing
        "py-4",

        // Sizing
        "w-full",

        // Interactivity
        "cursor-pointer",
        "disabled:cursor-not-allowed",

        // Flexbox & Grid
        "h-stack-3",
        "items-center",
        "justify-between",

        // Typography
        "text-default",
        "disabled:text-dimmed",
        "text-left",
        "text-lg",
        "font-semibold"
      ],
      itemContent: [
        // Spacing
        "pb-6",
        "pr-8",
        "closed:pb-0",

        // Typography
        "text-muted",

        // Layout
        "overflow-hidden",

        // Transitions & Animation
        "transition-[padding-bottom]",
        "duration-200",
        "ease-in",
        "open:animate-collapse-in",
        "closed:animate-collapse-out"
      ],
      itemIndicator: [
        // Typography
        "text-muted",

        // Transforms
        "origin-center",
        "open:-rotate-180",

        // Transitions & Animation
        "transition-[rotate]",
        "duration-200",
        "ease-in"
      ]
    }
  },
  {
    description: "A stacked set of collapsible panels.",
    name: "Accordion",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/accordion"
  }
);

export type * as AccordionStyles from "./types";
