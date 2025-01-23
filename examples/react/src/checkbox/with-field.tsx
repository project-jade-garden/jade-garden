import { Checkbox } from "@ark-ui/react/checkbox";
import { Field } from "@ark-ui/react/field";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { CheckIcon, MinusIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const checkboxStyledSlots = getTheme(
    { minimal: minimal.checkboxStyledSlots, park: park.checkboxStyledSlots, shadcn: shadcn.checkboxStyledSlots },
    props.theme
  );
  const fieldStyledSlots = getTheme(
    { minimal: minimal.fieldStyledSlots, park: park.fieldStyledSlots, shadcn: shadcn.fieldStyledSlots },
    props.theme
  );

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
