import { Popover } from "@ark-ui/react/popover";
import { popoverStyledSlots as minimal } from "@spark-css/theme-minimal";
import { popoverStyledSlots as park } from "@spark-css/theme-park";
import { popoverStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { useRef } from "react";
import { type Theme, getTheme } from "../utils";

export const WithAnchor = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Popover.Root initialFocusEl={() => ref.current}>
      <Popover.Trigger>Click Me</Popover.Trigger>

      <Popover.Anchor>
        <input placeholder="Type here..." />
      </Popover.Anchor>

      <Popover.Positioner>
        <Popover.Content>
          <Popover.Title>Title</Popover.Title>
          <Popover.Description>Description</Popover.Description>
          <Popover.CloseTrigger>Close</Popover.CloseTrigger>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
};
