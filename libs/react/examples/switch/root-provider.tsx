import { Switch, useSwitch } from "@ark-ui/react/switch";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.switchStyledSlots, park: park.switchStyledSlots, shadcn: shadcn.switchStyledSlots },
    theme
  );
  const switchApi = useSwitch();

  return (
    <>
      <button type="button" onClick={() => switchApi.toggleChecked()}>
        Toggle
      </button>

      <Switch.RootProvider value={switchApi}>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Label</Switch.Label>
        <Switch.HiddenInput />
      </Switch.RootProvider>
    </>
  );
};
