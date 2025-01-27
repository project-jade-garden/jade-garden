import { NumberInput } from "@ark-ui/react/number-input";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const MinMax = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.numberInputStyles,
      park: park.numberInputStyles,
      shadcn: shadcn.numberInputStyles
    },
    theme
  );

  return (
    <NumberInput.Root min={0} max={10}>
      <NumberInput.Scrubber />
      <NumberInput.Label>Label</NumberInput.Label>
      <NumberInput.Input />
      <NumberInput.Control>
        <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
        <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
      </NumberInput.Control>
    </NumberInput.Root>
  );
};
