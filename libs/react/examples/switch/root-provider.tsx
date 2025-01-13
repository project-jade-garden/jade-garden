import { Switch, useSwitch } from "@ark-ui/react/switch";
import { switchStyledSlots as minimal } from "@spark-css/theme-minimal";
import { switchStyledSlots as park } from "@spark-css/theme-park";
import { switchStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
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
