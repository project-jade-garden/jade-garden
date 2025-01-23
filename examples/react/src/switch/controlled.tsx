import { Switch } from "@ark-ui/react/switch";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const Controlled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.switchStyledSlots, park: park.switchStyledSlots, shadcn: shadcn.switchStyledSlots },
    theme
  );
  const [checked, setChecked] = useState(false);

  return (
    <Switch.Root checked={checked} onCheckedChange={(e) => setChecked(e.checked)}>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Label</Switch.Label>
      <Switch.HiddenInput />
    </Switch.Root>
  );
};
