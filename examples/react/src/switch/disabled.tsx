import { Switch } from "@ark-ui/react/switch";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Disabled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.switchStyles, park: park.switchStyles, shadcn: shadcn.switchStyles },
    theme
  );

  return (
    <Switch.Root disabled>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Label</Switch.Label>
      <Switch.HiddenInput />
    </Switch.Root>
  );
};
