import { Popover } from "@ark-ui/react/popover";
import { popoverStyledSlots as minimal } from "@spark-css/theme-minimal";
import { popoverStyledSlots as park } from "@spark-css/theme-park";
import { popoverStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const OnOpenChange = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Popover.Root onOpenChange={(open) => alert(open ? "opened" : "closed")}>
      <Popover.Trigger>
        Click Me <Popover.Indicator>{">"}</Popover.Indicator>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Title>Title</Popover.Title>
          <Popover.Description>Description</Popover.Description>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
};
