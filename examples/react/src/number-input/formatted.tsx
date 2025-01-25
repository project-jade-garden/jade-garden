import { NumberInput } from "@ark-ui/react/number-input";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Formatted = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.numberInput,
      park: park.numberInput,
      shadcn: shadcn.numberInput
    },
    theme
  );

  return (
    <NumberInput.Root
      formatOptions={{
        style: "currency",
        currency: "USD"
      }}
    >
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
