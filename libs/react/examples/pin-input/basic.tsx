import { PinInput } from "@ark-ui/react/pin-input";
import { pinInputStyledSlots as minimal } from "@spark-css/theme-minimal";
import { pinInputStyledSlots as park } from "@spark-css/theme-park";
import { pinInputStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Basic = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <PinInput.Root onValueComplete={(e) => alert(e.valueAsString)}>
      <PinInput.Label>Label</PinInput.Label>
      <PinInput.Control>
        {[0, 1, 2].map((id, index) => (
          <PinInput.Input key={id} index={index} />
        ))}
      </PinInput.Control>
      <PinInput.HiddenInput />
    </PinInput.Root>
  );
};
