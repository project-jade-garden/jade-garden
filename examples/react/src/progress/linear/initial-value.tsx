import { Progress } from "@ark-ui/react/progress";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../../utils";

export const InitialValue = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.progressStyles, park: park.progressStyles, shadcn: shadcn.progressStyles },
    theme
  );

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
