import { Timer, useTimer } from "@ark-ui/react/timer";
import { timerStyledSlots as minimal } from "@spark-css/theme-minimal";
import { timerStyledSlots as park } from "@spark-css/theme-park";
import { timerStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
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
