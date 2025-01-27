import { Tooltip } from "@ark-ui/react/tooltip";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Positioning = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.tooltipStyles, park: park.tooltipStyles, shadcn: shadcn.tooltipStyles },
    theme
  );

  return (
    <Tooltip.Root
      positioning={{
        placement: "left-start",
        offset: { mainAxis: 12, crossAxis: 12 }
      }}
    >
      <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Content>I am a tooltip!</Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
};
