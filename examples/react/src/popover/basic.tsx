import { Popover } from "@ark-ui/react/popover";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Basic = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.popoverStyles, park: park.popoverStyles, shadcn: shadcn.popoverStyles },
    theme
  );

  return (
    <Popover.Root>
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
