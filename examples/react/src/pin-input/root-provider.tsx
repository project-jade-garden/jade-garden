import { PinInput, usePinInput } from "@ark-ui/react/pin-input";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.pinInputStyledSlots, park: park.pinInputStyledSlots, shadcn: shadcn.pinInputStyledSlots },
    theme
  );
  const pinInput = usePinInput({ onValueComplete: (e) => alert(e.valueAsString) });

  return (
    <>
      <button type="button" onClick={() => pinInput.focus()}>
        Focus
      </button>

      <PinInput.RootProvider value={pinInput}>
        <PinInput.Label>Label</PinInput.Label>
        <PinInput.Control>
          {[0, 1, 2].map((id, index) => (
            <PinInput.Input key={id} index={index} />
          ))}
        </PinInput.Control>
        <PinInput.HiddenInput />
      </PinInput.RootProvider>
    </>
  );
};
