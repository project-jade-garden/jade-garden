import { Checkbox } from "@ark-ui/react/checkbox";
import { Field } from "@ark-ui/react/field";
import { Fieldset } from "@ark-ui/react/fieldset";
import {
  checkboxStyledSlots as checkboxMinimal,
  fieldStyledSlots as fieldMinimal,
  fieldsetStyledSlots as fieldsetMinimal
} from "@spark-css/theme-minimal";
import {
  checkboxStyledSlots as checkboxPark,
  fieldStyledSlots as fieldPark,
  fieldsetStyledSlots as fieldsetPark
} from "@spark-css/theme-park";
import {
  checkboxStyledSlots as checkboxShadcn,
  fieldStyledSlots as fieldShadcn,
  fieldsetStyledSlots as fieldsetShadcn
} from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithCheckbox = (props: Fieldset.RootProps & { theme: Theme }) => {
  const checkboxStyledSlots = getTheme(
    { minimal: checkboxMinimal, park: checkboxPark, shadcn: checkboxShadcn },
    props.theme
  );
  const fieldsetStyledSlots = getTheme(
    { minimal: fieldsetMinimal, park: fieldsetPark, shadcn: fieldsetShadcn },
    props.theme
  );
  const fieldStyledSlots = getTheme({ minimal: fieldMinimal, park: fieldPark, shadcn: fieldShadcn }, props.theme);

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
