import { Field } from "@ark-ui/react/field";
import { Switch } from "@ark-ui/react/switch";
import { switchStyledSlots as minimal } from "@spark-css/theme-minimal";
import { switchStyledSlots as park } from "@spark-css/theme-park";
import { switchStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, props.theme);

  return (
    <Field.Root {...props}>
      <Switch.Root>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Label</Switch.Label>
        <Switch.HiddenInput />
      </Switch.Root>
      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
