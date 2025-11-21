import { cva } from "jade-garden/cva";

export const skeletonStyles = cva(
  {
    name: "skeleton",
    base: "animate-pulse bg-surface-400 dark:bg-surface-700",
    variants: {
      speed: {
        fastest: "[animation-duration:1250ms]",
        faster: "[animation-duration:1300ms]",
        fast: "[animation-duration:1350ms]",
        normal: "[animation-duration:1400ms]",
        slow: "[animation-duration:1600ms]",
        slower: "[animation-duration:1800ms]",
        slowest: "[animation-duration:2000ms]"
      }
    },
    defaultVariants: {
      speed: "slowest"
    }
  },
  {
    description: "A placeholder to show while content is loading.",
    name: "Skeleton",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/animations/skeleton"
  }
);

export type * as SkeletonStyles from "./types";
