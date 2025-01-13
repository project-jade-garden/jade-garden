import { Timer } from "@ark-ui/react/timer";
import { timerStyledSlots as minimal } from "@spark-css/theme-minimal";
import { timerStyledSlots as park } from "@spark-css/theme-park";
import { timerStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const CustomInterval = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

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
