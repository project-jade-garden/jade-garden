import { Tooltip } from "@ark-ui/react/tooltip";
import { tooltipStyledSlots as minimal } from "@spark-css/theme-minimal";
import { tooltipStyledSlots as park } from "@spark-css/theme-park";
import { tooltipStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Positioning = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

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
