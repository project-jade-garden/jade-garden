import { NumberInput, useNumberInput } from "@ark-ui/react/number-input";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.numberInputStyledSlots,
      park: park.numberInputStyledSlots,
      shadcn: shadcn.numberInputStyledSlots
    },
    theme
  );
  const numberInput = useNumberInput();

  return (
    <>
      <button type="button" onClick={() => numberInput.focus()}>
        Focus
      </button>

      <NumberInput.RootProvider value={numberInput}>
        <NumberInput.Label>Label</NumberInput.Label>
        <NumberInput.Input />
        <NumberInput.Control>
          <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
          <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
        </NumberInput.Control>
      </NumberInput.RootProvider>
    </>
  );
};
