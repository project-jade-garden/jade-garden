import { cva } from "jade-garden/cva";

export const spinnerStyles = cva(
  {
    name: "spinner",
    base: [
      // Borders
      "border-2",
      "border-b-transparent",
      "border-l-transparent",
      "rounded-full",

      // Layout
      "inline-block",

      // Transitions & Animation
      "animate-spin"
    ],
    variants: {
      size: {
        xs: "size-3",
        sm: "size-4",
        md: "size-6",
        lg: "size-8",
        xl: "size-12"
      },
      speed: {
        fastest: "[animation-duration:250ms]",
        faster: "[animation-duration:300ms]",
        fast: "[animation-duration:400ms]",
        normal: "[animation-duration:500ms]",
        slow: "[animation-duration:550ms]",
        slower: "[animation-duration:600ms]",
        slowest: "[animation-duration:700ms]"
      }
    },
    defaultVariants: {
      size: "md",
      speed: "slowest"
    }
  },
  {
    description: "A placeholder to show while content is loading.",
    name: "Spinner",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/animations/spinner"
  }
);

export type * as SpinnerStyles from "./types";
