import { NumberInput } from "@ark-ui/react/number-input";
import { numberInputStyledSlots as minimal } from "@spark-css/theme-minimal";
import { numberInputStyledSlots as park } from "@spark-css/theme-park";
import { numberInputStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RenderFn = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <NumberInput.Root>
      <NumberInput.Scrubber />
      <NumberInput.Context>
        {(numberInput) => <NumberInput.Label>Label {numberInput.valueAsNumber}</NumberInput.Label>}
      </NumberInput.Context>
      <NumberInput.Input />
      <NumberInput.Control>
        <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
        <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
      </NumberInput.Control>
    </NumberInput.Root>
  );
};
