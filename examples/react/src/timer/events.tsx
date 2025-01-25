import { Timer } from "@ark-ui/react/timer";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Events = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.timer, park: park.timer, shadcn: shadcn.timer },
    theme
  );

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
