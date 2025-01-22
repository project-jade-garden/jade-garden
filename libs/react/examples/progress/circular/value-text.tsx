import { Progress } from "@ark-ui/react/progress";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../../utils";

export const ValueText = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.progressStyledSlots, park: park.progressStyledSlots, shadcn: shadcn.progressStyledSlots },
    theme
  );

  return (
    <Progress.Root
      translations={{
        value({ value, max }) {
          if (value === null) return "Loading...";
          return `${value} of ${max} items loaded`;
        }
      }}
    >
      <Progress.Label>Label</Progress.Label>
      <Progress.ValueText />
      <Progress.Circle>
        <Progress.CircleTrack />
        <Progress.CircleRange />
      </Progress.Circle>
    </Progress.Root>
  );
};
