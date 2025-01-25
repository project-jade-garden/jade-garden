import { Tooltip, useTooltip } from "@ark-ui/react/tooltip";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.tooltip, park: park.tooltip, shadcn: shadcn.tooltip },
    theme
  );
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
