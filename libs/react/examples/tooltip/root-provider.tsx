import { Tooltip, useTooltip } from "@ark-ui/react/tooltip";
import { tooltipStyledSlots as minimal } from "@spark-css/theme-minimal";
import { tooltipStyledSlots as park } from "@spark-css/theme-park";
import { tooltipStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const tooltip = useTooltip();

  return (
    <>
      <button type="button" onClick={() => tooltip.setOpen(true)}>
        Open
      </button>

      <Tooltip.RootProvider value={tooltip}>
        <Tooltip.Trigger disabled>Hover Me</Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>I am a tooltip!</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.RootProvider>
    </>
  );
};
