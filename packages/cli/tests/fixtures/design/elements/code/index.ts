import { cva } from "jade-garden/cva";

export const codeStyles = cva(
  {
    name: "code",
    base: [
      // Borders
      "border",
      "rounded-sm",

      // Layout
      "inline-flex",

      // Flexbox & Grid
      "items-center",

      // Typography
      "font-medium!",
      "font-mono",
      "whitespace-pre"
    ],
    variants: {
      color: {
        primary: "border-primary/25 bg-primary/10 text-primary",
        secondary: "border-secondary/25 bg-secondary/10 text-secondary",
        tertiary: "border-tertiary/25 bg-tertiary/10 text-tertiary",
        success: "border-success/25 bg-success/10 text-success",
        info: "border-info/25 bg-info/10 text-info",
        warning: "border-warning/25 bg-warning/10 text-warning",
        error: "border-error/25 bg-error/10 text-error",
        surface: "border-muted text-highlighted bg-muted"
      },
      size: {
        sm: [
          // Spacing
          "px-0.5",

          // Sizing
          "min-h-5",

          // Typography
          "text-sm"
        ],
        md: [
          // Spacing
          "px-1",
          "py-px",

          // Sizing
          "min-h-6",

          // Typography
          "text-sm"
        ],
        lg: [
          // Spacing
          "px-1.5",
          "py-px",

          // Sizing
          "min-h-7",

          // Typography
          "text-md"
        ]
      }
    },
    defaultVariants: {
      color: "primary",
      size: "md"
    }
  },
  {
    description: "Display inline code snippets.",
    name: "Code",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/elements/code"
  }
);

export type * as CodeStyles from "./types";
