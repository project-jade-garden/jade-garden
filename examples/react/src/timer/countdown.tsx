import { Timer } from "@ark-ui/react/timer";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Countdown = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.timerStyles, park: park.timerStyles, shadcn: shadcn.timerStyles },
    theme
  );

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
