import { cva } from "jade-garden/cva";

export const iconStyles = cva(
  {
    name: "icon",
    base: [
      // Layout
      "inline-block",

      // Flexbox & Grid
      "shrink-0",

      // Typography
      "text-current",
      "align-middle",
      "leading-[1em]"
    ],
    variants: {
      size: {
        xs: "size-3",
        sm: "size-4",
        md: "size-5",
        lg: "size-6",
        xl: "size-7",
        "2xl": "size-8"
      }
    },
    defaultVariants: {
      size: "md"
    }
  },
  {
    description: "A graphical representation of an action, file, or concept.",
    name: "Icon",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/elements/icon"
  }
);

export type * as IconStyles from "./types";
