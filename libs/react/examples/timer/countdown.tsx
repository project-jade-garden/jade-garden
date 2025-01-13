import { Timer } from "@ark-ui/react/timer";
import { timerStyledSlots as minimal } from "@spark-css/theme-minimal";
import { timerStyledSlots as park } from "@spark-css/theme-park";
import { timerStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Countdown = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Timer.Root autoStart countdown startMs={60 * 60 * 500}>
      <Timer.Area>
        <Timer.Item type="days" />
        <Timer.Separator>:</Timer.Separator>
        <Timer.Item type="hours" />
        <Timer.Separator>:</Timer.Separator>
        <Timer.Item type="minutes" />
        <Timer.Separator>:</Timer.Separator>
        <Timer.Item type="seconds" />
      </Timer.Area>
    </Timer.Root>
  );
};
