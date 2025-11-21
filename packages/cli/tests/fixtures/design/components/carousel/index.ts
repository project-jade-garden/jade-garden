import { sva } from "jade-garden/sva";

export const carouselStyles = sva(
  {
    name: "carousel",
    slots: [
      "root",
      "itemGroup",
      "item",
      "control",
      "nextTrigger",
      "prevTrigger",
      "indicatorGroup",
      "indicator",
      "autoplayTrigger"
    ],
    base: {
      root: [
        // Spacing
        "p-4",
        "md:p-6",

        // Borders
        "rounded-lg",
        "border",
        "border-muted",

        // Layout
        "relative"
      ],
      control: [
        // Backgrounds
        "bg-default",

        // Borders
        "rounded-sm",

        // Layout
        "absolute",
        "bottom-8",
        "md:bottom-10",
        "left-1/2",
        "flex",

        // Flexbox & Grid
        "items-center",

        // Transforms
        "-translate-x-1/2"
      ],
      indicatorGroup: "flex",
      indicator: [
        // Backgrounds
        "bg-elevated",
        "current:bg-primary",

        // Borders
        "rounded-full",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",
        "focus-visible:outline-border-outline",

        // Interactivity
        "cursor-pointer"
      ]
    },
    variants: {
      size: {
        sm: {
          control: "gap-1 p-1",
          indicatorGroup: "gap-2",
          indicator: "size-2"
        },
        md: {
          control: "gap-2 p-2.5",
          indicatorGroup: "gap-3",
          indicator: "size-2.5"
        }
      }
    },
    defaultVariants: {
      size: "md"
    }
  },
  {
    description: "A slideshow component that cycles through elements.",
    name: "Carousel",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/carousel"
  }
);

export type * as CarouselStyles from "./types";
