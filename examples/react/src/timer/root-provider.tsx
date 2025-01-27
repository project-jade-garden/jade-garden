import { Timer, useTimer } from "@ark-ui/react/timer";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.timerStyles, park: park.timerStyles, shadcn: shadcn.timerStyles },
    theme
  );
  const timer = useTimer({ targetMs: 60 * 60 * 1000 });

  return (
    <>
      <button type="button" onClick={() => timer.pause()}>
        Pause
      </button>

      <Timer.RootProvider value={timer}>
        <Timer.Area>
          <Timer.Item type="days" />
          <Timer.Separator>:</Timer.Separator>
          <Timer.Item type="hours" />
          <Timer.Separator>:</Timer.Separator>
          <Timer.Item type="minutes" />
          <Timer.Separator>:</Timer.Separator>
          <Timer.Item type="seconds" />
        </Timer.Area>
        <Timer.Control>
          <Timer.ActionTrigger action="start">Play</Timer.ActionTrigger>
          <Timer.ActionTrigger action="resume">Resume</Timer.ActionTrigger>
          <Timer.ActionTrigger action="pause">Pause</Timer.ActionTrigger>
        </Timer.Control>
      </Timer.RootProvider>
    </>
  );
};
