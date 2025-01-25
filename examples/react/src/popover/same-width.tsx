import { Popover } from "@ark-ui/react/popover";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

const style: React.CSSProperties = {
  minWidth: "200px"
};

export const WithSameWidth = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.popover, park: park.popover, shadcn: shadcn.popover },
    theme
  );

  return (
    <Popover.Root positioning={{ sameWidth: true }}>
      <Popover.Trigger style={style}>Click Me</Popover.Trigger>
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
