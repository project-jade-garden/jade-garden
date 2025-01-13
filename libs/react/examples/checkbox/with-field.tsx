import { Checkbox } from "@ark-ui/react/checkbox";
import { Field } from "@ark-ui/react/field";
import { checkboxStyledSlots as checkboxMinimal, fieldStyledSlots as fieldMinimal } from "@spark-css/theme-minimal";
import { checkboxStyledSlots as checkboxPark, fieldStyledSlots as fieldPark } from "@spark-css/theme-park";
import { checkboxStyledSlots as checkboxShadcn, fieldStyledSlots as fieldShadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { CheckIcon, MinusIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const checkboxStyledSlots = getTheme(
    { minimal: checkboxMinimal, park: checkboxPark, shadcn: checkboxShadcn },
    props.theme
  );
  const fieldStyledSlots = getTheme({ minimal: fieldMinimal, park: fieldPark, shadcn: fieldShadcn }, props.theme);

  return (
    <Field.Root {...props} className={clsx(fieldStyledSlots.root)}>
      <Checkbox.Root className={clsx(checkboxStyledSlots.root)}>
        <Checkbox.Label className={clsx(checkboxStyledSlots.label)}>Label</Checkbox.Label>
        <Checkbox.Control className={clsx(checkboxStyledSlots.control)}>
          <Checkbox.Indicator className={clsx(checkboxStyledSlots.indicator)}>
            <CheckIcon />
          </Checkbox.Indicator>
          <Checkbox.Indicator indeterminate className={clsx(checkboxStyledSlots.indicator)}>
            <MinusIcon />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.HiddenInput />
      </Checkbox.Root>
      <Field.HelperText className={clsx(fieldStyledSlots.helperText)}>Additional Info</Field.HelperText>
      <Field.ErrorText className={clsx(fieldStyledSlots.errorText)}>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
