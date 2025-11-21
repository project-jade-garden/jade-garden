import { sva } from "jade-garden/sva";

export const checkboxStyles = sva(
  {
    name: "checkbox",
    slots: ["root", "label", "control", "indicator", "group"],
    base: {
      root: "flex items-center",
      label: "text-default font-medium",
      control: [
        // Borders
        "border",
        "rounded-xs",
        "border-accented",
        "focus-visible:outline-2",
        "focus-visible:outline-border-outline",
        "checked:focus-visible:outline-default",

        // Interactivity
        "cursor-pointer",

        // Flexbox & Grid
        "center",

        // Typography
        "text-white",

        // Transitions & Animation
        "transition-[border-color,background]",
        "duration-200",
        "ease-in"
      ]
    },
    variants: {
      color: {
        primary: {
          control: [
            // Backgrounds
            "checked:bg-primary",
            "indeterminate:bg-primary",

            // Borders
            "checked:border-primary",
            "indeterminate:primary"
          ]
        },
        secondary: {
          control: [
            // Backgrounds
            "checked:bg-secondary",
            "indeterminate:bg-secondary",

            // Borders
            "checked:border-secondary",
            "indeterminate:secondary"
          ]
        },
        tertiary: {
          control: [
            // Backgrounds
            "checked:bg-tertiary",
            "indeterminate:bg-tertiary",

            // Borders
            "checked:border-tertiary",
            "indeterminate:tertiary"
          ]
        },
        success: {
          control: [
            // Backgrounds
            "checked:bg-success",
            "indeterminate:bg-success",

            // Borders
            "checked:border-success",
            "indeterminate:success"
          ]
        },
        info: {
          control: [
            // Backgrounds
            "checked:bg-info",
            "indeterminate:bg-info",

            // Borders
            "checked:border-info",
            "indeterminate:info"
          ]
        },
        warning: {
          control: [
            // Backgrounds
            "checked:bg-warning",
            "indeterminate:bg-warning",

            // Borders
            "checked:border-warning",
            "indeterminate:warning"
          ]
        },
        error: {
          control: [
            // Backgrounds
            "checked:bg-error",
            "indeterminate:bg-error",

            // Borders
            "checked:border-error",
            "indeterminate:error"
          ]
        },
        surface: {
          control: [
            // Backgrounds
            "checked:bg-surface",
            "indeterminate:bg-surface",

            // Borders
            "checked:border-surface",
            "indeterminate:surface"
          ]
        }
      },
      size: {
        sm: {
          root: "gap-2",
          control: "size-4 icon:size-3",
          label: "text-sm"
        },
        md: {
          root: "gap-3",
          control: "size-5 icon:size-3.5",
          label: "text-md"
        },
        lg: {
          root: "gap-4",
          control: "size-6 icon:size-4",
          label: "text-lg"
        }
      }
    },
    defaultVariants: {
      color: "surface",
      size: "md"
    }
  },
  {
    description: "An input element to toggle between checked and unchecked states.",
    name: "Checkbox",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/checkbox"
  }
);

export type * as CheckboxStyles from "./types";
