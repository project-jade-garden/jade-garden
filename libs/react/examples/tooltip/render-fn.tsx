import { Tooltip } from "@ark-ui/react/tooltip";
import { tooltipStyledSlots as minimal } from "@spark-css/theme-minimal";
import { tooltipStyledSlots as park } from "@spark-css/theme-park";
import { tooltipStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RenderFn = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Tooltip.Root>
      <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Context>
          {(tooltip) => <Tooltip.Content>This tooltip is open: {tooltip.open.toString()}</Tooltip.Content>}
        </Tooltip.Context>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
};
