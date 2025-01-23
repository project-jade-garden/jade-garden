import { Field } from "@ark-ui/react/field";
import { Fieldset } from "@ark-ui/react/fieldset";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Fieldset.RootProps & { theme: Theme }) => {
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
        <Field.Label className={clsx(fieldStyledSlots.label)}>Label</Field.Label>
        <Field.Input className={clsx(fieldStyledSlots.input)} />
        <Field.HelperText className={clsx(fieldStyledSlots.helperText)}>Field Helper Text</Field.HelperText>
        <Field.ErrorText className={clsx(fieldStyledSlots.errorText)}>Field Error Text</Field.ErrorText>
      </Field.Root>
    </Fieldset.Root>
  );
};
