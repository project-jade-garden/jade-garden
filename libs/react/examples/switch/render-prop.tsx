import { Switch } from "@ark-ui/react/switch";
import { switchStyledSlots as minimal } from "@spark-css/theme-minimal";
import { switchStyledSlots as park } from "@spark-css/theme-park";
import { switchStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RenderProp = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

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
