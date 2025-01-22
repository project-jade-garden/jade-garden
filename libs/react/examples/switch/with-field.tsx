import { Field } from "@ark-ui/react/field";
import { Switch } from "@ark-ui/react/switch";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.switchStyledSlots, park: park.switchStyledSlots, shadcn: shadcn.switchStyledSlots },
    props.theme
  );

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
