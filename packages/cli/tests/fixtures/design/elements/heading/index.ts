import { cva } from "jade-garden/cva";

export const headingStyles = cva(
  {
    name: "heading",
    base: "text-highlighted font-bold",
    variants: {
      variant: {
        h1: "text-7xl",
        h2: "text-6xl",
        h3: "text-4xl",
        h4: "text-3xl",
        h5: "text-2xl",
        h6: "text-lg"
      }
    },
    defaultVariants: {
      variant: "h1"
    }
  },
  {
    description: "For headings and subheadings.",
    name: "Heading",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/elements/heading"
  }
);

export type * as HeadingStyles from "./types";
