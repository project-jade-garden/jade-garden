import { Progress, useProgress } from "@ark-ui/react/progress";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.progressStyles, park: park.progressStyles, shadcn: shadcn.progressStyles },
    theme
  );
  const progress = useProgress();

  return (
    <>
      <button type="button" onClick={() => progress.setToMax()}>
        Set to MAX
      </button>

      <Progress.RootProvider value={progress}>
        <Progress.Label>Label</Progress.Label>
        <Progress.ValueText />
        <Progress.Circle>
          <Progress.CircleTrack />
          <Progress.CircleRange />
        </Progress.Circle>
      </Progress.RootProvider>
    </>
  );
};
