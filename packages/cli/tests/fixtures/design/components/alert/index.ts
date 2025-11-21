import { sva } from "jade-garden/sva";

export const alertStyles = sva(
  {
    name: "alert",
    slots: ["root", "content", "description", "icon", "title"],
    base: {}
  },
  {
    description: "A callout to draw user's attention.",
    name: "Alert",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/alert"
  }
);

export type * as AlertStyles from "./types";
