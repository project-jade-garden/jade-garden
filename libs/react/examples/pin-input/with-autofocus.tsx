import { PinInput } from "@ark-ui/react/pin-input";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithAutofocus = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.pinInputStyledSlots, park: park.pinInputStyledSlots, shadcn: shadcn.pinInputStyledSlots },
    theme
  );

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
