import { Timer } from "@ark-ui/react/timer";
import { timerStyledSlots as minimal } from "@spark-css/theme-minimal";
import { timerStyledSlots as park } from "@spark-css/theme-park";
import { timerStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Events = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Timer.Root
      targetMs={5 * 1000}
      onComplete={() => console.log("Timer completed")}
      onTick={(details) => console.log("Tick:", details.formattedTime)}
    >
      <Timer.Item type="seconds" />
    </Timer.Root>
  );
};
