import { Checkbox } from "@ark-ui/react/checkbox";
import { Field } from "@ark-ui/react/field";
import { Fieldset } from "@ark-ui/react/fieldset";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithCheckbox = (props: Fieldset.RootProps & { theme: Theme }) => {
  const checkbox = getTheme(
    { minimal: minimal.checkbox, park: park.checkbox, shadcn: shadcn.checkbox },
    props.theme
  );
  const fieldset = getTheme(
    { minimal: minimal.fieldset, park: park.fieldset, shadcn: shadcn.fieldset },
    props.theme
  );
  const field = getTheme(
    { minimal: minimal.field, park: park.field, shadcn: shadcn.field },
    props.theme
  );

  return (
    <Fieldset.Root {...props} className={clsx(fieldset.root)}>
      <Fieldset.Legend className={clsx(fieldset.legend)}>Legend</Fieldset.Legend>
      <Fieldset.HelperText className={clsx(fieldset.helperText)}>Helper text</Fieldset.HelperText>
      <Fieldset.ErrorText className={clsx(fieldset.errorText)}>Error text</Fieldset.ErrorText>
      <Field.Root className={clsx(field.root)}>
        <Checkbox.Root className={clsx(checkbox.root)}>
          <Checkbox.Label className={clsx(checkbox.label)}>Label</Checkbox.Label>
          <Checkbox.Control className={clsx(checkbox.control)}>
            <Checkbox.Indicator className={clsx(checkbox.indicator)}>✔️</Checkbox.Indicator>
          </Checkbox.Control>
          <Checkbox.HiddenInput />
        </Checkbox.Root>
        <Field.HelperText className={clsx(field.helperText)}>Field Helper Text</Field.HelperText>
        <Field.ErrorText className={clsx(field.errorText)}>Field Error Text</Field.ErrorText>
      </Field.Root>
    </Fieldset.Root>
  );
};
