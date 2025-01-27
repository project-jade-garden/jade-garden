import { Checkbox } from "@ark-ui/react/checkbox";
import { Field } from "@ark-ui/react/field";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { CheckIcon, MinusIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const checkbox = getTheme(
    { minimal: minimal.checkboxStyles, park: park.checkboxStyles, shadcn: shadcn.checkboxStyles },
    props.theme
  );
  const field = getTheme(
    { minimal: minimal.fieldStyles, park: park.fieldStyles, shadcn: shadcn.fieldStyles },
    props.theme
  );

  return (
    <Field.Root {...props} className={clsx(field.root)}>
      <Checkbox.Root className={clsx(checkbox.root)}>
        <Checkbox.Label className={clsx(checkbox.label)}>Label</Checkbox.Label>
        <Checkbox.Control className={clsx(checkbox.control)}>
          <Checkbox.Indicator className={clsx(checkbox.indicator)}>
            <CheckIcon />
          </Checkbox.Indicator>
          <Checkbox.Indicator indeterminate className={clsx(checkbox.indicator)}>
            <MinusIcon />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.HiddenInput />
      </Checkbox.Root>
      <Field.HelperText className={clsx(field.helperText)}>Additional Info</Field.HelperText>
      <Field.ErrorText className={clsx(field.errorText)}>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
