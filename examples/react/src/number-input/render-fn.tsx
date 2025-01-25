import { NumberInput } from "@ark-ui/react/number-input";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RenderFn = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.numberInput,
      park: park.numberInput,
      shadcn: shadcn.numberInput
    },
    theme
  );

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
