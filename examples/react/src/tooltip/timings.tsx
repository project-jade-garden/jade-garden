import { Tooltip } from "@ark-ui/react/tooltip";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Timings = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal: minimal.tooltip, park: park.tooltip, shadcn: shadcn.tooltip }, theme);

  return (
    <Tooltip.Root closeDelay={0} openDelay={0}>
      <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Content>I am a tooltip!</Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
};
