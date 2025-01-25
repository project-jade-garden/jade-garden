import { Switch } from "@ark-ui/react/switch";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RenderProp = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.switchStyles, park: park.switchStyles, shadcn: shadcn.switchStyles },
    theme
  );

  return (
    <Switch.Root>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Context>
        {(context) => <Switch.Label>Feature is {context.checked ? "enabled" : "disabled"}</Switch.Label>}
      </Switch.Context>
      <Switch.HiddenInput />
    </Switch.Root>
  );
};
