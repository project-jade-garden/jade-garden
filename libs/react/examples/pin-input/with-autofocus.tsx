import { PinInput } from "@ark-ui/react/pin-input";
import { pinInputStyledSlots as minimal } from "@spark-css/theme-minimal";
import { pinInputStyledSlots as park } from "@spark-css/theme-park";
import { pinInputStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithAutofocus = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <PinInput.Root autoFocus>
      <PinInput.Label>Label</PinInput.Label>
      <PinInput.Control>
        <PinInput.Input index={0} />
        <PinInput.Input index={1} />
        <PinInput.Input index={2} />
      </PinInput.Control>
      <PinInput.HiddenInput />
    </PinInput.Root>
  );
};
