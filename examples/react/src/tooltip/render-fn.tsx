import { Tooltip } from "@ark-ui/react/tooltip";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RenderFn = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal: minimal.tooltip, park: park.tooltip, shadcn: shadcn.tooltip }, theme);

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
