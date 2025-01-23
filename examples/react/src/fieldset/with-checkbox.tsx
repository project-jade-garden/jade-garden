import { Checkbox } from "@ark-ui/react/checkbox";
import { Field } from "@ark-ui/react/field";
import { Fieldset } from "@ark-ui/react/fieldset";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithCheckbox = (props: Fieldset.RootProps & { theme: Theme }) => {
  const checkboxStyledSlots = getTheme(
    { minimal: minimal.checkboxStyledSlots, park: park.checkboxStyledSlots, shadcn: shadcn.checkboxStyledSlots },
    props.theme
  );
  const fieldsetStyledSlots = getTheme(
    { minimal: minimal.fieldsetStyledSlots, park: park.fieldsetStyledSlots, shadcn: shadcn.fieldsetStyledSlots },
    props.theme
  );
  const fieldStyledSlots = getTheme(
    { minimal: minimal.fieldStyledSlots, park: park.fieldStyledSlots, shadcn: shadcn.fieldStyledSlots },
    props.theme
  );

  return (
    <Fieldset.Root {...props} className={clsx(fieldsetStyledSlots.root)}>
      <Fieldset.Legend className={clsx(fieldsetStyledSlots.legend)}>Legend</Fieldset.Legend>
      <Fieldset.HelperText className={clsx(fieldsetStyledSlots.helperText)}>Helper text</Fieldset.HelperText>
      <Fieldset.ErrorText className={clsx(fieldsetStyledSlots.errorText)}>Error text</Fieldset.ErrorText>
      <Field.Root className={clsx(fieldStyledSlots.root)}>
        <Checkbox.Root className={clsx(checkboxStyledSlots.root)}>
          <Checkbox.Label className={clsx(checkboxStyledSlots.label)}>Label</Checkbox.Label>
          <Checkbox.Control className={clsx(checkboxStyledSlots.control)}>
            <Checkbox.Indicator className={clsx(checkboxStyledSlots.indicator)}>✔️</Checkbox.Indicator>
          </Checkbox.Control>
          <Checkbox.HiddenInput />
        </Checkbox.Root>
        <Field.HelperText className={clsx(fieldStyledSlots.helperText)}>Field Helper Text</Field.HelperText>
        <Field.ErrorText className={clsx(fieldStyledSlots.errorText)}>Field Error Text</Field.ErrorText>
      </Field.Root>
    </Fieldset.Root>
  );
};
