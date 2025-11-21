import { sva } from "jade-garden/sva";

export const avatarStyles = sva(
  {
    name: "avatar",
    slots: ["root", "image", "fallback"],
    base: {
      root: "rounded-full overflow-hidden shrink-0",
      image: "object-cover",
      fallback: [
        // Sizing
        "h-[inherit]",

        // Backgrounds
        "bg-muted",

        // Borders
        "rounded-full",
        "border",

        // Flexbox & Grid
        "center",

        // Typography
        "text-default",
        "font-semibold"
      ]
    },
    variants: {
      size: {
        xs: {
          root: "size-8",
          image: "size-8",
          fallback: "text-xs icon:size-4"
        },
        sm: {
          root: "size-9",
          image: "size-9",
          fallback: "text-sm icon:size-4"
        },
        md: {
          root: "size-10",
          image: "size-10",
          fallback: "text-md icon:size-5"
        },
        lg: {
          root: "size-11",
          image: "size-11",
          fallback: "text-lg icon:size-6"
        },
        xl: {
          root: "size-12",
          image: "size-12",
          fallback: "text-xl icon:size-7"
        },
        "2xl": {
          root: "size-16",
          image: "size-16",
          fallback: "text-2xl icon:size-8"
        }
      }
    },
    defaultVariants: {
      size: "md"
    }
  },
  {
    description: "An img element with fallback support.",
    name: "Avatar",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/avatar"
  }
);

export type * as AvatarStyles from "./types";
