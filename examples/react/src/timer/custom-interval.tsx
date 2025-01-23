import { Timer } from "@ark-ui/react/timer";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const CustomInterval = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.timerStyledSlots, park: park.timerStyledSlots, shadcn: shadcn.timerStyledSlots },
    theme
  );

  return (
    <Timer.Root interval={500} targetMs={10 * 1000}>
      <Timer.Area>
        <Timer.Item type="seconds" />
        <Timer.Separator>.</Timer.Separator>
        <Timer.Item type="milliseconds" />
      </Timer.Area>
    </Timer.Root>
  );
};
