import { PinInput } from "@ark-ui/react/pin-input";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Blurred = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal: minimal.pinInput, park: park.pinInput, shadcn: shadcn.pinInput }, theme);

  return (
    <PinInput.Root blurOnComplete>
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
