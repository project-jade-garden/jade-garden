import { Popover } from "@ark-ui/react/popover";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RenderFn = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.popoverStyles, park: park.popoverStyles, shadcn: shadcn.popoverStyles },
    theme
  );

  return (
    <Popover.Root>
      <Popover.Trigger>Click Me</Popover.Trigger>
      <Popover.Positioner>
        <Popover.Context>
          {(popover) => (
            <Popover.Content>
              <Popover.Title>Title</Popover.Title>
              <Popover.Description>Description: {popover.open.toString()}</Popover.Description>
              <Popover.CloseTrigger>Close</Popover.CloseTrigger>
            </Popover.Content>
          )}
        </Popover.Context>
      </Popover.Positioner>
    </Popover.Root>
  );
};
