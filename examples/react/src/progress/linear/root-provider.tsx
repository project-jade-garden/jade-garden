import { Progress, useProgress } from "@ark-ui/react/progress";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../../utils";

export const Basic = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.progress, park: park.progress, shadcn: shadcn.progress },
    theme
  );
  const progress = useProgress();

  return (
    <>
      <button type="button" onClick={() => progress.setToMax()}>
        Set to MAX
      </button>

      <Progress.Root>
        <Progress.Label>Label</Progress.Label>
        <Progress.ValueText />
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    </>
  );
};
