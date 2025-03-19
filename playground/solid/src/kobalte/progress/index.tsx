import { Progress } from "@kobalte/core/progress";

export const Basic = () => {
  return (
    <Progress value={80} class="progress">
      <div class="progress__label-container">
        <Progress.Label class="progress__label">Loading...</Progress.Label>
        <Progress.ValueLabel class="progress__value-label" />
      </div>
      <Progress.Track class="progress__track">
        <Progress.Fill class="progress__fill" />
      </Progress.Track>
    </Progress>
  );
};
