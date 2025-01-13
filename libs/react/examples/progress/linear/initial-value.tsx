import { Progress } from "@ark-ui/react/progress";
import { progressStyledSlots as minimal } from "@spark-css/theme-minimal";
import { progressStyledSlots as park } from "@spark-css/theme-park";
import { progressStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../../utils";

export const InitialValue = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Progress.Root defaultValue={70}>
      <Progress.Label>Label</Progress.Label>
      <Progress.ValueText />
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  );
};
