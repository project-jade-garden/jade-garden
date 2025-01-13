import { Popover } from "@ark-ui/react/popover";
import { Portal } from "@ark-ui/react/portal";
import { popoverStyledSlots as minimal } from "@spark-css/theme-minimal";
import { popoverStyledSlots as park } from "@spark-css/theme-park";
import { popoverStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

const style: React.CSSProperties = {
  width: "200px"
};

export const WithNestedPopover = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Popover.Root>
      <Popover.Trigger>Click Me</Popover.Trigger>
      {/* Note: Only the root popover should use a portal */}
      <Portal>
        <Popover.Positioner>
          <Popover.Content style={style}>
            <Popover.CloseTrigger>Close</Popover.CloseTrigger>
            <Popover.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Popover.Description>
            {/* Nested Popover */}
            <Popover.Root positioning={{ placement: "right" }}>
              <Popover.Trigger>Open Nested Dialog</Popover.Trigger>
              <Popover.Positioner>
                <Popover.Content>
                  <Popover.Title>Title</Popover.Title>
                  <Popover.Description>Description</Popover.Description>
                </Popover.Content>
              </Popover.Positioner>
            </Popover.Root>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
};
