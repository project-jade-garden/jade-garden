import { Progress } from "@ark-ui/react/progress";

export const Basic = () => {
  return (
    <Progress.Root>
      <Progress.Label>Label</Progress.Label>
      <Progress.ValueText />
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  );
};
