import { cva } from "jade-garden/cva";

export const linkStyles = cva(
  {
    name: "link",
    base: [
      // Sizing
      "icon:size-[1em]",

      // Borders
      "border-b",
      "border-transparent",
      "disabled:hover:border-transparent",

      // Effects
      "disabled:opacity-75",

      // Interactivity
      "disabled:cursor-not-allowed",

      // Layout
      "inline-flex",

      // Flexbox & Grid
      "items-center",
      "gap-1",

      // Typography
      "font-medium",

      // Transitions & Animation
      "transition-colors"
    ],
    variants: {
      color: {
        primary: [
          // Borders
          "hover:border-primary",
          "focus-visible:outline-primary",

          // Typography
          "text-primary"
        ],
        secondary: [
          // Borders
          "hover:border-secondary",
          "focus-visible:outline-secondary",

          // Typography
          "text-secondary"
        ],
        tertiary: [
          // Borders
          "hover:border-tertiary",
          "focus-visible:outline-tertiary",

          // Typography
          "text-tertiary"
        ],
        success: [
          // Borders
          "hover:border-success",
          "focus-visible:outline-success",

          // Typography
          "text-success"
        ],
        info: [
          // Borders
          "hover:border-info",
          "focus-visible:outline-info",

          // Typography
          "text-info"
        ],
        warning: [
          // Borders
          "hover:border-warning",
          "focus-visible:outline-warning",

          // Typography
          "text-warning"
        ],
        error: [
          // Borders
          "hover:border-error",
          "focus-visible:outline-error",

          // Typography
          "text-error"
        ],
        surface: [
          // Borders
          "hover:border-surface",
          "focus-visible:outline-surface",

          // Typography
          "text-surface"
        ]
      }
    },
    defaultVariants: {
      color: "primary"
    }
  },
  {
    description: "Used for navigation between pages.",
    name: "Link",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/elements/link"
  }
);

export type * as LinkStyles from "./types";
